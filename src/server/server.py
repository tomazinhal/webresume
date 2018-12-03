from flask import Flask, request, jsonify
from flask_restful import Api, Resource
from flask_cors import CORS
from pymongo import MongoClient
import json
from bson import json_util

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
api = Api(app)

client = MongoClient(
    "0.0.0.0",
    27017
)
0
db = client.resume_users

class User(Resource):
    def get(self, handle):
        data = db.users.find_one({
            "handle": handle
        })
        path = request.full_path
        if "personal" in path and "personal" not in handle:
            data = data["personal"]
        elif "resume" in path and "resume" not in handle:
            data = data["resume"]
        elif "contact" in path and "contact" not in handle:
            data = data["contact"]
        return jsonify(json.dumps(data, default=json_util.default))

    def post(self, handle):
        print("handle: " + handle)
        data = request.json
        doc = db.users.insert_one(data)
        return doc

api.add_resource(
    User,
    '/u/<string:handle>',
    '/u/<string:handle>/personal',
    '/u/<string:handle>/contact',
    '/u/<string:handle>/resume'
)

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
