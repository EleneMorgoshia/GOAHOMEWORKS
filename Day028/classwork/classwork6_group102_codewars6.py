#the function takes 2 integers in form of a string  as a parameters ,
# and outputs the sum of this integers (also as a string)

def sum_str(a, b): #the function name is 'sum_str' and it has 2 parameters - a, b
    if a == '' and b == '': #check if the variable 'a' and the variable 'b' is empty 
        return str(0) #if the statement in the 5 th line is true , return '0'
    elif a == '': #check if the 'a' is empty
        return str(b) #if the statement int the 7th line is true, return b
    elif b == '': #check if the variable 'b' is empty
        return str(a) #if the statement in the 9th line is true, return a
    else:#else 
        sum = int(a) + int(b)   #created a variable called - 'sum' which equals to the sum of 'a' and 'b' in form of int 
        return str(sum) ##if the statement in the 5th line is false and the statement in the 9th line is flase , return the sum in form of string



print(sum_str('','')) #calling the function and passing 2 arguments 

#or

def summ_str(a,b):
    if not a and not b : # წესით ეს აკლია 
        return '0'
    if not a:
        a += '0'
    if not b:
        b += '0'
    
    return str(int(a)) + str(int(b))

print(summ_str('','')) #როცა ორივე ცარიელია არ გამოდის 