def split_str(s):
    return [c for c in s]

def check(digits):

    if len(split_str(digits)) >4 or len(split_str(digits)) ==0:
        return print([])
 
    

    ob = {
        '1':[],
        '2':['a','b','c'],
        '3':['d','e','f'],
        '4':['g','h','i'],
        '5':['j','k','l'],
        '6':['m','n','o'],
        '7':['p','q','r','s'],
        '8':['t','u','v'],
        '9':['w','x','y','z']
    }

    arr = split_str(digits)
    arr2 = []
    for item in ob:
        
        if item in arr:
            new = item

            if ob[new] != []:
                arr2.append(ob[new])
    
    arr3 = []
    if len(arr2) ==1:
        return print(arr2[0])
    firstPiece = arr2.pop(0)
    for element in arr2:
        for l in element:
            arr3.append(l)



    arr4 =[]
    for res in firstPiece:
        newstr = res
        # go over all the rest of the letters
        for r in arr3:
            newstr =res + r
            arr4.append(newstr)

            
    return print(arr4,'arr4')
    


   





check('')    