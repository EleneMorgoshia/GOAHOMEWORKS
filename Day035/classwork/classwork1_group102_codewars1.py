# Your task is to write a function maskify, which changes all but the last four characters into '#'.

def maskify(cc): #the function name is 'maskify' and it has 1 parameter - cc
    result_str = "" #created an empty string called - "result_str"
    i = 0 #created an iteration variable that equals to 0
    while i < (len(cc)): #while loop in cc
        if i == (len(cc) - 1 ) or  i == (len(cc) - 2 ) or i == (len(cc) - 3 ) or i == (len(cc) - 4 ): #check if the i equals to the value ot difference between
            #length of "cc" and 1 or if the i equals to the value of difference length of 'cc' and 2 or if the i equals to the value of difference between 
            #length of 'cc' and 3 or if the i equals to the value of 'cc' and 4 
            result_str += cc[i] #if the statement in the 7th line is true, result_str will be encreased with the element at index i from 'cc'
        else:
            result_str += "#" #if the statement in the 7th line is false , result_str will be encreased with "#"
        i += 1  #the itration variable will be encreased with 1
    return result_str #the function returns the value of  'result_str'

print(maskify("Skippy")) #calling the function and passing 1 argument

#or more simple
def maskiffy(cc):
    new_str = ''
    for i in range(len(cc) - 4 ):
        new_str += "#"
    new_str += cc[-4:]
    return new_str 

print(maskiffy("Skippy")) 