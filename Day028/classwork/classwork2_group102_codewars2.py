#A function removes all the vowels in a given string

def remove_vowels(string): #the function name is 'remove_vowels' and it has 1 parameter - string
    result_str = '' #created an empty string called - result_str
    for i in range(len(string)): #for loop in string
        if string[i] not in 'aeiouAEIOU': #check if the element at index i(iteration variable) is a  vowel
            result_str += string[i] #if the statement in the 6th line is true , the 'result_str' will be encreased with the element at index i from the 'string' 
    return result_str #the function returns the value of 'result_str'


print(remove_vowels("Hello World It's me")) #calling the function and passing 1 argument