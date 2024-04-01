#A function takes a value, integer , and returns a list of its multiples up to another value, limit . 


def find_multiples(integer, limit): #the function name is 'find_multiples' and it has 2 parameters - integer , limit
    result_str = [] #created an empty list called - 'result_str'
    i = integer  #created an iteration variable that equals to the'enteger'
    while i <= limit: #while loop 
        if i % integer == 0: #check if the iteration variable is divisible by the integer 
            result_str.append(i) #if the statement in the 8th line is true, the iteration variable will be added in the 'result_str'
        i += 1 #the iteration variable will be encreased with 1
    return result_str #the function returns the value of 'result_str'

print(find_multiples(2,6)) #calling the function and passing 2 arguments 