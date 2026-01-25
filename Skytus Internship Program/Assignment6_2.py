#Advanced OOP

#1

class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print(f"{self.name} makes a sound")

class Dog(Animal):
    def speak(self):
        print(f"{self.name} says: Woof!")

class Cat(Animal):
    def speak(self):
        print(f"{self.name} says: Meow!")

dog = Dog("Buddy")
cat = Cat("Whiskers")

dog.speak()
cat.speak()
print("\n")

#2

class vehicle:
    def __init__(self, type):
        self.type = type
    
    def display_info(self):
        print(f"Type of car: {self.type}")

class car(vehicle):
    def __init__(self, type, brand, fule_type):
        super().__init__(type)
        self.brand = brand
        self.fule_type = fule_type
    
    def display_info(self):
        super().display_info()
        print(f"Brand: {self.brand}")
        print(f"Fule Type: {self.fule_type}")

class ecar(vehicle):
    def __init__(self, type, brand, battery_size):
        super().__init__(type)
        self.brand = brand
        self.battery_size = battery_size
    
    def display_info(self):
        super().display_info()
        print(f"Brand: {self.brand}")
        print(f"Battery Size: {self.battery_size}")
    
my_car = car("Sedan", "Toyota", "Petrol")
my_ecar = ecar("SUV", "Tesla", "100 kWh")

my_car.display_info()
print("\n")
my_ecar.display_info()  
print("\n")

#3 Implement method overriding in a base and derived class 

class person:
    def greet(self):
        print("Hello")

class student(person):
    def greet(self):
        print("Hello, I am a student")

s = student()
s.greet()
print("\n")

#4 demonstrate multiple inheritance with two parent classes

class parent1:
    def method1(self):
        print("Data source is limited")

class parent2:
    def method2(self):
        print("Data source is unlimited")

class child(parent1, parent2):
    def method3(self):
        print("Data is derived from both parent classes")

obj = child()
obj.method1()
obj.method2()
obj.method3()
print("\n")

#5 create a polymorphic fuction that works with different shapes

class Shape:
    def area(self):
        pass 
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    def area(self):
        return 3.14 * self.radius ** 2
class Square(Shape):
    def __init__(self, length):
        self.length = length
    def area(self):
        return self.length ** 2
class Rectangle(Shape):
    def __init__(self, length, width):
        self.length = length
        self.width = width
    def area(self):
        return self.length * self.width
Shape = [Circle(5), Square(4), Rectangle(3, 6)]
for shape in Shape:
    print("area:",shape.area())    

#6

class BankAccount:
    def __init__(self, account_number, balance):
        self.account_number = account_number
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        print(f"Deposited: ₹{amount}")

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            print(f"Withdrawn: ₹{amount}")
        else:
            print("Insufficient balance")

    def show_balance(self):
        print(f"Balance: ₹{self.balance}")


class SavingAccount(BankAccount):
    def __init__(self, account_number, balance, interest_rate):
        super().__init__(account_number, balance)
        self.interest_rate = interest_rate

    def display(self):
        print(f"Account Number: {self.account_number}")
        self.show_balance()
        print(f"Interest Rate: {self.interest_rate}%")


class CurrentAccount(BankAccount):
    def __init__(self, account_number, balance, overdraft_limit):
        super().__init__(account_number, balance)
        self.overdraft_limit = overdraft_limit

    def withdraw(self, amount):
        if amount <= self.balance + self.overdraft_limit:
            self.balance -= amount
            print(f"Withdrawn: ₹{amount}")
        else:
            print("Overdraft limit exceeded")

    def display(self):
        print(f"Account Number: {self.account_number}")
        self.show_balance()
        print(f"Overdraft Limit: ₹{self.overdraft_limit}")


saving = SavingAccount("28681484390", 5000, 4)
current = CurrentAccount("28681484391", 10000, 2000)

saving.display()
saving.deposit(2000)
saving.withdraw(3000)
saving.show_balance()

print("-----")

current.display()
current.withdraw(11000)
current.show_balance()



# 7 Create a class with private attributes and getter/setter methods.
class Person:
    def __init__(self, name, age):
        self.__name = name
        self.__age = age
    def get_name(self):
        return self.__name

    def get_age(self):
        return self.__age

    def set_name(self, name):
        self.__name = name

    def set_age(self, age):
        self.__age = age
person = Person("Amit", 25)
print("Name:", person.get_name())
print("Age:", person.get_age())
person.set_name("Rohit")
person.set_age(30)
print("Updated Name:", person.get_name())
print("Updated Age:", person.get_age())




# 8 Create a Teacher and Student class to show inheritance.
class Teacher :
    def __init__(self,name,subject):
        self.name = name
        self.subject = subject 
    def display_info(self):
        print(f"Teacher Name: {self.name}, Subject: {self.subject}")

class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade

    def display_info(self):
        print(f"Student Name: {self.name}, Grade: {self.grade}")
techer =Teacher("sanjay","Maths")
student =Student("Rohit","A")
techer.display_info()
student.display_info()


# 9 Create a MusicPlayer class and subclass Spotify to override play method.
class MusicPlayer :
    def __init__(self):
        pass
    def play(self,song):
        print(f"Playing song: {song}")
class Spotify(MusicPlayer):
    def play(self, song):
        print(f"Streaming song from Spotify: {song}")
spotify_player = Spotify()
spotify_player.play("Shape of You")



# 10 Demonstrate the use of super() in inheritance.
class Parent:
    def __init__(self, name):
        self.name = name

    def display(self):
        print(f"Parent Name: {self.name}")
class Child(Parent):
    def __init__(self, name, age):
        
        super().__init__(name)
        self.age = age
    def display(self):
        super().display()
        print(f"Child Age: {self.age}")
child = Child("Rahul", 12)
child.display()