import os
from componentsMapping import COMPONENTS_TAG


class JSXGenerator:
    # Generates JSX based on JSON data

    @staticmethod
    def generate_jsx(data, new_path):
        components = JSXGenerator.generate_components(data)
        JSXGenerator.insert_jsx(components, new_path)

    @staticmethod
    def generate_components(data, isNested=False):
        if len(data) <= 0:
            return {"": ""}
        num_pages = max(component["page"] for component in data.values()) + 1
        page_components = [[] for _ in range(num_pages)]

        for component_id, details in data.items():
            component_id = f"{component_id}"
            page_components[details["page"]].append(
                f'<{COMPONENTS_TAG[details["id"]]} key="{component_id}" className="{component_id}" params={{{details["params"]}}} nested={{{JSXGenerator.generate_components(details["children"],True)}}}>test button</{COMPONENTS_TAG[details["id"]]}>'
            )
        if isNested:
            jsx_content = "[\n"
        else:
            jsx_content = "const pages = [\n"

        for page in page_components:
            jsx_content += "  <>\n    " + "\n    ".join(page) + "\n  </>,\n"
        if isNested:
            jsx_content += "]\n"
        else:
            jsx_content += "];\n"
        return jsx_content

    @staticmethod
    def insert_jsx(JSXGenerator, new_path):
        jsx_path = os.path.join(new_path, "src", "App/App.jsx")
        with open(jsx_path, "r") as file:
            lines = file.readlines()
        insert_index = next(
            i for i, line in enumerate(lines) if "// Insert pages array here" in line
        )
        lines.insert(insert_index + 1, JSXGenerator)
        with open(jsx_path, "w") as file:
            file.writelines(lines)
