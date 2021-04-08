from flask import Flask,render_template
from datetime import datetime

app = Flask(__name__)



@app.route("/")
@app.route("/home")
def home():
	return render_template('index.html')

print(" * Survice Started At: ",datetime.now())
app.run(debug=True)
