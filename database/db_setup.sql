DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO public;

create table organisation (
	organisation_id serial not null primary key,
	organisation_name text,
	organisation_short text,
	logo_path text
);

create table teams (
	team_id serial not null primary key,
	organisation_id int,
	team_name text,
	team_short_name text
);

create table fixtures (
	fixture_id serial not null primary key,
	fixture_name text,
	fixture_date date,
	fixture_loc text,
	fixture_type text,
	home_team_id int,
	away_team_id int
);

create table players (
	player_id serial not null primary key,
	organisation_id int,
	first_name text,
	last_name text,
	abbrev_name text,
	photo_path text,
	bowl_type text,
	bat_type text	
);

create table team_lists (
	list_id serial not null primary key,
	fixture_id int,
	team_id int,
	player_id int
);

create table innings(
	innings_id serial not null primary key,
	fixture_id int,
	batting_team_id int,
	fielding_team_id int,
	innings_num int,
	innings_status text
);

create table balls (
	ball_id serial not null primary key,
	innings_id int,
	over_num int,
	ball_number int,
	ball_number_legit int,
	bowler_id int,
	batter_id int,
	other_batter_id int,
	runs_scored int,
	extras_type text,
	extras_scored int,
	wicket_id int,
	batsman_out int
);


