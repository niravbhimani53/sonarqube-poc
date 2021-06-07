# sonarqube-poc

This is a simple POC for performing analysis of ReactJS and Dotnet gRPC server project using community version of SonarQube https://www.sonarqube.org.

## Setup
### Run SonarQube server
1. Clone the project `git clone git@github.com:niravbhimani53/sonarqube-poc.git`
1. Start terminal session in your root project directory
1. Run instance of SonarQube server by running following command,
   ```
   docker-compose up
   or 
   docker-compose up -d
   ```
1. To view SonarQube UI, go to http://localhost:9000
1. Login using administrator credentials
> Login: admin

> Password: admin
1. For more information on setup visit https://docs.sonarqube.org/latest/setup/install-server/

### Create new project in SonarQube
_This setup will help to create new project in SonarQube and generate project key and token_
1. Once you are logged into SonarQube UI http://localhost:9000
1. Create a new project
1. Give your unique project key name and hit the button Setup
1. Now assign a token name and click on Generate button
1. Copy the project key & token and store it temporarily

### Running Code Analysis for Dotnet gRPC project

1. Run `cd app`
1. Create a new project in SonarQube UI. Then store the new project key and token temporarily
1. Build docker image `docker build -t dotnet-sonar-poc .`
1. Run docker image to generate code analysis and replace the project key & token generated in lasted step to below command,
   ```
   $ docker run -it --rm -v server:/server dotnet-sonar-test bash -c "cd . && dotnet sonarscanner begin /k:<SONAR_PROJECT_KEY> /d:sonar.host.url=http://host.docker.internal:9000 /d:sonar.login=<PROJECT_TOKEN> && dotnet restore && dotnet build -c Release && dotnet sonarscanner end /d:sonar.login= <PROJECT_TOKEN>"
   ```
1. Code analysis report of the project will be available in SonarQube http://localhost:9000/projects and select your dotnet project

### Running Code Analysis for ReactJS project

_To run code analysis on ReactJS project easily we will be using npm package `sonarqube-scanner` https://github.com/bellingard/sonar-scanner-npm_
1. Run `cd app`
1. Create a new project for ReactJS project in SonarQube UI. Then store the new project key and token temporarily
1. Open root project in VS Code editor and then open `sonar-project.ts` file
1. Replace the project token and project key in the file
1. Open terminal and navigate to `app` folder
   `cd app`
1. Install packages
   `npm i`
1. To generate code analysis on the ReactJS project, run command
   `node sonar-project.ts`
1. Code analysis report of the project will be available in SonarQube http://localhost:9000/projects and select your ReactJS project
