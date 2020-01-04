import requests
import json

# createInstace sets up the connection with the BackEnd
def createInstance():
    # Check old instance data
    requests.post('http://localhost:8081/instance')

# Delete instance is used when creating a new instance
# Ensures no previous connections exist
def deleteinstance():
    r = requests.delete('http://localhost:8081/instance')
    return r

def animate():
    r = requests.post('http://localhost:8081/animate')
    return r

# Gets the current Instance and all Information
def getInstance():
    try:
        r = requests.get('http://localhost:8081/instance')
    except:
        r = 'Bad Request'
    return r
