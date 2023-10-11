#!/usr/bin/python3
# 4-only_diff_elements.py


def only_diff_elements(set_1, set_2):
    """Returns a set of all elements present in only one set.

  Args:
    set_1: A set.
    set_2: A set.

  Returns:
    A set of all elements present in only one set.
  """

  return (set_1 ^ set_2) - (set_1 & set_2)
