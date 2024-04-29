import os
from componentsMapping import COMPONENTS_TAG


class JSXGenerator:
    # Generates JSX based on JSON data

    @staticmethod
    def generate_jsx(data, new_path):
        components, firebase_config = JSXGenerator.generate_components(data)
        JSXGenerator.insert_jsx(components, new_path)
        JSXGenerator.insert_title(data, new_path)
        JSXGenerator.insert_firebase_config(firebase_config, new_path)

    @staticmethod
    def generate_components(data):
        if len(data) <= 0:
            return {"": ""}, ""
        if "app" in data:
            isNested = False
            app = data["app"]
        else:
            isNested = True
            app = {"page": data}

        page_components = {}
        firebase_config = ""

        for page, pageDetails in app.items():
            page_components[page] = []
        for page, pageDetails in app.items():
            for component_id, details in pageDetails.items():
                component_id = f"{component_id}"
                jsx_content, _ = JSXGenerator.generate_components(details["children"])
                page_components[page].append(
                    f'<{COMPONENTS_TAG[details["id"]]} key="{component_id}" className="{component_id}" params={{{details["params"]}}}  stateManagers={{stateManagers}} nested={{{jsx_content}}}>test button</{COMPONENTS_TAG[details["id"]]}>'
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

            firebase_config = "const firebaseConfig = {\n"
            for key, value in data["metadata"]["firebaseConfig"].items():
                firebase_config += key + ":" + '"' + "".join(value) + '",\n'
            firebase_config += "};\n"
        return jsx_content, firebase_config

    @staticmethod
    def insert_jsx(JSXGenerator, new_path):
        # insert components array
        jsx_path = os.path.join(new_path, "src", "App/App.jsx")
        with open(jsx_path, "r") as file:
            lines = file.readlines()
        insert_index = next(
            i for i, line in enumerate(lines) if "// Insert pages array here" in line
        )
        lines.insert(insert_index + 1, JSXGenerator)
        with open(jsx_path, "w") as file:
            file.writelines(lines)

    @staticmethod
    def insert_jsx(data, new_path):
        # insert title name
        jsx_path = os.path.join(new_path, "src", "App/App.jsx")
        with open(jsx_path, "r") as file:
            lines = file.readlines()
        insert_index = next(
            i for i, line in enumerate(lines) if "// insert title here" in line
        )
        title = "title = " + data["metadata"]["appName"]
        lines.insert(insert_index + 1, title)
        with open(jsx_path, "w") as file:
            file.writelines(lines)

    @staticmethod
    def insert_firebase_config(firebase_config, new_path):
        # insert firebase configuration
        firebase_path = os.path.join(new_path, "src", "Firebase/firebase.js")
        with open(firebase_path, "r") as file:
            lines = file.readlines()
        insert_index = next(
            i
            for i, line in enumerate(lines)
            if "// insert firebase confiuration here" in line
        )
        lines.insert(insert_index + 1, firebase_config)
        with open(firebase_path, "w") as file:
            file.writelines(lines)
