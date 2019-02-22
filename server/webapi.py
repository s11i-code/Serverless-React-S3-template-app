import json
from lambda_decorators import cors_headers

MOCK_DATA = [
    {"message": "Hello from lambda 1"},
    {"message": "Hello from lambda 2"}
]

@cors_headers
def handler(event, context):
    return {"statusCode": 200,  "body": json.dumps(MOCK_DATA)}
