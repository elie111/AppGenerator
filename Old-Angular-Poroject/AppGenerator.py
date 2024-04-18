import json
import shutil
import os


def read_json(json_path):
    """Read and return the JSON data from the specified path."""
    with open(json_path, "r") as file:
        return json.load(file)


def copy_project_directory(original_path, new_path):
    """Copy the entire project directory from original to new location."""
    shutil.copytree(original_path, new_path, dirs_exist_ok=True)


def generate_css(data, new_path):
    """Generate CSS content based on the JSON data and write to the appropriate file."""
    css_content = ""
    for component_type, details in data.items():
        for idx, style in enumerate(details["styles"]):
            class_name = f"{component_type}-{idx + 1}"
            css_content += (
                f".{class_name} " + "{" + " ".join(f"{k}: {v};" for k, v in style.items()) + "}\n"
            )
    css_path = os.path.join(new_path, "src", "app.css")
    with open(css_path, "w") as css_file:
        css_file.write(css_content)


def generate_jsx(data, new_path):
    """Generate JSX content based on the JSON data and modify the existing JSX file."""
    num_pages = max(max(component["page"]) for component in data.values()) + 1
    page_components = [[] for _ in range(num_pages)]

    for component_type, details in data.items():
        for idx, page in enumerate(details["page"]):
            component_id = f"{component_type}-{idx + 1}"
            if component_type == "button":
                page_components[page].append(
                    f'<Button className="{component_id}" onClick={{() => setCurrentPage(previousPage => (previousPage + 1) % 2)}}>test button</Button>'
                )
            elif component_type == "section":
                page_components[page].append(
                    f'<Section className="{component_id}" onClick={{() => setCurrentPage(previousPage => (previousPage + 1) % 2)}} />'
                )

    jsx_content = "const pages = [\n"
    for page in page_components:
        jsx_content += "  <>\n    " + "\n    ".join(page) + "\n  </>,\n"
    jsx_content += "];\n"

    jsx_path = os.path.join(new_path, "src", "app.jsx")
    with open(jsx_path, "r") as file:
        lines = file.readlines()
    insert_index = next(
        i for i, line in enumerate(lines) if "// Insert pages array here" in line
    )
    lines.insert(insert_index + 1, jsx_content)
    with open(jsx_path, "w") as file:
        file.writelines(lines)


def update_project(original_path, new_path, json_path):
    """Main function to update the project based on a JSON blueprint."""
    data = read_json(json_path)
    copy_project_directory(original_path, new_path)
    generate_css(data, new_path)
    generate_jsx(data, new_path)


if __name__ == "__main__":
    original_project_path = "C:/Users/win10/Desktop/FinalProject/my-react-app"
    new_project_path = "C:/Users/win10/Desktop/FinalProject/generatedReactApp"
    json_file_path = "C:/Users/win10/Desktop/FinalProject/AppBlueprint.json"
    update_project(original_project_path, new_project_path, json_file_path)
