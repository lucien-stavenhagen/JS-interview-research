#
# and just for the heck of it, here's the
# Python 3.x version of FizzBuzz, using a Python closure
#
# Here's the original problem statment:
# "Write a program that prints all
# the numbers from 1 to 100.
# For multiples of 3, instead of the number,
# print "Fizz", for multiples of 5 print "Buzz".
# For numbers which are multiples of both 3 and 5,
# print "FizzBuzz".
#

def checkModulo(fizzbuzzfactor):
    def ifmultiple(number):
        return number % fizzbuzzfactor == 0
    return ifmultiple

fizz = checkModulo(3)
buzz = checkModulo(5)
def fizzBuzzGenerator():
    text=[]
    for i in range(1,100):
        if fizz(i) and buzz(i):
            text.append("FizzBuzz")
        elif buzz(i):
            text.append("Buzz")
        elif fizz(i):
            text.append("Fizz")
        else:
            text.append(str(i))
    return " ".join(text)

output = fizzBuzzGenerator()
print(output)