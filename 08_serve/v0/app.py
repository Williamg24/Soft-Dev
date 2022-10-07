# MyJuicyWork - Mahir Riki, Jacob Guo, William Guo
# SoftDev
# Oct 2022

from flask import Flask
app = Flask(__name__) # __name__ is being used as a variable to make a Flask object

@app.route("/") # routes to the home directory
def hello_world():
    print(__name__) # prints __main__ and the gateway address to the console 
    return "No hablo queso!"  # prints "No hablo queso!" as the body of the homepage

app.run()  # deploys the webpage
                
