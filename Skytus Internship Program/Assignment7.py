# 1 Create a custom math module and import it in another file.

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "Cannot divide by zero"
    return a / b






# 2 Create a module to perform string operations.

def reverse_string(s):
    return s[::-1]

def to_uppercase(s):
    return s.upper()

def to_lowercase(s):
    return s.lower()

def count_vowels(s):
    vowels = 'aeiouAEIOU'
    count = 0 
    for char in s:
        if char in vowels:
            count +=1
    return count 

    

# 3 Use random module to generate 5 random integers.

import random
number =[random.randint(1,1000) for _ in range(5)]
print("Random Integers:",number) 

# 4 Use datetime module to display current date and time.

from datetime import datetime
now = datetime.now()
print("Current Date and Time:", now.strftime("%Y-%m-%d %H:%M:%S"))

# 5 Use math module to find factorial of a number.
import math
def factorial(n):
    return math.factorial(n)
n = int(input("Enter a number to find factorial :"))
print("factorial=",factorial(n))

# 6 Create a package shapes with modules for circle and rectangle.
import math 
def circle_area(radius):
    return math.pi*radius*radius

def circumference(radius):
    return 2 * math.pi * radius 

def rectangle_area(length, width):
    return length*width

def perimeter(length, width):
    return 2 * (length + width)




#  7 Import multiple functions from one module and use them.

def is_even(number):
    return number % 2 == 0

def square(number):
    return number * number
def cube(number):
    return number ** 3




# 8 Write a program to shuffle a list using random module.
import random

numbers = [1, 2, 3, 4, 5]

random.shuffle(numbers)

print("Shuffled List:", numbers)



# 9 Write a program to calculate the difference between two dates.
from datetime import datetime
date1_str=input("Enter first date (YYYY-MM-DD): ")
date2_str=input("Enter second date (YYYY-MM-DD): ")
date1=datetime.strptime(date1_str,"%Y-%m-%d")
date2=datetime.strptime(date2_str,"%Y-%m-%d")
difference=abs((date2-date1).days)
print("Difference between two dates is:",difference,"days")

# 10 Use os module to list files in a directory.

import os 
def list_files(directory):
    try :
        files = os.listdir(directory)
        return files
    except Exception as e:
        return str(e)
directory = input("Enter directory path: ")
files = list_files(directory)
print("Files in directory:", files)
