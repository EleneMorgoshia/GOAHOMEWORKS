#ლისთში არსებულ თითოეულ აითემს გვერდზე ვუწერთ *-ს

def double_string(any_list):
    new_list = []
    for element in any_list:
        new_list.append(element + '*')
    return new_list

print(double_string(['elene','koki','ioane']))