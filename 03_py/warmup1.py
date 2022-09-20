#Sleep_in
def sleep_in(weekday, vacation):
  if not weekday or vacation:
    return True
  else:
    return False

#monkey _trouble
def monkey_trouble(a_smile, b_smile):
  if a_smile and b_smile:
    return True
  if not a_smile and not b_smile:
    return True
  return False

#Sum_double
def sum_double(a, b):
  if (a != b):
    return(a+b)
  else:
    return (2 * (a + b))

#Diff21
def diff21(n):
  y = abs (n - 21)
  if n <= 21:
    return y 
  else:
    return y*2

#Parrot_trouble
def parrot_trouble(talking, hour):
  return talking and ((hour < 7) or (hour > 20))

#Makes10
def makes10(a, b):
  return (a is 10 or b is 10) or (a + b == 10) 

#Near_hundred 
def near_hundred(n):
  return (abs(100-n) <= 10) or (abs(200-n) <= 10)

#Pos_neg
def pos_neg(a, b, negative):
  if negative:
    return a < 0 and b < 0
  else:
    return (a < 0 and b > 0) or (a > 0 and b < 0)

#Not_string
def not_string(str):
  if str[:3] == "not":
    return str
  else:
    return "not " + str
    
#Missing_char
def missing_char(str, n):
  return str[:n] + str[n +1:]

#Front_back
def front_back(str):
  if len(str) is 1:
    return str
  mid = str[1:len(str) - 1]
  front = str[0:1]
  end = str[len(str) - 1:]
  return end + mid + front

#Front3
def front3(str):
  if len(str) <= 3:
    return str * 3
  else:
    return str[0:3] * 3