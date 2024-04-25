import os
from componentsMapping import COMPONENTS_TAG


class JSXGenerator:
    # Generates JSX based on JSON data

    @staticmethod
    def generate_jsx(data, new_path):
        components = JSXGenerator.generate_components(data)
        JSXGenerator.insert_jsx(components, new_path)

    @staticmethod
    def generate_components(data):
        if len(data) <= 0:
            return {"": ""}
        if "app" in data:
            isNested = False
            app = data["app"]
        else:
            isNested = True
            app = {"page": data}

        page_components = {}

        for page, pageDetails in app.items():
            page_components[page] = []
        for page, pageDetails in app.items():
            for component_id, details in pageDetails.items():
                component_id = f"{component_id}"
                page_components[page].append(
                    f'<{COMPONENTS_TAG[details["id"]]} key="{component_id}" className="{component_id}" params={{{details["params"]}}}  switchPage={{setCurrentPage}} nested={{{JSXGenerator.generate_components(details["children"])}}}>test button</{COMPONENTS_TAG[details["id"]]}>'
                )
        if isNested:
            jsx_content = "["
            for key, value in page_components.items():
                jsx_content += "<>\n    " + "\n    ".join(value) + "\n  </>,\n"
            jsx_content += "]\n"
        if not isNested:
            jsx_content = "const pages = {\n"
            for key, value in page_components.items():
                jsx_content += (
                    '"'
                    + key
                    + '"'
                    + ":  <>\n    "
                    + "\n    ".join(value)
                    + "\n  </>,\n"
                )
            jsx_content += "};\n"

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
