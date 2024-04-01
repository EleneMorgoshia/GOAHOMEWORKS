#kahoot

#1)yellow +
#2)yellow +
#3)yellow  - whaaaat?
#4)blue +
#5)red -
#6)green -
#7)არ ჩანს
#8)blue+
#9)blue+ no waaayy

#3) დიდი ასოებით ეწერა Stringში სიმბოლოები, ამიტომ x = 0
def mawon(gela):
    x = 0
    for i in gela:
        if i in 'aeiou': #არცერთი არ არის 'aeiou' ში
            x += 1
    return x

str_gela = 'GELA MIDIS MAWONZE'
print(mawon(str_gela))

#5)
import random

def more_bitches(x,y):
    a = x + y
    b = x - y
    c = a + b + a
    return a - a + a

def no_bitches(x,y):
    a = x + y - x - y + y
    b = x + y - x - y + x
    c = b -a
    return c

def multy_bithces(x,y):
    a = x + y
    b = y - x
    c = a + b  - a + b + x *y
    return c

print(more_bitches(no_bitches(10,5),multy_bithces(2,2)))

#6)
def chesi(mxedari):
    for item in range(1,mxedari[3][2],2): #1 დან 4 ამდე ყოველი მეორე
        if item == 3:
            break
    else:
        print(item)
    return item

print(chesi([3,7,34,[5,2,4,7],'ocdaoci']))

#7) Google-ის ამოცანა 
names_list = [['nik',4,['mari','3',['elene','barbare']]],['lashasmama','TvitonLasha'],['14,69']]
print(names_list[0][0],names_list[2][1],names_list[0][2][2][1],names_list[0][1],names_list[1][1],names_list[2][0])