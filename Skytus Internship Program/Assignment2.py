#1
num1 = input("Enter first number: ")
num2 = input("Enter second number: ")
remainder = int(num1) % int(num2)
print(f"The remainder when {num1} is divided by {num2} is {remainder}.")

#2
val1=input("Enter the number: ")
if int(val1)%2==0:
    print(f"The number {val1} is even.")
else:
    print(f"The number {val1} is odd.")
    
#3
n1 = input("Enter first number: ")
n2 = input("Enter second number: ")
if int(n1)>int(n2):
    print(f"The number {n1} is greater than {n2}.")
elif int(n2)>int(n1):
    print(f"The number {n2} is greater than {n1}.")
else:
    print("Both numbers are equal.")
    
#4
a = input("Enter a number: ")
print(f"The square of {a} is {int(a)**2}.")
print(f"The cube of {a} is {int(a)**3}.")

#5
b = input("Enter a number: ")
c = input("Enter another number: ")
if int(b)==int(c):
    print(f"The numbers {b} and {c} are equal.")
else:
    print(f"The numbers {b} and {c} are not equal.")
    
#6
d = input("Enter a number: ")
e = input("Enter another number: ")
if int(d) >= 0 and int(e) >= 0:
    print("True")
else:
    print("False")
    
#7
f = input("Enter a float no: ")
print(f"The integer of {f} is {int(float(f))}.")

#8
g= input("Enter a string: ")
print(f"Converting string into integer: {int(g)}")
mul = int(g) * 10
print(f"The result after multiplying by 10 is: {mul}")

#9
item = input("Enter the item name: ")
qty = int(input("Quantity of the item: "))
price = float(input("Price of the item: "))
total = qty * price

discount = 0
if qty >= 10 and total >= 600:
    discount = total * 0.10
elif qty >= 5 and total >= 400:
    discount = total * 0.05
elif qty >= 15 and total >= 1000:
    discount = total * 0.15

delivery = 0 
if total > 800 or qty < 8:
    delivery = 500
else:
    delivery = 200
    
    
final_amount = (total - discount) + delivery

print("--------Receipt--------")
print("Items Purchased:", item)
print("Quantity:", qty)
print("Price per item:", price)
print("Total Amount:", total)
print("Discount Applied:", discount)
print("Delivery Charges:", delivery)
print("Final Amount to be paid:", final_amount)


#10
h1 = input("Enter first number: ")
h2 = input("Enter second number: ")
div = int(h1)/int(h2)
print(f"The division of {h1} by {h2} is {div}.")
print(f"the quotient is: {int(h1)//int(h2)}")
print(f"The remainder is: {int(h1)%int(h2)}")