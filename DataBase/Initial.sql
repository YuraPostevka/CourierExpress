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
    [Weight]                                   nvarchar(5) NOT NULL,
	Price	                                   nvarchar(5) NOT NULL,
	OwnerId									   int NOT NULL,
	CourierId								   int NULL,
	StartPoint	                               nvarchar(max) NOT NULL,
	[EndPoint]	                               nvarchar(max) NOT NULL,
	[Status]								   int NOT NULL,
	
);

ALTER TABLE Orders
ADD CONSTRAINT PK_Orders
    PRIMARY KEY CLUSTERED (Id ASC);

ALTER TABLE Orders
ADD CONSTRAINT FK_Orders_Owner
    FOREIGN KEY  (OwnerId)
    REFERENCES dbo.Users (Id);

ALTER TABLE Orders
ADD CONSTRAINT FK_Orders_Courier
    FOREIGN KEY  (CourierId)
    REFERENCES dbo.Users (Id);

insert into dbo.Users (PhoneNumber,[Name],Password)
values('1','Yura','1');


