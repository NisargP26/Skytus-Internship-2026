#Functions

#1
print("\n Check if number is prime.")
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True
num = int(input("Enter a number: "))
if is_prime(num):
    print(f"{num} is a prime number.")
else:
    print(f"{num} is not a prime number.")
    
#2
print("\n Reverse a string.")
def reverse_string(s):
    return s[::-1]
user_input = input("Enter a string: ")
reversed_string = reverse_string(user_input)
print(f"Reversed string: {reversed_string}")

#3
print("\n Calculate factorial.")
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)
    print(f"Factorial of {n} is {factorial(n)}")
    
#4
print("\n Simple interest calculation.")
def simple_interest(principal, rate, time):
    return (principal * rate * time) / 100
principal = float(input("Enter principal amount: "))
rate = float(input("Enter rate of interest: "))
time = float(input("Enter time period: "))
interest = simple_interest(principal, rate, time)
print(f"Simple interest is {interest}")

#5
print("\n If the word is palindrome.")
def is_palindrome(s):
    cleaned = ''.join(c.lower() for c in s if c.isalnum())
    return cleaned == cleaned[::-1]
word = input("Enter a word: ")
if is_palindrome(word):
    print(f"{word} is a palindrome.")
else:
    print(f"{word} is not a palindrome.")

#6
print("\n Count vowels in a string.")
def count_vowels(s):
    vowels = "aeiouAEIOU"
    count = 0
    for char in s:
        if char in vowels:
            count += 1
    return count
user_input = input("Enter a string: ")
vowel_count = count_vowels(user_input)
print(f"Number of vowels in the string is {vowel_count}")

#7
print("\n Merge two lists.")
def merge_lists(list1, list2):
    return list1 + list2
list1 = input("Enter elements of first list: ").split()
list2 = input("Enter elements of second list: ").split()
merged_list = merge_lists(list1, list2)
print(f"Merged list is {merged_list}")

#8
print("\n GCD of two numbers.")
def gcd(a, b):
    while b:
        a, b = b, a % b
    return a
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
result = gcd(num1, num2)
print(f"GCD of {num1} and {num2} is {result}")

#9
print("\n Area of a rectangle.")
def area_of_rectangle(length, width):
    return length * width
length = float(input("Enter length of rectangle: "))
width = float(input("Enter width of rectangle: "))
area = area_of_rectangle(length, width)
print(f"Area of rectangle is {area}")

#10
print("\n Amstrong number check.")
def is_armstrong(n):
    num_str = str(n)
    num_digits = len(num_str)
    total = sum(int(digit) ** num_digits for digit in num_str)
    return total == n
num = int(input("Enter a number: "))
if is_armstrong(num):
    print(f"{num} is an Armstrong number.")
else:
    print(f"{num} is not an Armstrong number.")