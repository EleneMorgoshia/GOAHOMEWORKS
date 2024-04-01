# პირველი 7 kyuიანი ამოცანა (გაკეთებული მქონდა :))
#A function counts vowels in string
def get_count(sentence): #the function  name is 'get_count' and it has 1 parameter - sentence
    vowel_count = 0 #created a variable called - 'vowel_count' which quals to 0
    for char in sentence: #foo loop in sentence
        if char in 'aeiou': #check if the letter is the vowel
            vowel_count += 1 #the variable vowel_count will be encreased with 1
    return vowel_count # the function returns the value of 'vowel_count'


print(get_count('eeekkkkooooii')) #calling the function and passing 1 argument