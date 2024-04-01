#the function return the real floors


def get_real_floor(n): #the function name is 'get_real_floor' and it has 1 parameter - n 
    if n == 1 or n == 0 : #check if the 'n' equals to 1 or if the 'n' equals to 0
        return 0 #if the statement in the 5th line it true, return 0
    elif n < 0 : #chech if the 'n' is less than 0 
        return n #if the statement in the 8th line is true,return n
    elif n > 1 and n <13: #check if the 'n' is grater than 1 and grater than 13
        return n - 1 #if the statement in the 9th line is true, return n-1
    elif n > 13: #chech if the 'n' is grater than 13
        return n - 2  #if the statement in the 11th line is true,return n - 2
    

print(get_real_floor(0)) #calling the function and passing 1 argument