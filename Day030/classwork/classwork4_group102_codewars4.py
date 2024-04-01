#A function returns the list containing the same elements but with the 'geese' removed
#the geese are any string in the following array :
#geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

def goose_filter(birds):# The function name is 'goose_filter' and it has 1 parameter - birds
    result_arr = [] #created an empty array called - 'result_arr'
    geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"] #created an array called - 'geese'
    for i in range(len(birds)): #for loop in birds
        if birds[i] not in geese: #check if the element at index i from the 'birds' is in the 'geese'
            result_arr.append(birds[i]) #elements at index i will be added in the 'result_arr'
    return result_arr #the function returs the value of 'result_arr'

print(goose_filter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])) #calling the function and passing 1 argument