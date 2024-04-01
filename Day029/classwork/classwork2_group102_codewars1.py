#A function hecks if a given string (case insensitive) is a palindrome.

def is_palindrome(s): #the function name is 'is_palindrome' and it has 1 parameter - s
    new_str = s.lower() #created a variable called - 'new_str' that quals to the lowered string 's'
    if new_str[::-1] == new_str[0:]: #check if the reveres 'new_str' equals to it's original version
        return True #if the statemen in the 5th line is true, return true
    return False #if the statement in the 5th line is false, return false 

print(is_palindrome("abbA")) #calling the function and passing 1 argument 