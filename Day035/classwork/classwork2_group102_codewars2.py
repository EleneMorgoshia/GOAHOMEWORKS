#the function has 2 integers as a parameters and it finds the sum of all the integers between and including them and return it.


def get_sum(a,b): #the function name is 'get_sum' and it has 2 parameters - a, b
    sum = 0 #created a variable called - 'sum' that equals to 0
    temp_var_for_max = max(a,b) #created a variable called - 'temp_var_for_max' that equls to the maximum element between a and b
    temp_var_for_min = min(a,b) #created a variable called - 'temp_var_for_min' that equls to the minimum element between a and b
    i = temp_var_for_min #created an iteration variable which equals to the "temp_var_for_min"
    while i <= temp_var_for_max: #while loop
        sum += i #the sum will be encreased with the iteration variable
        i += 1 #the iteration variable will be encreased with 1
    return sum #the function returns the value of 'sum'
 

print(get_sum(1,0)) #calling the function and passing 2 arguments