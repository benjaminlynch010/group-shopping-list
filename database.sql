-- Don't forget to add your create table SQL 
-- It is also helpful to include some test dataCREATE TABLE list (
	"id" SERIAL PRIMARY KEY,
	"item" varchar(80),
	"quantity" DECIMAL(5,2),
	"unit" varchar(20),
	"purchased" boolean not null default false
);

INSERT INTO list ("item", "quantity", "unit")
VALUES ('Steak', '4', 'pounds');

DROP TABLE list;
