#A function returns the greetings in different languages 

def greet(language): #the function name is 'greet' and it has 1 parameter - language
    language_arr = [ ("english", "Welcome") #created a list called - language_arr 
, ("czech", "Vitejte")
, ("danish", "Velkomst")
, ("dutch", "Welkom")
, ("estonian", "Tere tulemast")
, ("finnish", "Tervetuloa")
, ("flemish", "Welgekomen")
, ("french", "Bienvenue")
, ("german", "Willkommen")
, ("irish", "Failte")
, ("italian", "Benvenuto")
, ("latvian", "Gaidits")
, ("lithuanian", "Laukiamas")
, ("polish", "Witamy")
, ("spanish", "Bienvenido")
, ("swedish", "Valkommen")
, ("welsh", "Croeso")
]
    for i in range(len(language_arr)): #for loop in language-arr
        if language == language_arr[i][0]:#Check if the 'language' variable is equal to the first element (index 0) of the i-th sublist in 'language_arr'
            return language_arr[i][1] #if the statement in the 23 line is true, return the first element(index 0) of the  i-th sublist in the 'languge_arr' 
    return 'welcome' #if the statement in the 23 line is false, return 'welcome'


print(greet('dutch')) #calling the function and passing 1 argument


#or 

def greett(language):
    language_dict = { ("english", "Welcome")
, ("czech", "Vitejte")
, ("danish", "Velkomst")
, ("dutch", "Welkom")
, ("estonian", "Tere tulemast")
, ("finnish", "Tervetuloa")
, ("flemish", "Welgekomen")
, ("french", "Bienvenue")
, ("german", "Willkommen")
, ("irish", "Failte")
, ("italian", "Benvenuto")
, ("latvian", "Gaidits")
, ("lithuanian", "Laukiamas")
, ("polish", "Witamy")
, ("spanish", "Bienvenido")
, ("swedish", "Valkommen")
, ("welsh", "Croeso")
}
    if language in language_dict:
        return language_dict[language]
    return 'welcome'