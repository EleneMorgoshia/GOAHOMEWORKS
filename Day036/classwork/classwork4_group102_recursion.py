#factorial

def factorial(n):
    if n == 1:
        return 1
    return  n * factorial(n-1)

print(factorial(4)) #1*2*3*4 = 24