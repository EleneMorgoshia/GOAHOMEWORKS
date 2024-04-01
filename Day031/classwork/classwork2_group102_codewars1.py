# This time no story, no theory. The examples below show you how to write function accum:

# accum("abcd") -> "A-Bb-Ccc-Dddd"
# accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
# accum("cwAt") -> "C-Ww-Aaa-Tttt"

def accum(st): #a function name is 'accum' and it has 1 parameter - st
    result_str = '' #created an empty array called - 'result_str'
    result_str += st[0].upper() #the result_str will be encreased with an  uppered element at index 0 from 'st'
    result_str += '-' #the result_Str will be encreased with '-'
    i = 1 #the iteration variable will be encreased with 1
    while i < (len(st)): #while loop in st
        if i == (len(st) - 1): #check if the iteration variable equals to the subtract of length of 'st' and 1
            result_str += st[i].upper() #if the statement in the 13 th line is true , the 'result_Str' will be encreased with the uppered element at index i
            result_str += i * st[i].lower() #if the statement in the 13 th line is true , the 'result_Str' will be encreased with  the multiplication of the iteration variable and the lowercase element at index i
        else:
            result_str += st[i].upper() #if the  statement in the 13th line is false, the 'result_str' will be encreased with the uppered element at index i 
            result_str += i * st[i].lower() #if the statement in the 13 th line is false, the 'result_str' will be encreased with  the multiplication of the iteration variable and the lowercase element at index i
            result_str += '-' #if the statement in the 13 th line is true , the 'result_Str' will be encreased with  '-'
        i += 1 #the iteration variable will be encreased with 1
    return result_str #the function returns the value of 'result_str'
    


print(accum('cwAt')) #calling the function and passing 1 argument

#more simpe


def accumm(s):
    new_str = ''
    for i in range(len(s)):
        new_str += s[i].capitalize()
        new_str += s[i].lower() * i
        new_str += '-'
    return new_str[:-1]#ბოლოში რამე ზედმეტი თუ გექნება, მრტივად [:-1]

print(accumm('cwAt'))