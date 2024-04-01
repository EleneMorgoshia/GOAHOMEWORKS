#A function checks to see if a string has the same amount of 'x's and 'o's

def xo(s):#the function name is 'xo' and it has 1 parameter -s
    count_of_x = 0 #created a variable called - 'count_of_x' which equals to 0
    count_of_o = 0 #created a viariable called - 'count_of_o' that equals to 0
    for char in s.lower(): #for loop in lowered s
        if char == 'x': #check if char equals to 'x'
            count_of_x += 1 #if the statement in the 7th line is true,the count_of_x will be encreased with 1
        elif char == 'o': #check if chat equals to 'o'
            count_of_o += 1 #if the statement in the 9th line is true , the count_of_o will be encreased with 1
    return count_of_x == count_of_o #the function returns the value of 'count_of_x'

print(xo("xooxx")) #callin the function and passing 1 argument