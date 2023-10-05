#!/usr/bin/python3
# 0-add.py

from add_0 import add

"""Import def add(a, b): from add_0.py and print result"""


if __name__ == "__main__":
    import sys
    a = 1
    b = 2
    print("{} + {} = {}".format(a, b, add(a, b)))
