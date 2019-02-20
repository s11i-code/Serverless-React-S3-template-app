import json

MOCK_DATA = [
    {"message": "Hello from lambda 1"},
    {"message": "Hello from lambda 2"}
]

def handler(event, context):
    return {"statusCode": 200, "body": json.dumps(MOCK_DATA)}

{
  "Version":"2012-10-17",
  "Statement":[
    {
      "Sid":"AddPerm",
      "Effect":"Allow",
      "Principal": "*",
      "Action":["s3:GetObject"],
      "Resource":["arn:aws:s3:::serverless-react-template-frontend/*"]
    }
  ]
}
