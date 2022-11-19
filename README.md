# CI-CD Challenge

The aim of this repo is to setup a simple React applciation with some tests which will then be run as part of a CI pipeline on CircleCi

## Front End setup 

Create react app was used to setup a simple front end, here is the getting started guide that was followed https://create-react-app.dev/docs/getting-started. 
The application consists of a button which generates some random text when clicked. 
Tests are located in `src/App.test.js` which verify that the application works. Tests can be run using `npm test` in the root directory.

## Connecting To CircleCI
The first step is to sign in to Circle Ci, you can sign in using github, this will link your github account and its repositories to your newly created CircleCi account. 

## Setting up the project

Click the "Go to Application" button found on the top right corner of the website. 

Make sure you select your github account as the organisation.

This will allow you to then select the repository in your gitgub account that you wish to run the Circle Ci pipeline on. 

Clicking the "Fast" option will give you a config.yml. Circle Ci will suggest a number of different config.yml templates to use based on the type of project in the repository you have selected.  

Select the template that is best suited to you. For this project the Node.js template was chosen.

We can edit this config at any point in the future.

## Triggering the pipeline

Once your desired config.yml is chosen press the "commit and run"
This applies the config file to the pipeline and the testing process begins.

All pipelines can be found by navigating to the dashboard section of the Circle Ci site.

From the dashboard we can see our new pipeline with the status "running", wait until the status of your pipeline changes.

If the status changes to success, then your new pipline has completed running all steps succesfully including your tests. 

You can view the jobs that ran by clicking on the on the black triangle beside the success status symbol or on the status symbol itself.  

Clicking on the jobs that have ran will then display all the steps involved in running that particular job.


### Links to Circle Ci's getting started guides

https://circleci.com/docs/

https://circleci.com/docs/getting-started/