#A function returns all numbers from the array that are divisible by the given divisor.


def divisible_by(numbers, divisor): #the function name is 'divisible_by' and it has 2 parameters - numbers , divisor
    new_arr = [] #created an empty array called - 'new_arr'
    for i in range(len(numbers)): #for loop in  the numbers array
        if numbers[i] % divisor == 0: #check if the element at index i from the numbers array is divisible by the divisor
            new_arr.append(numbers[i]) #elements at index i will be added in the numbers array
    return new_arr #the function returns the value of new_arr

divisible_by([2,4,6,8,1],2) #calling the function and passing 2 arguments 


#or, hard one
def divisible_by(numbers, divisor):
    #თითოეული i ისთვის , თუ i იყოფა divisor-ზე , შეიქმნება ახალი სია 
    return[ i for i in numbers if i & divisor == 0 ] 