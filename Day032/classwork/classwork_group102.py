# Tuples  - array-ს ერთ-ერთი სახე .  მისი მოდიფიკაცია შეუძლებელია
# აქ appendს, ჩანაცვლებას .....ვერ შევძლეათ

#list
list = ['one','two']

#dictionary
dict = {
    1 : 'one',
    2 : 'two'
}

#Tuples
tp = ('one' , 'two')
#-------
import math
p1 = (23,-80)
p2 = (6,43)

x = p1[0] - p2[0]
y = p1[1] - p2[1]
z = (x ** 2 + y ** 2) ** 0.5
print(z)