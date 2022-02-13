# AirDnB

1. Clone this repo.
    * git clone git@github.com:JacobHoldowsky/AirDnB.git

2. Install dependencies from the root directory
    * npm install

3. Create a POSTGRESQL user with CREATEDB and PASSWORD in PSQL.
    * CREATE USER <name> WITH CREATEDB PASSOWRD <'password'>

4. Create a .env fild in the backend directory based on the .env.example found within the respective directory.

5. Enter you username and password information into your .env file along with your desired database name, a secured combination of characters for your JWT_SECRET, and your desired PORT (preferably 5000).

6. Add the following proxy to your package.json file within your frontend directory, replacing or keeping the 5000 port to match your PORT configuration found in your .env file.

    * "proxy": "http://localhost:5000"

7. Create Database, Migrate, and Seed models.

    * npx dotenv sequelize db:create
    * npx dotenv sequelize db:migrate
    * npx dotenv sequelize db:seed:all

8. Start the services in the backend directory.

    * npm start

9. Start the services in the frontend directory, which should open the project in your default browser. If not, navigat to http://localhost:3000.

    * npm start

10. You can use the Demo user or create an account to begin using AirDnB.