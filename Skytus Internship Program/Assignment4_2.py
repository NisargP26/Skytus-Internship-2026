#1
print("Check if a person is eligible to vote based on age.")
age = int(input("Enter your age: "))
if age >= 18:
    print("You are eligible to vote.")
else:
    print("You are not eligible to vote.")
    
#2
print("\n Grade calculation based on marks.")
marks = int(input("Enter your marks: "))
if marks >=+ 90:
    print("Grade: A")
elif marks >=+ 80:
    print("Grade: B")
else:
    print("Grade: C")

#3
print("\n Traffic light simulation.")
light = input("Enter the traffic light color (red, yellow, green): ").lower()
if light == "red":
    print("Stop!")
elif light == "yellow":
    print("Prepare to stop.")
elif light == "green":
    print("Go!")
else:
    print("Invalid input. Please enter red, yellow, or green.")
    
#4
print("\n ATM withdrawal simulation.")
check = input("put your pin: ")
if check != "1234":
    print("Incorrect PIN.")
    exit()
balance = 1000
amount = int(input("Enter the amount to withdraw: "))
if amount > balance:
    print("Insufficient balance.")
else:
    balance -= amount
    print(f"Withdrawal successful. Remaining balance: {balance}")
    
#5
print("\n Check if number is positive or negative.")
number = int(input("Enter a number: "))
if number > 0:
    print("The number is positive.")
elif number < 0:
    print("The number is negative.")
else:
    print("The number is zero.")
    
#6
print("\n Enter a number : ")
number = int(input("Enter a number: "))
print("\n Enter a range : ")
start = int(input("Enter the start of the range: "))
end = int(input("Enter the end of the range: "))
print(f"Numbers in the range {start} to {end}:")
for number in range(start, end + 1):
    print(number)

#7
username = input("Enter your username: ")
password = input("Enter your password: ")
if username == "admin" and password == "password123":
    print("Login successful.")
else:
    print("Login failed. Incorrect username or password.")

#8
print("\n Electricity bill calculation.")
units = int(input("Enter the number of units consumed: "))
if units <= 100:
    bill = units * 1.5
elif units <= 200:
    bill = 100 * 1.5 + (units - 100) * 2.5
else:
    bill = 100 * 1.5 + 100 * 2.5 + (units - 200) * 4
print(f"Total electricity bill: ${bill:.2f}")

#9
print("\n Simple calculator.")
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))
operation = input("Enter the operation (+, -, *, /): ")
if operation == "+":
    result = num1 + num2
elif operation == "-":
    result = num1 - num2
elif operation == "*":
    result = num1 * num2
elif operation == "/":
    if num2 != 0:
        result = num1 / num2
    else:
        print("Error: Division by zero is not allowed.")
        exit()
else:
    print("Invalid operation.")
    exit()
print(f"Result: {result}")

#10
print("\n Check type of triangle :")
side1 = float(input("Enter the first side: "))
side2 = float(input("Enter the second side: "))
side3 = float(input("Enter the third side: "))
if side1 == side2 == side3:
    print("Equilateral triangle.")
elif side1 == side2 or side2 == side3 or side1 == side3:
    print("Isosceles triangle.")
else:
    print("Scalene triangle.")