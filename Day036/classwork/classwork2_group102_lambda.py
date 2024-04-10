#named function
def polynomial(x):
    return x**2 + 5 * x + 4

print(polynomial(-4))

#lambda
print((lambda x : x **2 + 5 * x + 4)(-4))


#another exmple

#named function
def my_func(x):
    return 2 * x * x

print(my_func(5))

#lambda
print(lambda x : 2 * x * x , 5)

