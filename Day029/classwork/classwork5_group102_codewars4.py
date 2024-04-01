#A function takes an age as a parameter and returns a proper drink:

# Kids drink toddy -  Children under 14 old.
# Teens drink coke - Teens under 18 old. 
# Young adults drink beer - Young under 21 old.
# Adults drink whisky - Adults have 21 or more.

def people_with_age_drink(age): #the function name is 'people_with_age_drink' and it has 1 parameter - age
    if age < 14: #check if the age is less than 14
        return 'drink toddy' #if the statement in the 8th line is true , return 'drink toddy'
    elif age < 18 and age >= 14: #check if the age is less than 18 and if the age is grater than or equal to 14
        return 'drink coke' #if the statement in the 10th line is true , return 'drink coke'
    elif age < 21 and age >= 18: #check if the age is less than 21 and if the age is grater than or equals to 18
        return 'drink beer' #if the statement in the 12th line is true, return 'drink beer'
    elif age >= 21:  #check if the age is grater than or equals to 21
        return 'drink whisky' #if the statement in the 14th line is true, return 'drink whisky'
    
print(people_with_age_drink(3)) #calling the funcion and passing 1 argument