from JSONHandler import JSONHandler
from stylesGenerator import CSSGenerator
from jsxGenerator import JSXGenerator


def generateApp(original_path, new_path, json_path):
    data = JSONHandler.read_json(json_path)
    JSONHandler.copy_project_directory(original_path, new_path)
    CSSGenerator.generate_css(data, new_path)
    JSXGenerator.generate_jsx(data, new_path)


if __name__ == "__main__":
    original_project_path = "../my-react-app"
    new_project_path = "../myGeneratedReactApp"
    json_file_path = "../AppBlueprint.json"
    generateApp(original_project_path, new_project_path, json_file_path)
