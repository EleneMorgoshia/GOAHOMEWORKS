#map and filter

#map
def add_five(x):
    return x +5

#მოცემული გვაქვს რაღაც სია და უნდა დავაბრუნოთ სია ,რომელშიც თითოეულ ელემენტეს დაემატება 5 
nums = [11,22,33,44,55]
result = list(map(add_five , nums)) #თითოეულს დაუმატებს ხუთ-ხუთს (listის გამოყენებით გარდავქმეით სასურველ ობიექტად)
print(result)

#filter
numbers = [11,22,33,44,55]
res = list(filter(lambda x : x %2 == 0 , numbers)) #მარტო ლუწები ჩაიყრება (ფილტრავს)
print(res)

#example

#with filter
names  = ['David ','John','Annabelle','Johnathan','Veronica']
long_names = list(filter(lambda x : len(x) > 5 , names))

#with for loop
names  = ['David ','John','Annabelle','Johnathan','Veronica']
long_names = []

for name in names:
    if len(name) > 5:
        long_names.append(names)
print(long_names) 

#or
def long_names(list_names):
    return [name for name in list_names if len(name) > 5 ]

names  = ['David ','John','Annabelle','Johnathan','Veronica']
print(long_names(names))