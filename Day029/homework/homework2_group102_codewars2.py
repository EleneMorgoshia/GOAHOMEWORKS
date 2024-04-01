#the function returns the middle character of a given word(string)

def get_middle(s): #the function name is 'get_middle' and it has 1 parameter - 1
    if (len(s)) % 2 == 0: #check if the length of the string is even 
        return   s[(len(s)//2) - 1] + s[len(s) // 2]  #if the statement in the 4th line is true, the function will return the 
    # middle two characters from the string 's' and concatenates them.
    return s[len(s) // 2 ] #if the statement in the 4th line is false, the function will return the middle character from the  string 's'
    
print(get_middle('A')) #calling the function and passing 1 argument 