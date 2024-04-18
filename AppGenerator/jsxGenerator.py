import os


class JSXGenerator:
    # Generates JSX based on JSON data

    def generate_jsx(data, new_path):
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
