# Express-Sequelize Tutorial

1. Local Setup
2. Database
3. NPM Scripts
4. More Information: See Wiki

## Local Setup

1. `npm run setup` -> installs NPM packages and creates the .env file (might not work on Windows, sorry)
2. Fill in the `.env` file according to your local setup
3. Make sure Postgres is running on your local machine
4. Set up the db:
  * Run this if you need to create the DB: `npm run db:create`
  * `npm run db:seed`
5. `npm start` to run the main Express and Swagger servers

* Access the API at localhost:3000/api/v1/[endpoint]
* Access the Swagger API docs at localhost:3001/api-docs (JSON docs) or localhost:3001/api-ui (interactive UI)

## Database

We interface with Postgres using the Sequelize library. Sequelize comes in two parts: the library we use to build models and connect to Postgres; and the CLI for functions like seeding the database and running migrations.

### Creating New Models

1. Use the Sequelize CLI command (change the attributes as needed; if you need to add or change anything, no worries, you can do it later):

```sh
npx sequelize-cli model:create --name users --attributes is_active:boolean,first_name:string,last_name:string,email:string,university_id:string,api_token:string,type:string,avatar_url:string,is_fake:boolean
```

That command will create a model file called `users.js` inside of `db/models` as well as a migrations file called `[timestamp]-create-user.js` inside of `db/migrations`.

2. If you need to change anything, you can either update the migration file and re-run the migration or create and run a new migration. Either way, you will have to update the related model file with the changes.

*Aside: [Read more about data validation in Sequelize](http://docs.sequelizejs.com/manual/models-definition.html#validations)*

### Creating New Migrations

When you need to update the database (tables, columns, etc.), Sequelize has a nice interface to take care of the migrations for you.

```sh
npx sequelize-cli migration:create --name add-email-to-user
```

Make sure you fill in the up *and* down functions just in case you have to revert the changes.

### Undo-ing Migrations

You can use `db:migrate:undo`, this command will revert most recent migration.

```sh
npx sequelize-cli db:migrate:undo
```

You can revert back to initial state by undoing all migrations with `db:migrate:undo:all` command. You can also revert back to a specific migration by passing its name in `--to` option.

```sh
npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js
```

### Seeding the Database

```sh
npx sequelize-cli seed:generate --name users

npm run db:seed
```

This will create a seeding file similar to migration files named, `[timestamp]-users.js`.

*You can use something like [Mockaroo](https://mockaroo.com/) to make mock data and paste it into the seed file.*

### Undo-ing Seeds

If you wish to undo most recent seed:

```sh
npx sequelize-cli db:seed:undo
```

If you wish to undo a specific seed:

```sh
npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data
```

If you wish to undo all seeds:

```sh
npx sequelize-cli db:seed:undo:all
```

## NPM Scripts

`npm test`

Runs tests - using Jest - from the `__tests__` folder.

`npm run lint`

Runs eslint.

`npm run lint:fix`

Corrects common linting errors.

`npm start`

Runs Express server.

`npm run db:create`

Creates the database.

`npm run db:seed`

Seeds the database from files in `db/seeders`.

`npm run db:migrate`

Runs migrations from files in `db/migrations`.

`npm run db:clean`

Removes (and truncates) all data from database tables.
