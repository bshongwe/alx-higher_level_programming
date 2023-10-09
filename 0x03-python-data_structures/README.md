# 0x03. Python - Data Structures: Lists, Tuples

## General
-  Why Python programming is awesome
-  What are lists and how to use them
-  What are the differences and similarities between strings and lists
-  What are the most common methods of lists and how to use them
-  How to use lists as stacks and queues
-  What are list comprehensions and how to use them
-  What are tuples and how to use them
-  When to use tuples versus lists
-  What is a sequence
-  What is tuple packing
-  What is sequence unpacking
-  What is the del statement and how to use it

# Requirements

## Python Scripts
-  Allowed editors: vi, vim, emacs
-  All your files will be interpreted/compiled on Ubuntu 20.04 LTS using python3 (version 3.8.5)
-  All your files should end with a new line
-  The first line of all your files should be exactly #!/usr/bin/python3
-  A README.md file, at the root of the folder of the project, is mandatory
-  Your code should use the pycodestyle (version 2.8.*)
-  All your files must be executable
-  The length of your files will be tested using wc

## C
-  Allowed editors: vi, vim, emacs
-  All your files will be interpreted/compiled on Ubuntu 20.04 LTS using python3 (version 3.8.5)
-  All your files should end with a new line
-  Your code should use the Betty style. It will be checked using betty-style.pl and betty-doc.pl
-  You are not allowed to use global variables
-  No more than 5 functions per file
-  In the following examples, the main.c files are shown as examples. You can use them to test your functions, but you don’t have to push them to your repo (if you do we won’t take them into account). We will use our own main.c files at compilation. Our main.c files might be different from the one shown in the examples
-  The prototypes of all your functions should be included in your header file called lists.h
-  Don’t forget to push your header file
-  All your header files should be include guarded

# Tasks
## Task 0
mandatory

Write a function that prints all integers of a list.

Prototype: def print_list_integer(my_list=[]):
-  Format: one integer per line. See example
-  You are not allowed to import any module
-  You can assume that the list only contains integers
-  You are not allowed to cast integers into strings
-  You have to use str.format() to print integers

Repo:

    GitHub repository: alx-higher_level_programming
    Directory: 0x03-python-data_structures
    File: 0-print_list_integer.py


## Task 1
mandatory

Write a function that retrieves an element from a list like in C.

Prototype: def element_at(my_list, idx):
-  If idx is negative, the function should return None
-  If idx is out of range (> of number of element in my_list), the function should return None
-  You are not allowed to import any module
-  You are not allowed to use try/except

Test file: <code>1-main.py</code>

Test checkout: <code>./1-main.py</code>
 
Repo:

    GitHub repository: alx-higher_level_programming
    Directory: 0x03-python-data_structures
    File: 1-element_at.py
  

## Task 2
mandatory

Write a function that replaces an element of a list at a specific position (like in C).

Prototype: def replace_in_list(my_list, idx, element):
-  If idx is negative, the function should not modify anything, and returns the original list
-  If idx is out of range (> of number of element in my_list), the function should not modify anything, and returns the original list
-  You are not allowed to import any module
-  You are not allowed to use try/except

Test file: <code>2-main.py</code>

Test checkout: <code>./2-main.py</code>

Repo:

    GitHub repository: alx-higher_level_programming
    Directory: 0x03-python-data_structures
    File: 2-replace_in_list.py
  

## Task 3
mandatory

Write a function that prints all integers of a list, in reverse order.

Prototype: def print_reversed_list_integer(my_list=[]):
-  Format: one integer per line. See example
-  You are not allowed to import any module
-  You can assume that the list only contains integers
-  You are not allowed to cast integers into strings
-  You have to use str.format() to print integers

Test file: <code>3-main.py>/code>

Test checkout: <code>./3-main.py</code>

Repo:

    GitHub repository: alx-higher_level_programming
    Directory: 0x03-python-data_structures
    File: 3-print_reversed_list_integer.py
  

## Task 4
mandatory

Write a function that replaces an element in a list at a specific position without modifying the original list (like in C).

Prototype: def new_in_list(my_list, idx, element):
-  If idx is negative, the function should return a copy of the original list
-  If idx is out of range (> of number of element in my_list), the function should return a copy of the original list
-  You are not allowed to import any module
-  You are not allowed to use try/except

Test file: <code>4-main.py</code>

Test checkout: <code>./4-main.py</code>
 
Repo:

    GitHub repository: alx-higher_level_programming
    Directory: 0x03-python-data_structures
    File: 4-new_in_list.py
  

## Task 5
mandatory

Write a function that removes all characters c and C from a string.

Prototype: def no_c(my_string):
-  The function should return the new string
-  You are not allowed to import any module
-  You are not allowed to use str.replace()

Test checkout: <code>5-main.py</code>

Test checkout: <code>./5-main.py</code>

Repo:

    GitHub repository: alx-higher_level_programming
    Directory: 0x03-python-data_structures
    File: 5-no_c.py
  

## Task 6
mandatory

Write a function that prints a matrix of integers.

Prototype: def print_matrix_integer(matrix=[[]]):
-  Format: see example
-  You are not allowed to import any module
-  You can assume that the list only contains integers
-  You are not allowed to cast integers into strings
-  You have to use str.format() to print integers

Test file: <code>6-main.py</code>

Test checkout: <code>./6-main.py | cat -e</code>
 
Repo:

    GitHub repository: alx-higher_level_programming
    Directory: 0x03-python-data_structures
    File: 6-print_matrix_integer.py
  

