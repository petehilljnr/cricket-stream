insert into organisation (organisation_name, logo_path, organisation_short) 
values ('King''s High School', 'kings.png', 'KHS'), ('Wakatipu High School', 'wakatipu.png', 'WHS');

insert into teams (organisation_id, team_name, team_short_name)
values (1, 'Junior XI', 'JXI'), (2,'Junior XI', 'JXI');

insert into fixtures (fixture_name, fixture_date, fixture_loc, home_team_id, away_team_id, fixture_type)
values ('Wakatipu Junior Interschool', '2024-11-11', 'Kings High School No.1',1, 2, '2 day match');

insert into players (organisation_id, first_name, last_name, abbrev_name)
values (1, 'Connor','MacDonald','C. MacDonald'),
	   (1, 'Evan','Lowrey','E. Lowrey'),
	   (1, 'Lachie','Mitchell','L. Mitchell'),
	   (1, 'Levi','Simpson','L. Simpson'),
	   (1, 'Charlie','McDonald','C. McDonald'),
	   (1, 'James','Reay','J. Reay'),
	   (1, 'Ollie','Hill','O. Hill'),
	   (1, 'Jack','Wilson','J. Wilson'),
	   (1, 'Nived','Menon','N. Menon'),
	   (1, 'Harrison','Corbett','H. Corbett'),
	   (1, 'Un', 'Known', 'U. Known'),
	   (2, 'Player', '1', 'P. 1'),
	   (2, 'Player', '2', 'P. 2'),
	   (2, 'Player', '3', 'P. 3'),
	   (2, 'Player', '4', 'P. 4'),
	   (2, 'Player', '5', 'P. 5'),
	   (2, 'Player', '6', 'P. 6'),
	   (2, 'Player', '7', 'P. 7'),
	   (2, 'Player', '8', 'P. 8'),
	   (2, 'Player', '9', 'P. 9'),
	   (2, 'Player', '10', 'P. 10'),
	   (2, 'Player', '11', 'P. 11')
;

insert into team_lists (fixture_id, team_id, player_id)
select 1, 1, player_id
from players
where organisation_id = 1;

insert into team_lists (fixture_id, team_id, player_id)
select 1, 2, player_id
from players
where organisation_id = 2;

insert into innings (fixture_id, batting_team_id, fielding_team_id, innings_num, innings_status) 
values (1, 1, 2, 0, 'Not Started');



	   
	   
