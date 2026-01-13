print("Hello, World!")
name = input("Enter your name: ") #declared variable
print(f"Hello, {name}!") #using variable

#1
print("Hello user! Please enter the details below.")
name = input("Enter your name: ")
age = input("Enter your age: ")
city = input("Enter your city: ")
print(f"Hello, {name}! You are {age} years old and you live in {city}.")

#2
num1 = input("Enter first number: ")
num2 = input("Enter second number: ")
sum = int(num1) + int(num2)
print(f"The sum of {num1} and {num2} is {sum}.")

#3
temp = input("Enter temperature in Celsius: ")
temp_in_fahrenheit = (int(temp) * 1.8) + 32
print(f"The temperature in Fahrenheit is: {temp_in_fahrenheit}")
temp_in_kelvin = int(temp) + 273.15
print(f"The temperature in Kelvin is: {temp_in_kelvin}")

#4
name = input("Enter your name: ")
print ("Your name in uppercase is:", name.upper())
print ("Your name in lowercase is:", name.lower())

#5
year = input("Enter the birth year: ")
cyear = input("Enter the current year: ")
age = int(cyear) - int(year)
print(f"You are {age} years old.")

#6
var1 = input("Enter first value: ")
var2 = input("Enter second value: ")
print(f"Before swapping: var1 = {var1}, var2 = {var2}")
var1, var2 = var2, var1
print(f"After swapping: var1 = {var1}, var2 = {var2}")

#7
length = input("Enter the length of the rectangle: ")
width = input("Enter the width of the rectangle: ")
area = int(length) * int(width)
print(f"The area of the rectangle is: {area}")

#8
value = input("Enter a number: ")
if int(value) >= 0:
    print("The number is positive.")
else:
    print("The number is negative.")
    
#9
n1 = input("Enter first number: ")
n2 = input("Enter second number: ")
average = (int(n1) + int(n2)) / 2
print(f"The average of {n1} and {n2} is {average}.")