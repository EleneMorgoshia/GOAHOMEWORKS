#the funcion determines the shortest word from the given string

def find_short(s): #the function name is 'find_short' and it has 1 parameter - s
    temp_arr = s.split() #created a variable called - 'temp_arr' that equals to splited 's'
    min = temp_arr [0] #created a variable called -min that equals to the element at index 0 from the 'temp_arr'
    for i in range(len(temp_arr)): #for loop in temp_arr
        if (len(temp_arr[i])) < (len(min)): #check if the length of the element at index i is less thant lenght of the min
            min = temp_arr[i] #if the statement in the 7th line is true, min equals to the element at index i frot the 'temp_arr'
    return   (len(min)) #the function returns the lenght value of min


print(find_short("bitcoin take over the world maybe who knows perhaps")) #calling the function and passing 1 argument

#or 
def find_shortt(s):
    s = s.split()
    t = []
    for element in s:
        t.append(len(element))
    return min(t) #min დათვლის დროს პირდაპირ ამ ფუნქციის დაწერა შეგიძლია