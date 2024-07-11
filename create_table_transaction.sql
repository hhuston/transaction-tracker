-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CREATE TABLE Transactions (
-- 	TransactionID SERIAL PRIMARY KEY,
-- 	FullName varchar(255),
-- 	TotalCost NUMERIC,
-- 	OwedToUser BOOLEAN,
-- 	Date DATE
-- );

-- CREATE TABLE People (
-- 	UserID SERIAL PRIMARY KEY,
-- 	FullName varchar(255),
-- 	DebtToUser NUMERIC
-- );

-- CREATE TABLE Individual_Transactions (
-- 	TransactionID INTEGER REFERENCES Transactions (TransactionID),
-- 	Cost NUMERIC,
-- 	OwnerID INTEGER REFERENCES People (UserID),
-- 		CONSTRAINT IndividualTransactionID PRIMARY KEY (TransactionID, OwnerID)
-- )

-- CREATE TABLE Items (
-- 	TransactionID INTEGER,
-- 	OwnerID INTEGER,
-- 	Item VARCHAR(255),
-- 	Cost Numeric,
-- 		CONSTRAINT ItemID FOREIGN KEY (TransactionID, OwnerID) 
-- 		REFERENCES Individual_Transactions (TransactionID, OwnerID)
-- )