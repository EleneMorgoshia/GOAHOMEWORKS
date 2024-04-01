#A function sorts a given list alphabetically.
#Output must be a string, and have "***" between each of its letters.

def two_sort(array): #the function name is 'two_sort' and it has 1 parameter - array
    sorted_arr = sorted(array) #created a variable called - 'sorted_arr' which equals to the sorted'array'
    result_str = sorted_arr[0][0] #created a variable called - result_str' that equals to the element at index 0 of the first sublist in the 'sorted_arr'
    i = 1 #created the iteration variale that equals to 1
    while i <= len(sorted_arr[0]) - 1 : #while loop
        result_str += "***{}".format(sorted_arr[0][i]) #result_str will be encreased with '***" and element at index 0 of the  i-th sublist in the 'sorted_arr' 
        i += 1 #the iteration variable will be encreased with 1
    return result_str #the function returns the value of 'result_str-



print(two_sort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])) #calling the function and passing 1 argument

#or simplier way 


def two_sortt(array):
    array = sorted(array)
    return "***".join(array[0])


print(two_sortt(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))