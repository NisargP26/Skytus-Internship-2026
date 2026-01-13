#1
str1 = input("Enter the string: ")
print(f"The length of the string is: {len(str1)}")

#2
str2 = input("Enter the string: ")
print(f"The string in lowercase is: {str2.lower()}")

#3
str3 = input("Enter the string: ")
rem = str3.replace(" ", "_")
print(f"The string with spaces replaced by underscores is: {rem}")

#4
str4 = input("Enter the string: ")
print(f"The first character of the string is: {str4[0]}")
print(f"The last character of the string is: {str4[-1]}")   

#5
str5 = input("Enter the string: ")
rev = str5[::-1]
print(f"The reversed string is: {rev}")

#6
str6 = input("Enter the string: ")
count = str6.count('a')
print(f"The number of occurrences of 'a' in the string is: {count}")

#7
str7 = input("Enter the string: ")
check = 'hello' in str7
print(f"Does the string contain 'hello'? {check}")

#8
name = input("Enter your name: ")
age = input("Enter your age: ")
print(f"Hello {name}, you are {age} years old.")

#9
str8 = input("Enter the string: ")
clean_str = str8.strip()
print(f"The string after removing leading and trailing spaces is: '{clean_str}'")

#10
lst1 =[input("Enter first item: "), input("Enter second item: "), input("Enter third item: ")]
print("-".join(lst1))

#11
lst2 = [input("Enter your 5 favorite movies: "), input(", "), input(", "), input(", "), input(", ")]
print ("Your favorite movies are: " + ", ".join(lst2))

#12
print("Add a new movie in the list")
item = input("Enter the movie name: ")
lst2.append(item)
print("Updated movie list: " + ", ".join(lst2))

#13
print("Remove a movie from the list")
item_remove = input("Enter the movie name to remove: ")
if item_remove in lst2:
    lst2.remove(item_remove)
    print("Updated movie list: " + ", ".join(lst2))
    
#14
print("Create a list of numbers")
num_list = [int(input("Enter number 1: ")), int(input("Enter number 2: ")), int(input("Enter number 3: ")), int(input("Enter number 4: ")), int(input("Enter number 5: "))]
print(f"The list of num in ascending order: {sorted(num_list)}")

#15
print("Reverse the list of numbers")
num_list.reverse()
print(f"The list of numbers in reverse order: {num_list}")

#16
print(f"The greatest number in the list is: {max(num_list)}")

#17
ls1 = [int(input("Enter number 1: ")), int(input("Enter number 2: ")), int(input("Enter number 3: "))]
ls2 = [int(input("Enter number 4: ")), int(input("Enter number 5: ")), int(input("Enter number 6: "))]
combined = ls1 + ls2
print(f"The merged list is: {combined}")

#18
st1 = [input("Enter elem 1: "), input("Enter elem 2: "), input("Enter elem 3: "), input("Enter elem 4: "), input("Enter elem 5: ")]
last_elem = st1[-1]
print(f"The last element of the list is: {last_elem}")

#19

a = int(input("Enter element 1: "))
b = int(input("Enter element 2: "))
c = int(input("Enter element 3: "))
d = int(input("Enter element 4: "))

nested = [[a, b],
          [c, d]]

row = int(input("Enter row (0 or 1): "))
col = int(input("Enter column (0 or 1): "))

print("Nested list:", nested)
print("Selected element:", nested[row][col])

#20
lst3 = ["apple", "banana", "cherry", "date", "elderberry","apple", "banana", "fig", "grape"]
count = lst3.count("apple")
print(f"The number of times 'apple' appears in the list is: {count}")