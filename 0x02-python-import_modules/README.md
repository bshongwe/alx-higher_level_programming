# 0x02. Python - import & modules

## General
-  Why Python programming is awesome
-  How to import functions from another file
-  How to use imported functions
-  How to create a module
-  How to use the built-in function dir()
-  How to prevent code in your script from being executed when imported
-  How to use command line arguments with your Python programs
-  All your files should end with a new line
-  The first line of all your files should be exactly #!/usr/bin/python3
-  A README.md file, at the root of the folder of the project, is mandatory
-  Your code should use the pycodestyle (version 2.8.*) ---- except for Task 4 (requires 3.8)
-  All your files must be executable
-  The length of your files will be tested using wc

# Tasks
## Task 0
mandatory

Write a program that imports the function def add(a, b): from the file add_0.py and prints the result of the addition 1 + 2 = 3

You have to use print function with string format to display integers

You have to assign:
-  the value 1 to a variable called a
-  the value 2 to a variable called b
-  and use those two variables as arguments when calling the functions add and print
-  a and b must be defined in 2 different lines: a = 1 and another b = 2

Your program should print: <code> \<a value> + \<b value> = <add(a, b) value> </code> followed with a new line
-  You can only use the word add_0 once in your code
-  You are not allowed to use * for importing or __import__
-  Your code should not be executed when imported - by using __import__

Import filename 1: <code>add_0.py</code>

Test checkout: <code>./0-add.py</code>

Test filename 2: <code>0-import_add.py</code> then use <code>python3 0-import_add.py</code>


Repo:

    GitHub repository: alx-higher_level_programming
    Directory: 0x02-python-import_modules
    File: 0-add.py
   

## Task 1
mandatory

Write a program that imports functions from the file calculator_1.py, does some Maths, and prints the result.

Do not use the function print (with string format to display integers) more than 4 times

You have to define:
-  the value 10 to a variable a
-  the value 5 to a variable b
-  and use those two variables only, as arguments when calling functions (including print)
-  a and b must be defined in 2 different lines: a = 10 and another b = 5

Your program should call each of the imported functions. See example below for format
-  the word calculator_1 should be used only once in your file
-  You are not allowed to use * for importing or __import__
-  Your code should not be executed when imported

Import filename: <code>calculator_1.py</code>

Test checkout: <code>./1-calculation.py</code>

Repo:

    GitHub repository: alx-higher_level_programming
    Directory: 0x02-python-import_modules
    File: 1-calculation.py
   

## Task 2
mandatory

Write a program that prints the number of and the list of its arguments.

The output should be:
-  Number of argument(s) followed by argument (if number is one) or arguments (otherwise), followed by
-  : (or . if no arguments were passed) followed by
-  a new line, followed by (if at least one argument),
-  one line per argument:
-  the position of the argument (starting at 1) followed by :, followed by the argument value and a new line

Your code should not be executed when imported

The number of elements of argv can be retrieved by using: len(argv)

You do not have to fully understand lists yet, but imagine that argv can be used just like a C array: you can use an index to walk through it. There are other ways (which will be preferred for future project tasks), if you know them you can use them.

Test checkout: <code>./2-args.py</code>

Test 1: <code>./2-args.py Hello</code>

Test 2: <code>./2-args.py Hello Welcome To The Best School</code>

Repo:

    GitHub repository: alx-higher_level_programming
    Directory: 0x02-python-import_modules
    File: 2-args.py
   

## Task 3
mandatory

Write a program that prints the result of the addition of all arguments

-  The output should be the result of the addition of all arguments, followed by a new line
-  You can cast arguments into integers by using int() (you can assume that all arguments can be casted into integers)
-  Your code should not be executed when imported

Test checkout: <code>./3-infinite_add.py</code>

Test 1: <code>./3-infinite_add.py 79 10</code>

Test 2: <code>./3-infinite_add.py 79 10 -40 -300 89</code>

