import math


# round(x)
# abs(y)
# pow(x, y)
# max(x, y, z)

# print(math.pi)
# x = math.sqrt(y)
# x = math.ceil()
# x = math.floor()

name = ""
age = 0
gpa = 1.9
student = False

def hello():
    
    while name != "":

        name = input("Enter your name: ")
        age = int(input("Enter your name: "))
        age = age * 1

        print(f"Hello, {name}")
        print(f"You are {age} years old")

        if age <= 24:
            print("and you are still dumb")
        elif age < 0:
            print("You haven't been born yet.")
        elif age >= 100:
            print("die already.")
        else:
            print("Act your age.")

for x in reversed(range(1,3)):
    print(x)

# print("Positive" if age > 0 else "Negative")
print(help(str))
print(dir()) 