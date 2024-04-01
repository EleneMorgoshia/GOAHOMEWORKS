#try and except - 
#ერორის შემთხვევაში კოდი არ შეჩერდება


try: #try-ის ნაწილი თუ იმუშავებს , იმუშავებს. თუ არ იმუშავებს, ანუ თუ  დაეორორდება,  კოდი მაინც იმუშავებს , უბრალოდ შესრულდება 
     #except-ის ნაწილი
    num1 = 7
    num2 = 0
    print(num1/num2)
    print('done calculation')
except ZeroDivisionError: #რა ტიპის ერორთან გვაქვს საქმე. თუ try-ის ნაწილი არ შესრულდა ამ ნაწილს შეასრულებს 
    print('An error ocured')
    print('due to zero division')
finally: #ეს ყველა ვარიანტში გაეშვება 
    print(3)


#raise fun - ხელოვნურად შექმნილი ერორი
name = "123"
raise NameError("Invalid name!") 