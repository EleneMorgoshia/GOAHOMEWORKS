#A function squares every digit of a number and concatenates them.

def square_digits(num):  #the function name is 'square_digits' and it has 1 parameter - num
    temp_arr = [] #created an empty list called - 'temp_arr'
    result_str = '' #created a string called -'result_str'
    for i in range(len(str(num))): #for loop in str(num)
        temp_arr.append(str(num)[i]) #a stringed  element at index i(iteration variabl) will be added in the 'temp_arr'  
    for k in range(len(temp_arr)): #for loop in temp_arr
        result_str += str(int(temp_arr[k]) ** 2) #result_str will be encreased with the stringed squared element at index k 
    return int(result_str) #the function returns the integered value of 'result_str'
   

print(square_digits(123)) #calling the function and passing 1 argument
#YEEEEEEEEESSSS

#or more simple:

def sqquare_digits(num): 
    new_num = str(num)
    sum = ''
    for i in new_num:
        sum += str(int(i)*int(i))
    return int(sum)

print(sqquare_digits(123))