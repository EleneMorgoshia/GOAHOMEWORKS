#A function has a string of a space seperated numbers as a parameter and it returns the highest and lowest number

def high_and_low(numbers): #the function name is 'high_and_low' and it has 1 parameters - numbers
    result_str = '' #created an empty string called - 'result_str'
    temp_arr = numbers.split() #created a variable called - 'temp_arr' that equals to splited numbers
    min = temp_arr[0]  #created a variable  called - 'min' that equals to the element at index 0 from 'temp_arr'
    max = temp_arr[0] #created a variable called - 'max' that equals to the element at index 0 ftom 'temp_arr'
    for i in range(len(temp_arr)): #for loop in 'temp_arr'
        if int(temp_arr[i]) < int(min): #check if the integered element at index i (iteration variable) is lower than the integered 'min
            min = int(temp_arr[i]) #if the statement in the 9th line is true, the variable 'min' will change it's value . the changed value is integered element at index i 
        elif int(temp_arr[i]) > int(max): #check if the integered element at index i is grater than integered 'max'
            max = int(temp_arr[i]) #if the statement in the 11th line is true , max will change it's value. the new value is the integered  element at index i 
    result_str += str(max)  #the result_str will be ecreased with stringed 'max'
    result_str += ' ' #the result_str will be encreased with space
    result_str += str(min) #the result_str will be encreased with stringed 'min'
    return result_str #the function returns the value of resul_str


print(high_and_low('8 3 -5 42 -1 0 0 -9 4 7 4 -4')) #calling the function and passing 1 argument

#or more simple
def highest_and_lowest(numbers):
    int_list=[]
    x = numbers.split()
    for num in x:
        int_list.append(int(num))
    max_num = max(int_list)
    min_num = min(int_list)
    return str(x) + ' ' + str(max_num) + str(min_num)
