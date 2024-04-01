#შესანახი კოდი!
def apply_twice(func,org):
    return func(func(org))
    #return add_five(add_five(10)) ანუ add_five(15) ანუ 20

def add_five(x):
    return x + 5

print(apply_twice,10)