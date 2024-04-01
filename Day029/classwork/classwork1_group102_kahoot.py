#kahooot
#1) blue - (abs-ფუნქცია გასახსენებელია)
#2) blue - 
#3) red - ??????
#4) red +
#5) blue - 
#6) blue +
#7) blue - 
#8)red + (გარტყმით)
#9) green +
#10)green -
#11)green -

#1) abs - მოდული
def marto_saxlshi(santa , rudolfi):
    return abs(santa-2 * rudolfi) # 13 - 14 = -1 absრადგან აქვს წინ იქნებოდა 1

print(marto_saxlshi(13,7))

#2) ჯამში სულ 7 ხაზი იქნებოდა (1-goal 2-ori 3-ented 4) 5) aca 6)demy 7) )
print("\tGOAL\nORI\nENTED\n\nACA\nDEMY\n" )

#3) უმაგრესი ამოცანააა
def gilocavt(num):
    if num == 0:
        return 0
    else:
        return gilocavt(num -1) # აქ დარჩებოდა gilocavt(3)
    #სანამ ნოლი არ გახდდებოდა num მაქამდე იმუშავებდა

n = gilocavt(4)
print(n)