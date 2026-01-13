#1
tuple = (1, 2, 3, 4, 5)
print(f"The elements of the tuple is: {tuple}")

#2
print(f"The third element of the tuple is: {tuple[2]}")

#3
t = (10, 20, 30)

a, b, c = t
print(a, b, c)

#4
set1 = {input("Enter fruit 1: "), input("Enter fruit 2: "), input("Enter fruit 3: "), input("Enter fruit 4: "), input("Enter fruit 5: ")}
print(f"The elements of the set is: {set1}")

#5
set1.add(input("Enter a fruit to add to the set: "))
print(f"The updated set is: {set1}")

#6
set1.remove(input("Enter a fruit to remove from the set: "))
print(f"The updated set after removal is: {set1}")

#7
se1 = {1, 2, 3, 4, 5}
se2 = {4, 5, 6, 7, 8}
union_set = se1.union(se2)
print(f"The union of the two sets is: {union_set}")

#8
intersection_set = se1.intersection(se2)
print(f"The intersection of the two sets is: {intersection_set}")

#9
s1 = {1, 2, 3, 4, 5}
s2 = {4, 5, 6, 7, 8}
subset_check = s1.issubset(s2)
print(f"Is s1 a subset of s2? {subset_check}")

#10
lis1 = [1, 2, 3, 4, 5, 6, 7, 8, 5, 3, 2, 7, 8, 9, 10]
set = list(set(lis1))
print(f"The list after making it a set: {set}")

#11
students = {
    "Aman": 85,
    "Riya": 92,
    "Karan": 76,
    "Neha": 88
}

print(students)

#12
students.update({"Neha": 88})
print(students)

#13
students.pop("Karan")
print(students)

#14
dict1 = { "Jay": 25, "Mia": 30, "Sam": 22 }
dict2 = { "Lily": 28, "Ethan": 35 }
dict1.update(dict2)
print(f"The merged dictionary is: {dict1}")

#15
check_key = input("Enter the student's name to check: ")
if check_key in students:
    print(f"{check_key} is present in the dictionary.") 
else:
    print(f"{check_key} is not present in the dictionary.")
    
#16
text = input("Enter a string: ").lower()

words = text.split()
freq = {}
for w in words:
    if w in freq:
        freq[w] += 1
    else:
        freq[w] = 1
print(freq)

#17
dict3 = { "A": 1, "B": 2, "C": 3 , "D": 400 , "E": 500 }
max_key = max(dict3, key=dict3.get)
print(f"The key with the maximum value is: {max_key}")

#18
dict4 = { "X": 10, "Y": 20, "Z": 30 , "W": 40 , "V": 50 , "U": 60 }
rev_dict = {value: key for key, value in dict4.items()}
print(f"The reversed dictionary is: {rev_dict}")

#19
dict5 = { "P": 100, "Q": 200, "R": 300 , "S": 400 , "T": 500 }
updated_dict = {key: value + 50 for key, value in dict5.items()}
print(f"The updated dictionary is: {updated_dict}")

#20
tup1 = ("A", "B", "C", "D", "E")
tup2 = (60, 70, 80, 90, 100)
conv_dict = {i: j for i, j in zip(tup1, tup2)}
print(f"The converted dictionary is: {conv_dict}")