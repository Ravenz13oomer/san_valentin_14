# app.py (sin la ruta de dibujar_corazon)
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/san_valentin")
def san_valentin():
    return render_template("san_valentin.html")

if __name__ == "__main__":
    app.run(debug=True)