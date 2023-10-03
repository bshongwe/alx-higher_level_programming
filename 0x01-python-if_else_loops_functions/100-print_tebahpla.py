#!/usr/bin/python3
# 100-print_tebahpla.py

"""Print the ASCII alphabet, in reverse order, alternating lowercase and uppercase"""
for i in reversed(range(97, 123)):
    if (i % 2 != 0):
        i -= 32
    print(f"{i:c}", end="")
