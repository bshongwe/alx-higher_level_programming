#!/usr/bin/python3
"""
Takes GitHub credentials (username and password),
uses GitHub API to display user id
"""
from requests import get
from sys import argv
from requests.auth import HTTPBasicAuth


if __name__ == "__main__":
    auth = HTTPBasicAuth(sys.argv[1], sys.argv[2])
    r = requests.get("https://api.github.com/user", auth=auth)
    print(r.json().get("id"))
