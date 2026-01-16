#1
print("\n Division by zero check.")
numerator = float(input("Enter the numerator: "))
denominator = float(input("Enter the denominator: "))
try:
    result = numerator / denominator
    print(f"The result of division is: {result}")
except ZeroDivisionError:
    print("Error: Division by zero is not allowed.")
    
#2
print("\n Invalid integer input check.")
user_input = input("Enter an integer: ")
try:
    int_value = int(user_input)
    print(f"You entered the integer: {int_value}")
except ValueError:
    print("Error: Invalid integer input.")
    
#3
print("\n File not found check.")
filename = input("Enter the filename: ")
try:
    with open(filename, 'r') as file:
        content = file.read()
        print("File content:")
        print(content)
except FileNotFoundError:
    print("Error: File not found.")

#4
print("\n Multiple exceptions handling.")
try:
    value = int(input("Enter a number: "))
    result = 10 / value
    print(f"Result: {result}")
except ValueError:
    print("Error: Invalid input. Please enter a valid integer.")
except ZeroDivisionError:
    print("Error: Division by zero is not allowed.")
    
#5
print("\n Using finally block.")
try:
    value = int(input("Enter a number: "))
    result = 10 / value
    print(f"Result: {result}")
except ValueError:
    print("Error: Invalid input. Please enter a valid integer.")
except ZeroDivisionError:
    print("Error: Division by zero is not allowed.")
finally:
    print("Finally block executed.")
    
#6
print("\n Custom exception handling.")
class below18(Exception):
    pass
age = int(input("Enter your age: "))
try:
    if age < 18:
        raise below18
    else:
        print("You are eligible.")
except below18:
    print("You are not eligible.")
    
#7
print("\n Index error in list.")
my_list = [1, 2, 3, 4, 5]
index = int(input("Enter an index: "))
try:
    print(f"Value at index {index}: {my_list[index]}")
except IndexError:
    print("Error: Index out of bounds.")
    
#8
print("\n All exceptions handling.")
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))
try:
    result = num1 / num2
    print(f"Result: {result}")
except Exception as e:
    print(f"An error occurred: {e}")

#9
print("\n log error in file instead of printing.")
import logging
logging.basicConfig(filename='error_log.txt', level=logging.ERROR)
try:
    value = int(input("Enter a number: "))
    result = 10 / value
    print(f"Result: {result}")
except Exception as e:
    logging.error("An error occurred", exc_info=True)
    print("An error occurred. Check the log file for details.")

#10
print("\n Email validation exception.")
class InvalidEmail(Exception):
    pass
email = input("Enter your email: ")
try:
    if "@" not in email or "." not in email.split("@")[-1]:
        raise InvalidEmail
    else:
        print("Valid email address.")
except InvalidEmail:
    print("Invalid email address.")