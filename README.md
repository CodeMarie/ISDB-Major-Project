## :musical_note: ISDB Project :musical_note: ##

## Technologies Used

Jira Atlassian and Trello for project and time management 
Postman for testing of routes 
Node.js, Express, Ejs, Eslint Passport, and Json Web Tokem (Jwt)
Mongoose, MongoDb extension for VS Code and MongoDb Atlas used
Heroku for deployment of the project and Github used for version control
Swagger.io for documentation 

## Favourite functions

My addition of all tracks as an async function.
## List unsolved problems which would be fixed in future iterations.

Swagger - see dev diary for more details.
## Instructions for Use ##

Imported dependencies include: 
Use the command npm install or if package.json file exists assess for needed dependencies. Please use the CLI commands listed below if not installed already
    sudo npm install -g express-generator
This sudo command will install this globally.
    npm install --save mongoose
    npm install dotenv 
This is for use of .env file to allow your mongoose connection string to be stored safely when pushing your project to GitHub. This is because the string requires a password. 
    (For mac users) brew tap heroku/brew && brew install heroku 
or Windows/Linux select plugin option. 
Access your connection string from mongodb. Mongodb Atlas for this project was used.
A Link to this page can be found [here]( https://www.mongodb.com/atlas/database)
    npm install passport-jwt
    npm install --save passport-local-mongoose
This will need importing into the login/user folder
    npm install --save jsonwebtoken
As the views engine was changed from jade to ejs
    npm install --save ejs
As swagger has been used for documentation install the dependency listed below
npm install --save swagger-ui-express 
Please note at time of deploying the project Swagger implementation is not awaiting a fix for some errors such as the history and saving [here] ( https://community.smartbear.com/t5/Swagger-Inspector-Questions Swagger-Inspector-is-not-creating-history/m-p/228213)
Deployment has been through Heroku, please create an account to be able to also deploy and open application. 
## Development Diary ##

15.01.22
Organisation of routes folder. Design of workflow and modules required in Trello backlog with a Jira sprint. Installed .env with npm install dotenv and imported into app.js 

To ensure the protection of API keys for both git combined with the use of Heroku, there are two requirements. This is because there is a conflict as there is a need to place the api-keys into the .env file for uploading to github however, in order to use the key in heroku need to be accessible. 

Installed heroku CLI and added another remote with download for mac brew tap heroku && brew install heroku. The remote was added with heroku git:remote -a first-deployment-su and checked with git remote -v.

Once API keys are inserted the command heroku config:set API_Key can be used and then changes deployed to github with API in .env with git push -u origin main and git push heroku main.

CSV files of albums, artists, genres, media_type and tracks imported into mongoDb. Checks your documents through mongodb extension for VS code or mongoDB Atlas. 

To monetise this App the token is generated once the user has successfully registered and then logged in using the appropriate routes. This jwt token can then be applied within the headers for this project to allow access to songs information. 

16.01.22
Completion of schemas and models for required elements and import into relevant file. Creation of endpoints and testing in Postman and browser. 

17.01.22
Addition of passport to protect endpoints with further testing 

18.01.22 
Change to reference the Object of Album and Genre in Schema and Models
Addition of User Schema and Model and implementation of jwt Token.

19.01.22
Testing of routes in Postman Application.

20.01.22
Deployment testing and notes for Swagger.io documentation as Swagger inspector still not working. Also issues with update to editor. 

21.01.22 
Continuation of Swagger notes. To implement npm install --save swagger-ui-express however as there is currently causing a known issue to swagger this was implemented as a json object. 
As there has been a known issue with Swagger Inspector at the time of deploying project, a backup of fields provided as isdb-project.json file. The community page for Swagger has documented these saving and history errors as known issues currently being resolved.
Addion an extra endpoint to what was required by the spec by returning all tracks to provide inspiration to the user.
Continuation of Readme file.

22.01.22 
Addition to Readme and submission. 
## Presentation ##
A further presentation associated with this project can be found [here]( https://docs.google.com/presentation/d/1S2HrUkbbLnUysO_GNOqxuWb9Emv4MKiV/edit?usp=sharing&ouid=102768298084610579842&rtpof=true&sd=true)



