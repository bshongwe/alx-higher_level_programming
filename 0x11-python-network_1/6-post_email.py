#!/usr/bin/python3
"""
Take in URL, send request to URL and display
X-Request-Id value in response header.
"""
from sys import argv
from requests import post


if __name__ == "__main__":
    url = sys.argv[1]

    request = urllib.request.Request(url)
    with urllib.request.urlopen(request) as response:
        print(dict(response.headers).get("X-Request-Id"))
