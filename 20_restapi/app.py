'''
[TNPG] - William Guo, Aden G
SoftDev
K20: A RESTful Journey Skyward
2022-11-21
Time spent: 0.6 hours
'''

from flask import Flask  # facilitate flask webserving
from flask import render_template # facilitate jinja templating
import json,urllib.request

app = Flask(__name__)  # create Flask object


#serve flask app
@app.route("/")
def display():
    #read key value from key_nasa.txt
    key = open("key_nasa.txt", "r").read()
    url = f"https://api.nasa.gov/planetary/apod?api_key={key}"
    
    # opens url as a string or Request object
    data = urllib.request.urlopen(url)
    dict = json.load(data)
    #print(dict)
    return(render_template('main.html',image=dict['hdurl'],text=dict['explanation']))

if __name__ == "__main__":  # false if this file imported as module
    # enable debugging, auto-restarting of server when this file is modified
    app.debug = True
    app.run()
