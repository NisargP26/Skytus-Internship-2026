import random

print("Welcome to the Guessing Quiz!")
name = input("Enter your name: ")
print(f"Hello, {name}! Let's start the game.")
print("Rules:\n")
print("First, you need to guess a number between 1 and 50.")
print("You have a maximum of 10 attempts to guess the number.")
print("After that, you'll have to guess a color from a list of 10 colors.")
print("You have a maximum of 5 attempts to guess the color.\n")

secret_number = random.randint(1, 20)
attempts = 0

while True:
    guess = int(input("Guess the number: "))
    attempts += 1
    if attempts > 10:
        print(f"Too many attempts! The number was {secret_number}.")
        break

    if guess > secret_number:
        print("Too high")
    elif guess < secret_number:
        print("Too low")
    else:
        print(f"Correct! You guessed it in {attempts} attempts.")
        break
print(f"You guessed all in {attempts} attempts.\n")
secret_color = random.choice(['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black', 'white'])
attempts = 0
print("Now, guess the color from the following list:")
print(['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black', 'white'])
while True:
    color_guess = input("Guess the color: ").lower()
    attempts += 1
    if attempts > 5:
        print(f"Too many attempts! The color was {secret_color}.")
        break

    if color_guess != secret_color:
        print("Wrong color, try again.")
    else:
        print(f"Correct! You guessed the color in {attempts} attempts.")
        break
print(f"You guessed all in {attempts} attempts.")    
print(f"Thanks for playing, {name}!")
