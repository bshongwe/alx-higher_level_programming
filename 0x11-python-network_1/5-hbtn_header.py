#!/usr/bin/python3
"""
Take in URL, send request to URL, and display value
of X-Request-Id variable in HTTPS response header
"""
from requests import get
from sys import argv


if __name__ == "__main__":
    url = sys.argv[1]

    r = requests.get(url)
    print(r.headers.get("X-Request-Id"))
