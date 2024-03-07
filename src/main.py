# Author Jakob Grätz
# Version 07-03-2024 (DD-MM-YYYY)
# (C) Jakob Grätz - 2024

# Import necessary Libraries
from flask import Flask, render_template

# Create a Flask application
app = Flask(__name__)

# Define a route for the root URL "/"
@app.route("/")
def index():
    # Render the index.html template
    return render_template("index.html")

if __name__ == "__main__":
    # Run the Flask app
    app.run(debug=True)
