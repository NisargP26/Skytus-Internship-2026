#File handling

#1
print(" Read a file and display its contents.")
with open("sample.txt", "r") as file:
    content = file.read()
    print(content)

#2
print("\n Count the number of lines in a file.")
with open("sample.txt", "r") as file:
    lines = file.readlines()
    print(f"Number of lines: {len(lines)}")
    
#3
print("\n Each word count in a file.")
with open("sample.txt", "r") as file:
    content = file.read()
    words = content.split()
    print(f"Word count: {len(words)}")
    
#4
print("\n User input to write to a file.")
user_input = input("Enter text : ")
user_input1 = input("Enter text : ")
user_input2 = input("Enter text : ")
user_input3 = input("Enter text : ")
user_input4 = input("Enter text : ")
with open("sample.txt", "w") as file:
    file.write(user_input)
    file.write(user_input1)
    file.write(user_input2)
    file.write(user_input3)
    file.write(user_input4)
print("Text written to file successfully.")

#5
print("\n Append list of strings to an existing file.")
strings_to_append = ["Line 1\n", "Line 2\n", "Line 3\n"]
with open("sample.txt", "a") as file:
    file.writelines(strings_to_append)
print("Strings appended to file successfully.")

#6
print("\n Read a file and count specific word occurrences.")
with open("sample.txt", "r") as file:
    content = file.read()
    words = content.split()
    specific_word = input("Enter the word to count: ")
    count = words.count(specific_word)
    print(f"Occurrences of '{specific_word}': {count}")
    
#7
print("\n Replace a word in a file with another word.")
with open("sample.txt", "r") as file:
    content = file.read()
    old_word = input("Enter the word to replace: ")
    new_word = input("Enter the new word: ")
    content = content.replace(old_word, new_word)
with open("sample.txt", "w") as file:
    file.write(content)
print("Word replaced successfully.")

#8
print("\n Merge contents of two files into a new file.")
with open("sample.txt", "r") as file1:
    content1 = file1.read()
with open("sample2.txt", "r") as file2:
    content2 = file2.read()
with open("merged_file.txt", "w") as merged_file:
    merged_file.write(content1)
    merged_file.write(content2)
print("Files merged successfully.")

#9
print("\n Read a CDV file and display its contents.")
import csv
with open("sample.csv", "r") as csvfile:
    csvreader = csv.reader(csvfile)
    for row in csvreader:
        print(row)
    print("CSV file read successfully.")

#10
print("\n copy contents from one file to another.")
with open("sample.txt", "r") as source_file:
    content = source_file.read()
with open("backup_sample.txt", "w") as dest_file:
    dest_file.write(content)
print("File copied successfully.")