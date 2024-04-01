# function takes  a list as  a parameter  and returns a list with the reverse order

def reverse_list(arr): #the function name is 'reverse_list' and it has 1 parameter - 'arr'
    arr.reverse() #reverse the elements in the array
    return arr #the function returns the arr

print(reverse_list([2,8,4,10,5])) #calling the function and passing 1 argument