#!/usr/bin/python3
"""
Take in a URL, send request to the URL, display
the HTTPS response body.
"""
from sys import argv
from requests import get


if __name__ == "__main__":
    url = sys.argv[1]

    r = requests.get(url)
    if r.status_code >= 400:
        print("Error code: {}".format(r.status_code))
    else:
        print(r.text)
