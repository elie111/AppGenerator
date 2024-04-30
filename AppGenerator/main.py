from JSONHandler import JSONHandler
from stylesGenerator import CSSGenerator
from jsxGenerator import JSXGenerator
import shutil



def generateApp(original_path, new_path, json_path):
    copy_project_directory(original_path, new_path)
    isValid, data = JSONHandler.read_json(json_path)
    if isValid:
        CSSGenerator.generate_css(data, new_path)
        JSXGenerator.generate_jsx(data, new_path)

def copy_project_directory(original_path, new_path):
    # Copy base app
    shutil.copytree(original_path, new_path, dirs_exist_ok=True)
    
if __name__ == "__main__":
    original_project_path = "./BaseApp"
    new_project_path = "./myGeneratedReactApp" # Must delete previous generated app or pass another new path
    json_file_path = "./AppBlueprints/AppBlueprints.json"
    generateApp(original_project_path, new_project_path, json_file_path)
