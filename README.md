# LoopBack 4 Lambda

## Installation/Initial Setup
1. Run the following global install commands to get the CLIs needed:
`npm i -g @loopback/cli`
`npm install -g serverless`

2. Run the following commands to install other packages and prep the application environment:
`npm install --ignore-scripts`
`npm rebuild`

## Running the Application
1. To run the application in a way that mocks AWS serverless infrastructure offline, run `npm run serve:{{environment}}` to start the application in different environments. Open the api at "http:localhost:3000".
  a. For example, `npm run serve:dev` will run the application in development mode. You can use any of the following for environments: [dev, qa, uat, prod].
2. To run the application locally without mocking AWS, and to gain access to the Loopback explorer, run `npm start`. Open the api at "http:localhost:3000" or "http://[::1]:3000".
  a. To access the Loopback explorer, navigate to "http:localhost:3000/explorer".

## Deploying to AWS
1. Prior to deployment, check the deployment commands in package.json and be sure to enter your AWS profile in place of "personal" for each command. (ex: --aws-profile personal -> --aws-profile {{your_profile_name}})
2. To deploy the application to AWS, run `npm run deploy:{{environment}}`.
  a. For example, `npm run deploy:dev` will deploy the application to the development environment. You can use any of the following for environments: [dev, qa, uat, prod].
3. If you wish to remove the entire deployed infrastructure, run `npm run remove:{{environment}}`.

## How to Set Up a Datasource
1. Run `lb4 datasource` and follow the prompts to set one up. The new datasource will appear in the src/datasources folder.
2. Be sure to install the connecotr for whatever source you are using. For example, if using mysql, run `npm install loopback-connector-mysql --save`.

## How to Create a New API Entity
1. Run `lb4 model` and follow the prompts to create the model. The new model will appear in the src/models folder.
2. Run `lb4 repository` and follow the prompts to create a repository for the model. The new repository will appear in the src/repositories folder.
3. Run `lb4 controller` and follow the prompts to create a controller for the repository. The new controller will appear in the src/controllers folder.

## Running Migrations
1. Run `npm run migrate` to run migrations. By default, update migrations will be ran, so the schema will be updated and not dropped, so existing data will be kept.
2. To run a fresh migration that will drop and recreate the schema, but cause all data to be lost, run `npm run migrate -- --rebuild`.

## Filtering Loopback API Queries
1. Refer to the following for filter documentation: https://loopback.io/doc/en/lb4/Querying-data.html
2. Where clause operators can be found here: https://loopback.io/doc/en/lb4/Where-filter.html#operators
