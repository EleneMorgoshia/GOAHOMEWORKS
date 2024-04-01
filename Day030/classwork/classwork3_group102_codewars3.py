#the function returns array from 0 to the given number (n) - 1 

def arr(n): #the function name is 'arr' and it has 1 parameter - 'n'
    new_arr = [] #created an empty arr called - 'new_arr'
    i = 0 #created an iteration variable that equals to 0
    while i <= n-1: #while loop 
        new_arr.append(i) #element at index i will be added in the 'new_arr'
        i += 1 #the iteration variable will be encreased with 1
    return new_arr #the funtion returns the value of 'new_arr'


print(arr(6)) #calling the function and passing 1 argument 

#or, hard one
def arr(n = 0 ): #ფუნქციას გადავეცით დეფოლთ პარამეტრი - ანუ თუ არაფერს გადავცემთ ( ანუ არგუმენტი თუ არ ექნება) , დააბრუნებს(ანუ იგულისხმებს) 0-ს 
    return list(range(n))


print(arr(6))