import os
import subprocess
import sys

def create_angular_project(folder_path):
    # Change the current working directory to the specified folder
    try:
        os.chdir(folder_path)
    except OSError as e:
        print(f"Error changing directory: {e}")
        return

    # Define the name of your Angular project
    project_name = "my-angular-app"

    # Run the Angular CLI command to create a new project
    try:
        subprocess.run(["ng", "new", project_name, "--skip-install"], shell=True, check=True)
        print(f"Angular project '{project_name}' has been created successfully.")
    except subprocess.CalledProcessError as e:
        print(f"Failed to create Angular project. Error: {e}")
    except FileNotFoundError:
        print("Angular CLI ('ng') is not installed or not found in PATH.")
        
if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python create_angular_project.py <path_to_folder>")
        sys.exit(1)

    folder_path = sys.argv[1]
    create_angular_project(folder_path)
