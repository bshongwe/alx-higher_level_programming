#!/usr/bin/python3
# 5-no_c.py


def no_c(my_string):
    """Remove all c and C characters in string"""
    new_string = ""
    for index in my_string:
        if index == "c" or index == "C":
            continue
        new_string += index
    return new_string