Test 3: <code>./3-infinite_add.py</code>

Repo:

    GitHub repository: alx-higher_level_programming
    Directory: 0x02-python-import_modules
    File: 3-infinite_add.py


## Task 4
mandatory

Write a program that prints all the names defined by the compiled module hidden_4.pyc (please download it locally).

-  You should print one name per line, in alpha order
-  You should print only names that do not start with __
-  Your code should not be executed when imported
-  Make sure you are running your code in Python3.8.x (hidden_4.pyc has been compiled with this version)

Get into your file and use this command: <code>curl -Lso "hidden_4.pyc" "https://github.com/alx-tools/0x02.py/raw/master/hidden_4.pyc"</code>

Test checkout: <code>./4-hidden_discovery.py | sort</code>
 
Repo:

    GitHub repository: alx-higher_level_programming
    Directory: 0x02-python-import_modules
    File: 4-hidden_discovery.py
   

## Task 5
mandatory

Write a program that imports the variable a from the file variable_load_5.py and prints its value.

-  You are not allowed to use * for importing or __import__
-  Your code should not be executed when imported

Import file: <code>variable_load_5.py</code>

Test checkout: <code>./5-variable_load.py</code>

Repo:

    GitHub repository: alx-higher_level_programming
    Directory: 0x02-python-import_modules
    File: 5-variable_load.py
   

## Task 6
#advanced

Write a program that imports all functions from the file calculator_1.py and handles basic operations.

Usage: <code>./100-my_calculator.py a operator b</code>

If the number of arguments is not 3, your program has to:
-  print Usage: ./100-my_calculator.py \<a> \<operator> \<b> followed with a new line
-  exit with the value 1

operator can be:
-  + for addition
- for subtraction
-  * for multiplication
-  / for division

If the operator is not one of the above:
-  print Unknown operator. Available operators: +, -, * and / followed with a new line
-  exit with the value 1

You can cast a and b into integers by using int() (you can assume that all arguments will be castable into integers)
-  The result should be printed like this: \<a> \<operator> \<b> = \<result>, followed by a new line
-  You are not allowed to use * for importing or __import__
-  Your code should not be executed when imported

Import file: <code>calculator_1.py</code>

Test checkout: <code>./100-my_calculator.py ; echo $?</code>

Usage: <code>./100-my_calculator.py \<a> \<operator> \<b></code>

Test 1: <code>./100-my_calculator.py 3 + 5 ; echo $?</code>

Test 2: <code>./100-my_calculator.py 3 H 5 ; echo $?</code>

Repo:

    GitHub repository: alx-higher_level_programming
    Directory: 0x02-python-import_modules
    File: 100-my_calculator.py
   

## Task 7
#advanced

Write a program that prints #pythoniscool, followed by a new line, in the standard output.

-  Your program should be maximum 2 lines long
-  You are not allowed to use print or eval or open or import sys in your file 101-easy_print.py

Test checkout: <code>./101-easy_print.py</code>
 
Repo:

    GitHub repository: alx-higher_level_programming
    Directory: 0x02-python-import_modules
    File: 101-easy_print.py
   

## Task 8
#advanced

Write the Python function def magic_calculation(a, b): that does exactly the same as the following Python bytecode:

Repo:

    GitHub repository: alx-higher_level_programming
    Directory: 0x02-python-import_modules
    File: 102-magic_calculation.py
   

## Task 9
#advanced

Write a program that prints the alphabet in uppercase, followed by a new line.

Your program should be maximum 3 lines long

You are not allowed to use:
-  any loops
-  any conditional statements
-  str.join()
-  any string literal
-  any system calls

Test checkout: <code>./103-fast_alphabet.py</code>

Test 1: <code>wc -l 103-fast_alphabet.py</code>

Repo:

    GitHub repository: alx-higher_level_programming
    Directory: 0x02-python-import_modules
    File: 103-fast_alphabet.py

