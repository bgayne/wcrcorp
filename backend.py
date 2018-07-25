from flask import flask
app = Flask(__name__)

@app.route('/')
def get_contact():
    return 'Test'