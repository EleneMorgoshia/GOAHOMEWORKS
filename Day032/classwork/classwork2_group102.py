#list functions

nums = [55,44,33,22,11]

#all ანუ ლისთის თითოეული ელემენტი
if all(i >5 for i in nums ): #ყველა დიდია 5 ზე
    print('All larger than 5')

#any ანუ ერთ-ერთი მაინც
if any(i % 2 == 0 for i in nums):
    print('at least one is even')

for v in enumerate(nums): #აგარერირებს წყვილ tupleებს - ინდექს მარცხნივ , მარჯვნივ ამ ინდექსზე არსეული ელემენტის მნიშვნელობას
    print(v)