## Task 7
mandatory

Write a function that adds 2 tuples.

Prototype: def add_tuple(tuple_a=(), tuple_b=()):
-  Returns a tuple with 2 integers:
-  The first element should be the addition of the first element of each argument
-  The second element should be the addition of the second element of each argument
-  You are not allowed to import any module
-  You can assume that the two tuples will only contain integers
-  If a tuple is smaller than 2, use the value 0 for each missing integer
-  If a tuple is bigger than 2, use only the first 2 integers

Test file: <code>7-main.py</code>

Test checkout: <code>./7-main.py</code>
 
Repo:

    GitHub repository: alx-higher_level_programming
    Directory: 0x03-python-data_structures
    File: 7-add_tuple.py
  

## Task 8
mandatory

Write a function that returns a tuple with the length of a string and its first character.

Prototype: def multiple_returns(sentence):
-  If the sentence is empty, the first character should be equal to None
-  You are not allowed to import any module

Test file: <code>8-main.py</code>

Test checkout: <code>./8-main.py</code>
 
Repo:

    GitHub repository: alx-higher_level_programming
    Directory: 0x03-python-data_structures
    File: 8-multiple_returns.py
  

## Task 9
mandatory

Write a function that finds the biggest integer of a list.

Prototype: def max_integer(my_list=[]):
-  If the list is empty, return None
-  You can assume that the list only contains integers
-  You are not allowed to import any module
-  You are not allowed to use the builtin max()

Test file: <code>9-main.py</code>

Test checkout: <code>./9-main.py</code>

Repo:

    GitHub repository: alx-higher_level_programming
    Directory: 0x03-python-data_structures
    File: 9-max_integer.py
  

## Task 10
mandatory

Write a function that finds all multiples of 2 in a list.

Prototype: def divisible_by_2(my_list=[]):
-  Return a new list with True or False, depending on whether the integer at the same position in the original list is a multiple of 2
-  The new list should have the same size as the original list
-  You are not allowed to import any module

Test file: <code>10-main.py</code>

Test checkout: <code>./10-main.py</code>
 
Repo:

    GitHub repository: alx-higher_level_programming
    Directory: 0x03-python-data_structures
    File: 10-divisible_by_2.py
  

## Task 11
mandatory

Write a function that deletes the item at a specific position in a list.

Prototype: def delete_at(my_list=[], idx=0):
-  If idx is negative or out of range, nothing change (returns the same list)
-  You are not allowed to use pop()
-  You are not allowed to import any module

Test file: <code>11-main.py</code>

Test checkout: <code>./11-main.py</code>
 
Repo:

    GitHub repository: alx-higher_level_programming
    Directory: 0x03-python-data_structures
    File: 11-delete_at.py
  

## Task 12
mandatory

Complete the source code in order to switch value of a and b
-  You can find the source code here
-  Your code should be inserted where the comment is (line 4)
-  Your program should be exactly 5 lines long

Test file: <code>./12-switch.py</code>

Test checkout: <code>wc -l 12-switch.py</code>

Repo:

    GitHub repository: alx-higher_level_programming
    Directory: 0x03-python-data_structures
    File: 12-switch.py
  

## Task 13
mandatory

Technical interview preparation:
-  You are not allowed to google anything
-  Whiteboard first
-  Write a function in C that checks if a singly linked list is a palindrome.

Prototype: int is_palindrome(listint_t **head);
-  Return: 0 if it is not a palindrome, 1 if it is a palindrome
-  An empty list is considered a palindrome

Header file: <code>lists.h</code>

Linked lists file: <code>linked_lists.c</code>

Test file: <code>13-main.c</code>

Compilation checkout: <code>gcc -Wall -Werror -Wextra -pedantic 13-main.c linked_lists.c 13-is_palindrome.c -o palindrome</code>

Test checkout: <code>./palindrome</code>

Repo:

    GitHub repository: alx-higher_level_programming
    Directory: 0x03-python-data_structures
    File: 13-is_palindrome.c, lists.h
  

## Task 14. CPython #0: Python lists
#advanced

CPython is the reference implementation of the Python programming language. Written in C, CPython is the default and most widely used implementation of the language.
Since we now know a bit of C, we can look at what is happening under the hood of Python. Let’s have fun with Python and C, and let’s look at what makes Python so easy to use.

TODO: <code>cython print_python_list_info.c test_lists.py -o Python_lists.so</code>
-	Checker worked despite having done this... hmm? Not sure why... Need to understand why this worked, more importantly, why it wasn't before I did what I did.

All your files will be interpreted/compiled on Ubuntu 14.04 LTS


Create a C function that prints some basic info about Python lists.

Prototype: void print_python_list_info(PyObject *p);
-  Format: see example
-  Python version: 3.4
-  Your shared library will be compiled with this command line: <code>gcc -Wall -Werror -Wextra -pedantic -std=c99 -shared -Wl,-soname,PyList -o libPyList.so -fPIC -I/usr/include/python3.4 100-print_python_list_info.c</code>

***--->>>listobject.h
***--->>>object.h

Compile checkout: <code>gcc -Wall -Werror -Wextra -pedantic -std=c99 -shared -Wl,-soname,PyList -o libPyList.so -fPIC -I/usr/include/python3.4 100-print_python_list_info.c</code>

Test file <code>100-test_lists.py</code>
 
Repo:

    GitHub repository: alx-higher_level_programming
    Directory: 0x03-python-data_structures
    File: 100-print_python_list_info.c
