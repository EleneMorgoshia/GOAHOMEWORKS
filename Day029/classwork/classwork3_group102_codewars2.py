#A function removes the lowercase vowels(a,e,i,o,u) in a given string

def shortcut( s ): #the function name is 'shortcut' and it has 1 parameter - s
    result_str = '' #created an empty string called - 'result_str'
    for i  in range(len(s)): #for loop in s
        if s[i] not in 'aeiou': #check if the element at index i(iteration variable) is not   a vowel
            result_str += s[i] #if the statement in the 6th line is true , the 'result_str' will be encreased with the element at index i
    return result_str #the function return the value of 'result_str'
        

print(shortcut('how are you today?')) #calling the function and passing 1 argument 