# list comprehensions


x = int(input()) #შემოდუს int
#3-ის და 5-ის ჯერადი რიცხვები უნდა დაპრიბტოს
nums = [ i for i in range(x) if i % 3 ==0 and i % 5 ==0 ]
print(nums)