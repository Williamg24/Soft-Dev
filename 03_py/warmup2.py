#string_times
def string_times(str, n):
  return str * n

#Front_times
def front_times(str, n):
  if len(str) <= 3:
    return str * n
  else:
    return str[0:3] * n

#String_bits
def string_bits(str):
  ans = ""
  counter = 0
  for e in str:
    if counter % 2 == 0:
      ans += e
    counter += 1
  return ans

#String_splosion
def string_splosion(str):
  ans = ""
  for i in range(len(str)):
    ans += str[:i +  1]
  return ans

#Last2
def last2(str):
  leng = len(str)
  if leng is 0:
    return 0
  last2 = str[leng - 2: leng]
  ans = 0
  for e in range(leng):
    if str[e: e + 2] == last2:
      ans += 1
  return ans - 1

#Array_count9
def array_count9(nums):
  counter = 0
  for e in nums:
    if e == 9:
      counter += 1
  return counter

#Array_front9
def array_front9(nums):
  if len(nums) < 4:
    for e in range(len(nums)):
      if nums[e] == 9:
        return True
    return False
  else:
    for e in range(4):
      if nums[e] == 9:
        return True
    return False

#array123
def array123(nums):
    for e in range(len(nums) - 2):
        if nums[e] == 1 and nums[e + 1] == 2 and nums[e + 2] == 3:
            return True
    return False

#string_match
def string_match(a, b):
  ans = 0
  for e in range(len(a) - 1):
    if a[e:e+2] == b[e:e+2] :
      ans += 1
    e += 1
  return ans


