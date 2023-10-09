#!/usr/bin/python3
# 1-element_at.py


def element_at(my_list, idx):
    """Retrieve element from list"""
    length = len(my_list)

    if idx < 0 or idx > (length - 1):
        return None

    return(my_list[idx])
