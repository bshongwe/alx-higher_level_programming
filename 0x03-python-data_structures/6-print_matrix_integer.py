#!/usr/bin/python3
# 6-print_matrix_integer.py


def print_matrix_integer(matrix=[[]]):
    """Print matrix of integers"""
    for item in matrix:
        for i in item:
            print(i, end=" " if i != item[-1] else "")
        print()
