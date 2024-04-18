import os

class CSSGenerator:
    def generate_css(data, new_path):
        css_content = ""
        for component_type, details in data.items():
            for idx, style in enumerate(details["styles"]):
                class_name = f"{component_type}-{idx + 1}"
                css_content += (
                    f".{class_name} "
                    + "{"
                    + " ".join(f"{k}: {v};" for k, v in style.items())
                    + "}\n"
                )
        css_path = os.path.join(new_path, "src", "app.css")
        with open(css_path, "w") as css_file:
            css_file.write(css_content)
