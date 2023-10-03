#!/usr/bin/python3
# 1-last_digit.py

import random

def last_digit_pos(number):
    """Prints the last digit of a number and determines whether it is 0, less than 6 and not 0, or greater than 5.

  Args:
    number: An integer.

  Returns:
    None.
  """

  n = number % 10
  if 0 > number:
      n *= -1
  if n == 0:
      print(f"Last digit of {number} is {n} and is 0")
  elif n < 6:
      print(f"Last digit of {number} is {n} and is less than 6 and not 0")
  else:
      print(f"Last digit of {number} is {n} and is greater than 5")


if __name__ == "__main__":
    number = random.randint(-10000, 10000)
  last_digit_pos(number)
