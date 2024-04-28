import json
from jsonschema import validate
from jsonschema.exceptions import ValidationError


class JSONHandler:

    @staticmethod
    def read_json(json_path):
        with open(json_path, "r") as file:
            data = json.load(file)
        return JSONHandler.validate_json(data)
        

    @staticmethod
    def load_schema(schema_file):
        with open(schema_file, "r") as file:
            return json.load(file)

    @staticmethod
    def validate_json(data):
        schema = JSONHandler.load_schema("./AppBlueprints/app-blueprint-schema.json")
        try:
            validate(instance=data, schema=schema)
            print("Valid JSON")
            return True, data
        except ValidationError as e:
            print("Invalid JSON:", e)
            return False, str(e)
