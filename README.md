This is a template for Serverless Framework / Python backend with a React frontend hosted in S3.

### TODOS for the initial setup
1. In server folder, run `sls deploy` to deploy your endpoints in AWS Lambda.
2. After the first deploy, you get the url where the app is hosted. Add it in the url.js file in frontend folder.
3. Create a publicly accessible bucket(https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteEndpoints.html) in S3 for hosting the frontend.
4. Add the name of the bucket in the frontend/package.json deploy script.
5. Access your frontend in http://my-bucket-name.s3-website.region.amazonaws.com!
