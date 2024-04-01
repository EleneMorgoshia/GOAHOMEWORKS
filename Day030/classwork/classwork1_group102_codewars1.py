#A function takes a size as a parameter and resturn a string of alternating 1s and 0s

def stringy(size): #the function name is 'stringy' and it has 1 parameter - size
    result_str = '' #created an empty string called - 'result_str'
    i = 1 #created an iteration variable that equals to 1 
    while i <= size:   #while loop 
        if i % 2 == 0: #check if the iteration variable is even
            result_str += '0' #if the statement in the 7th line is true,'result_str' will be encreased with'0'
        elif i % 2 == 1: #check if the iteration variable is odd
            result_str += '1' #if the statement in the 9th line is true, 'result_str' will be encreased with '1'
        i += 1 #iteration variable will be encreased with 1
    return result_str #the function return the value of 'result_str'

print(stringy(3)) #calling the function and passing 1 argument