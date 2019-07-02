⚠️ working

## Getting Start

```
yarn postinstall
yarn start
```

## Database (/prisma/dev.db)

Table Name | Fields
-----------|-----------
users      | id, username, email, password, created_at, updated_at
currencies | id, code, name, symbol, decimal, enabled, created_at, updated_at

#### users

```
CREATE TABLE "users" (
	"id"	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	"username"	varchar(80) NOT NULL,
	"email"	varchar(254) NOT NULL,
	"password"	varchar(60) NOT NULL,
	"created_at"	datetime,
	"updated_at"	datetime
);
```

#### currencies

```
CREATE TABLE "currencies" (
	"id"	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	"code"	varchar(5) NOT NULL,
	"name"	varchar(255) NOT NULL,
	"symbol"	varchar(5) NOT NULL,
	"decimal"	integer NOT NULL DEFAULT '2',
	"enabled"	boolean NOT NULL DEFAULT '0',
	"created_at"	datetime,
	"updated_at"	datetime
);
```