# A function determines whether a strring is isogram 


def is_isogram(string): #the function name is 'is_isogram' and it has 1 parameter - string
    if string == '': #check if the string is empty
        return True #if the statement in the 5th line is true, return True
    string = string.lower() #lowered the string
    for char in string: #for in string
        if string.count(char) > 1: #check if counted char is grater than 1
            return False #if the statement in the 9th line is true , return false
    return True #if the statemen in the 9th line is false, return True

print(is_isogram('moose')) #calling the function and passing 1 argument