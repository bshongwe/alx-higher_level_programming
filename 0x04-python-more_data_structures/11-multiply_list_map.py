#!/usr/bin/python3
# 11-multiply_list_map.py


def multiply_list_map(my_list=[], number=0):
    """Return list with all values multiplied by number without using any loops."""
    return (list(map(lambda x: x*number, my_list)))
