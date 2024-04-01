#Dictionaries

ages = {
    'Dave': 24 ,
    'Mary': 42 ,
    'John':58
}

print(ages['Dave']) #აბრუნებს 'Dave' ის value-ს 
print(ages['Mary'])#აბრუნებს 'Mary' ის value-ს 

# მონაცემების დამატება
ages['nika'] = 22
print(ages)

#ერთ keyს ქონდეს 2 value(ლისთის სახით). ისე 1 key-ს არ აქვს 2 value
ages['nika'] = [22,100]
print(ages['nika'][1])
#-------------
#example
primes = {
    1:2 , 
    2:3 ,
    4:7,
    7:17
}

print(primes[primes[4]]) #primes[4] არის 7 ,primes [7] არის 17

#-----------
#get
fib = {1:1,2:1,3:2,4:3}
print(fib.get(4,0)) #ეს დააბრუნებს 4ის შესაბამის, ანუ 3-ს
print(fib.get(7,5)) #ეს დააბრუნებს 5-ს. რადგან 7 არ არის dictionaryში
print(fib.get(7)) #ეს აბრუნებს None -ს , რადგან არ არის 7 dictionaryში