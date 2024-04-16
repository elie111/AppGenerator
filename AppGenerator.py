import os
import shutil
import json
import sys


component_signature = {
    "button": "app-button-component",
    "section": "app-section-component",
}


def copy_project(source_dir, target_dir):
    try:
        shutil.copytree(source_dir, target_dir)
    except FileExistsError:
        print("Target directory already exists.")
        sys.exit(1)
    except Exception as e:
        print(f"Error copying project: {e}")
        sys.exit(1)


def generate_app(project_dir, components):
    # Assuming all components are stored under project_dir/src/app/
    components_dir = os.path.join(project_dir, "src", "app").replace("\\", "/")
    for component_name, component_details in components.items():
        if "positions" in component_details:
            positions = component_details["positions"]
            styles = component_details["styles"]
            html_file_path = sys.argv[2] + "/src/app/app.component.html"
            css_file_path = sys.argv[2] + "/src/app/app.component.css"
            for index, style in enumerate(styles):
                # Generate a class name dynamically, e.g., button-1, button-2, etc.
                class_name = f"{component_signature[component_name]}-{index + 1}"
                with open(css_file_path, "a") as file:
                    file.write(f".{class_name} {{")
                for rule, value in style.items():
                    # Convert each rule into CSS syntax
                    with open(css_file_path, "a") as file:
                        file.write(f"  {rule}: {value};")
                with open(css_file_path, "a") as file:
                    file.write(f"}}")
            for index, item in enumerate(positions):
                top = item[0]
                left = item[1]
                class_name = f"{component_signature[component_name]}-{index + 1}"
                component_tag = (
                    '<%s class="%s" style="position: absolute; top: %s; left: %s;">Hello World</%s>'
                    % (
                        component_signature[component_name],
                        class_name,
                        top,
                        left,
                        component_signature[component_name],
                    )
                )
                with open(html_file_path, "a") as file:
                    file.write(f"\n{component_tag}\n")

        else:
            print(f"{component_name} has no positions defined.")


def main():
    if len(sys.argv) != 4:
        sys.exit(1)
    source_project_dir = sys.argv[1]
    target_project_dir = sys.argv[2]
    json_file_path = sys.argv[3]

    # Read the JSON file to get the list of components
    try:
        with open(json_file_path, "r") as json_file:
            data = json.load(json_file)
            mapped_data = {}
            for key in data:
                mapped_data[key] = {
                    sub_key: data[key][sub_key] for sub_key in data[key]
                }
            print(mapped_data)
            # components = data.get('components', [])
    #         if not components:
    #             print("No components in JSON file.")
    #             sys.exit(1)
    except Exception as e:
        print(f"Error reading the JSON file: {e}")
        sys.exit(1)

    copy_project(source_project_dir, target_project_dir)
    generate_app(target_project_dir, mapped_data)


if __name__ == "__main__":
    main()
    #  python AppGenerator.py C:/Users/win10/Desktop/FinalProject/AppComponents/AppComponents c:/Users/win10/Desktop/FinalProject/myGeneratedApp C:/Users/win10/Desktop/FinalProject/components.json