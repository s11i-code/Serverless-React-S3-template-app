This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Useful commands
These commands must be run inside the frontend/ folder.
#### `yarn start`
Starts the development server at localhost:3000.

#### `yarn deploy`
Deploys your current local folder the in AWS S3. This only works if you have configured the S3 bucket in package.json. It will accessible in http://my-bucket-name.s3-website.region.amazonaws.com/, e.g. http://serverless-react-template-frontend.s3-website.eu-north-1.amazonaws.com/.
