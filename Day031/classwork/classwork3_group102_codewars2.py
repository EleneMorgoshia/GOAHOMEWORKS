#A function returns the other complemetary side of the DNA

def DNA_strand(dna): #the function name is 'DNA' and it has 1 parameter - dna
    new_str = '' #created an empty string called  - 'new_str'
    dna_dict = { #created a dictionary called - 'dna_dict'
        'A' : 'T',
        'T' : 'A',
        'G' : 'C',
        'C' : 'G'
    }
    for char in dna: #for loop in dna
        new_str += dna_dict[char] #the new_str will be increased with the character at index char from the 'dna_dict'
    return new_str #the function returns the value of new_Str

print(DNA_strand('AAAAGGGCCCCTTT')) #calling the function and passing 1 argument