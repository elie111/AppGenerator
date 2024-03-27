import os
import shutil
import json
import sys

def copy_project(source_dir, target_dir):
    try:
        shutil.copytree(source_dir, target_dir)
    except FileExistsError:
        print("Target directory already exists.")
        sys.exit(1)
    except Exception as e:
        print(f"Error copying project: {e}")
        sys.exit(1)

def filter_components(project_dir, components):
    # Assuming all components are stored under project_dir/src/app/
    components_dir = os.path.join(project_dir, 'src', 'app').replace("\\", "/")
    for item in os.listdir(components_dir):
        item_path = os.path.join(components_dir, item).replace("\\", "/")
        if os.path.isdir(item_path):
            file_path = sys.argv[2]+'/src/app/app.component.html'
            component_tag = '<app-button-component>Hello World</app-button-component>'
            with open(file_path, 'a') as file:
                file.write(f"\n{component_tag}\n")
            print(f"Appended {component_tag} to {file_path}.")

def main():
    if len(sys.argv) != 4:
        sys.exit(1)
    source_project_dir = sys.argv[1]
    target_project_dir = sys.argv[2]
    json_file_path = sys.argv[3]

    # Read the JSON file to get the list of components
    try:
        with open(json_file_path, 'r') as json_file:
            data = json.load(json_file)
            components = data.get('components', [])
            if not components:
                print("No components in JSON file.")
                sys.exit(1)
    except Exception as e:
        print(f"Error reading the JSON file: {e}")
        sys.exit(1)

    copy_project(source_project_dir, target_project_dir)
    filter_components(target_project_dir, components)

if __name__ == "__main__":
    main()
