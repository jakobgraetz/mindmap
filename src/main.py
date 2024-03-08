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

@app.route("/mind-map")
def mind_map():
    return render_template("mindmap.html")

if __name__ == "__main__":
    # Run the Flask app
    # ssl_context: Enables HTTPS by providing an SSL context. 
    # You can pass either a path to an SSL certificate file and 
    # a key file or a tuple containing both the certificate and key in memory.
    app.run(host='0.0.0.0', port=8080, debug=True, threaded=True)
