CREATE TABLE Users
(
    Id                                         int NOT NULL IDENTITY(1,1),
    PhoneNumber                                nvarchar(13) NOT NULL,
    [Name]	                                   nvarchar(255) NOT NULL,
	[Password]                                 nvarchar(255) NOT NULL,
);

ALTER TABLE Users
ADD CONSTRAINT PK_Users
    PRIMARY KEY CLUSTERED (Id ASC);

ALTER TABLE Users
ADD CONSTRAINT UQ_Users_Login
    UNIQUE (PhoneNumber);

CREATE TABLE Orders
(
    Id                                         int NOT NULL IDENTITY(1,1),
    [Description]                              nvarchar(50) NOT NULL,
	Place		                               nvarchar(50) NOT NULL,
    [Weight]                                   int NOT NULL,
	Price	                                   int NOT NULL,
	[Status]								   int NOT NULL,
	CustomerId								   int NULL,
	CourierId								   int NULL,
);

ALTER TABLE Orders
ADD CONSTRAINT PK_Orders
    PRIMARY KEY CLUSTERED (Id ASC);

ALTER TABLE Orders
ADD CONSTRAINT FK_Orders_Costumer
    FOREIGN KEY  (CustomerId)
    REFERENCES dbo.Users (Id);

ALTER TABLE Orders
ADD CONSTRAINT FK_Orders_Courier
    FOREIGN KEY  (CourierId)
    REFERENCES dbo.Users (Id);


