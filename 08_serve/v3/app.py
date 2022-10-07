# MyJuicyWork - Mahir Riki, Jacob Guo, William Guo
# SoftDev
# Oct 2022

from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/")       #assign fxn to route
def hello_world():
    print("about to print __name__...")
    print(__name__)   #where will this go? to the console
    return "No hablo queso!" # when setting this to False, the debugger gives a TypeError

app.debug = True # when there is an error, the debugger gives you a specific error message.
app.run()        # (contined from above) If there is no debugger, it gives you an internal server error.
