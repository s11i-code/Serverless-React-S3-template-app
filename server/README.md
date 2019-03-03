## AWS lambda/serverless framework/python template

### You must have the following installed
- docker
- node
- python 3.6
- aws command line interface (aws cli)

NOTE! You must be in the server folder to run the following commands.

### Commands for running the backend (you must be inside server folder)
- `yarn`
- `pip install -r requirements.txt`
- `sls offline`
- `aws configure --profile ubi-ds-project` (it will ask for the access key and secret access key that Satu will provide)

## Using in development
1. run `sls offline` to start the server in development.

## Deploying to production
1. Run `sls deploy` to deploy your local code to production.

## Installing Python dependencies
1. Add the package to requirements.txt.
2. Run `pip install -r requirements.txt`.
