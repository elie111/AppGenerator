import json
import shutil


class JSONHandler:
    def read_json(json_path):
        # Read and return the JSON data
        with open(json_path, "r") as file:
            return json.load(file)

    def copy_project_directory(original_path, new_path):
        # Copy base app
        shutil.copytree(original_path, new_path, dirs_exist_ok=True)
