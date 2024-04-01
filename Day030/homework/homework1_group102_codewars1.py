# A function  takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

def filter_list(l): #the function name is 'filter_list'  and it has 1 parameter - filter_list
    result_arr = [] #created an empty array called - 'result_arr'
    for i in range(len(l)): #for loop in l
        if type(l[i]) == int: #check if the type of element at index i (iteration variable) equals to int
            result_arr.append(l[i]) #if the statement in the 6th line is true, reuslt_arr will be appended  the element at index i
            
    return result_arr #the function returns the value of 'result_arr'


print(filter_list([1,2,'aasf','1','123',123])) #calling the functio and passing 1 argument

#or 
def filterr_list(l): 
    result_arr = []
    for element in l:
        if type(element) == int:
            result_arr.append(element)
    return result_arr

print(filterr_list([1,2,'a','n']))