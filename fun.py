import redis

from json import dumps

from flask import Flask
from flask import render_template
from flask import request

app = Flask(__name__)

@app.route("/publish", methods=["GET", "POST"])
def publish():
    if request.method == "POST":
        first_name = request.form["first_name"]
        last_name = request.form["last_name"]

        me = {
            "first_name": first_name,
            "last_name": last_name
        }

        r = redis.Redis()
        r.publish("foo", dumps(me))

        return render_template("publish.html")
    else:
        return render_template("publish.html")

@app.route("/colors", methods=["POST"])
def colors():
    sms = {
        "from": request.form["From"],
        "color": request.form["Body"],
        "city": request.form["FromCity"],
        "state": request.form["FromState"]
    }

    r = redis.Redis()
    r.publish("foo", dumps(sms))

    return "Color changed"

@app.route("/")
def home():
    return render_template("home.html")


if __name__ == "__main__":
    app.run(debug=True)
