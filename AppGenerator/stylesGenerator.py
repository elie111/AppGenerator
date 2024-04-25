import os


class CSSGenerator:
    @staticmethod
    def generate_css(data, new_path):
        styles = CSSGenerator.generate_styles(data)
        CSSGenerator.add_styled(styles, new_path)

    @staticmethod
    def generate_styles(data):
        css_content = ""
        for component_id, details in data.items():
            class_name = f"{component_id}"
            css_content += (
                f".{class_name} "
                + "{"
                + " ".join(f"{k}: {v};" for k, v in details["styles"].items())
                + "}\n"
            )
            if len(details["children"]) > 0:
                css_content += CSSGenerator.generate_styles(details["children"])
        return css_content

    @staticmethod
    def add_styled(css_content, new_path):
        css_path = os.path.join(new_path, "src", "App/GeneratedStyles.css")
        with open(css_path, "w") as css_file:
            css_file.write(css_content)
