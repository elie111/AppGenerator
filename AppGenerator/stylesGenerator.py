import os

class CSSGenerator:
    @staticmethod
    def generate_css(data, new_path):
        styles = CSSGenerator.generate_styles(data)
        CSSGenerator.add_styled(styles, new_path)

    @staticmethod
    def generate_styles(data):
        if "app" in data:
            app = data["app"]
        else:
            app = {"page": data}
        css_content = ""
        for page, pageDetails in app.items():
            for component_id, details in pageDetails.items():
                class_name = f"{component_id}"
                # Handle default styles
                css_content += (
                    f".{class_name} "
                    + "{"
                    + " ".join(f"{k}: {v};" for k, v in details["styles"].get("default", {}).items())
                    + "}\n"
                )
                # Handle media queries
                for breakpoint, styles in details["styles"].items():
                    if breakpoint != "default":
                        css_content += (
                            f"@media (max-width: {breakpoint}) {{"
                            f".{class_name} "
                            + "{"
                            + " ".join(f"{k}: {v};" for k, v in styles.items())
                            + "}"
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
