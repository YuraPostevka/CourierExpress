CREATE TABLE Users
(
    Id                                         int NOT NULL IDENTITY(1,1),
    PhoneNumber                                nvarchar(12) NOT NULL,
    Name	                                   nvarchar(255) NOT NULL,
	Password                                   nvarchar(255) NOT NULL,
);

ALTER TABLE Users
ADD CONSTRAINT PK_Users
    PRIMARY KEY CLUSTERED (Id ASC);

ALTER TABLE Users
ADD CONSTRAINT UQ_Users_Login
    UNIQUE (PhoneNumber);