#A function capatilizes the first letter of the world 

def capitalize_word (word): #the function name is 'capitalize_word' and it has 1 parameter - word
    result_str = '' #created an empty string called - 'result_str'
    result_str += word[0].upper() #result_str will be encreased with the first uppered letter of the 'word' 
    i = 1 #created an iteration variable that equals to 1
    while i < (len(word)): #while loop in word
        result_str += word[i] #result str will be encreased with the letters at index i from the 'word'
        i += 1 #iteration variable will be encreased with 1
    return result_str #the function returns the value of 'result_str'

print(capitalize_word('world')) #calling the function and passing 1 argument 