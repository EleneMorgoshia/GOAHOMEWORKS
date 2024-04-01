# A function determines if a given number is a square number
# In mathematics, a square number or perfect square is an integer that is the square of an integer;
# in other words, it is the product of some integer with itself. - hard one!


def is_square(n):#the function name is 'is_square' and it has 1 parameter - n
    if n ** 0.5 % 1 == 0 and n > 0: #check if the number is grater than 0 ad if the number's root is an integer
        return True #if the statement in the 7th line is true , return True
    return False #if the statement in the 7th line is false , return False

print(is_square(9)) #calling the function and passing 1 argument


#ამის ლოგიკა ყოფილა ის ,რომ თუ რიცხვი არის რაღაცის კვადრატი, მაქედან ფესვი
# არის ყოველთვის მთელი რიცხვი