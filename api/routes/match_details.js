// route query
const sql = (query) => {
  return `
  SELECT 
    f.fixture_id,
    f.fixture_name,
    f.fixture_date,
    f.fixture_loc,
    f.fixture_type,
    ht.team_id as team1_id,
    ht.team_name AS home_team,
    ho.organisation_name AS home_organisation,
    ho.organisation_short AS home_short,
    ho.logo_path as home_logo,
    at.team_id as team2_id,
    at.team_name AS away_team,
    ao.organisation_name AS away_organisation,
    ao.organisation_short AS away_short,
    ao.logo_path as away_logo
FROM 
    fixtures f
JOIN 
    teams ht ON f.home_team_id = ht.team_id
JOIN 
    teams at ON f.away_team_id = at.team_id
JOIN 
    organisation ho ON ht.organisation_id = ho.organisation_id
JOIN 
    organisation ao ON at.organisation_id = ao.organisation_id
WHERE f.fixture_id = ${query.fixture_id}
ORDER BY 
    f.fixture_date

  `
}

// route schema
const schema = {
  description: 'Match details',
  tags: ['api'],
  summary: 'Gets the match details',
  params: {},
  querystring: {
    fixture_id: {
      type: 'integer',
      description: 'ID of the fixture',
      default: 1
    },
  }
}

// create route
module.exports = function (fastify, opts, next) {
  fastify.route({
    method: 'GET',
    url: '/query/match_details',
    schema: schema,
    handler: function (request, reply) {
      fastify.pg.connect(onConnect)

      function onConnect(err, client, release) {
        if (err) {
          request.log.error(err)
          return reply.code(500).send({ error: "Database connection error." })
        }

        client.query(
          sql(request.query),
          function onResult(err, result) {
            release()
            reply.send(err || result.rows)
          }
        )
      }
    }
  })
  next()
}

module.exports.autoPrefix = '/v1'
