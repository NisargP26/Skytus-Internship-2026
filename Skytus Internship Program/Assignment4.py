#1
lst1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print("Original list:", lst1)

#2
print("Multiplication table: ")
num = int(input("Enter a number to display its multiplication table: "))
for i in range(1, 11):
    print(f"{num} x {i} = {num * i}")

#3
a = int(input("Enter first number: "))
print("factorials:  ")
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)
print(f"Factorial of {a} is {factorial(a)}")

#4
b = int(input("Enter the range of N numbers:"))
x,y = 0, 1
print("Fibonacci series: ")
for i in range(b):
    print(x, end=' ')
    x, y = y, x + y
    
#5

c = int(input("\nEnter a number to check if it is prime: "))
if c > 1:
    for i in range(2, int(c**0.5) + 1):
        if (c % i) == 0:
            print(f"{c} is not a prime number.")
            break
    else:
        print(f"{c} is a prime number.")
else:
    print(f"{c} is not a prime number.")

#6
d = int(input("Enter a number : "))
reverse = 0
while d > 0:
    digit = d % 10
    reverse = reverse * 10 + digit
    d = d // 10
print(f"Reversed Number: {reverse}")

#7
e = int(input("Counting number of digits in a number. Enter a number: "))
count = 0
temp = e
while temp > 0:
    temp //= 10
    count += 1
print(f"Number of digits in {e} is {count}")

#8
print("Sum of even number from 1 to 100:")
sum = 0
for i in range(2, 101, 2):
    sum += i
print(f"Sum of even numbers from 1 to 100 is {sum}")

#9
print("Printing pyramid pattern:")
rows = int(input("Enter the number of rows for the pyramid: "))
for i in range(1, rows + 1):
    print(" " * (rows - i) + "*" * (2 * i - 1))
    
#10
print("Finding all divisors of a number:")
f = int(input("Enter a number to find its divisors: "))
print(f"Divisors of {f} are: ")
for i in range(1, f + 1):
    if f % i == 0:
        print(i, end=' ')    
        
print()

