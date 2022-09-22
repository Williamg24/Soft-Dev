# William Guo
# Soft Dev
# K00 -- Krewes Dictionary
# 2022-09-22
# time spent:
import random

krewes = {2:["a","b","c"],7:["jacob","william","nada"],8:["e","f","g"]}
def findDevo(krewes):
    keyList = [2,7,8]
    key = random.choice(keyList)
    valueList = krewes[key]
    #print(key)
    return(random.choice(valueList))
    
print(findDevo(krewes))
