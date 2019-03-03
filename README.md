This is a template for Serverless Framework / Python backend with a React frontend hosted in S3.

### TODOS for the initial setup
1. Go through the steps in server README to deploy the backend.
2. After the first deploy, you get the url where the app is hosted. Add it in the config.js file in frontend folder.
3. Create a publicly accessible bucket(https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html) in S3 for hosting the frontend.
4. Add the name of the bucket in the frontend/package.json deploy script.
5. Note that this app uses the serverless service as the default AWS profile, so you should configure this profile with `aws configure --profile SERVICE_NAME` or remove the --profile option from frontend deploy script to use your default profile.
6. Deploy the frontend with `yarn deploy` in the frontend folder.
7. Access your frontend in http://my-bucket-name.s3-website.region.amazonaws.com!

For information about running the app locally, refer to the README's in the frontend/ and backend/ folders.
