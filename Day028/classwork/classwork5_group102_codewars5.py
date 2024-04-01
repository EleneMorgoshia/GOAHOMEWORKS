#the function changes the positions of elements in the array
def fix_the_meerkat(arr): #the function name is 'fix_the_meerkat' and it has 1 parameter
    result_arr = []  #created an empty array called - 'result_arr'
    i = len(arr) - 1  #created an iteration variable that equals  the difference between the  lenght of the array and 1 
    while i >= 0: #while loop 
        result_arr.append(arr[i]) # element at index i will be added in a 'resul_arr'
        i -= 1 #iteration variable will be decreased with 1 
    return result_arr #the function returns the value of 'result_arr'

print(fix_the_meerkat(['tail','body','head'])) #calling the function and passing 1 argument

#or
def fixx_the_meerkat(arr):
    return arr[::-1]


print(fixx_the_meerkat(['tail','body','head']))

#or the best one 
def fixx_the_meerkatt(arr):
    arr.reverse()
    return arr

print(fixx_the_meerkatt(['tail','body','head']))