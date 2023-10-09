#!/usr/bin/python3
# 1-element_at.py


def element_at(my_list, idx):
    """Retrieve element from list."""
        if idx < 0:
            return (None)
        if idx >= len(my_list):
            return (None)
        return (my_list[idx])
