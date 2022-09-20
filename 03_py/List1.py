#first_last6
def first_last6(nums):
  return nums[0] == 6 or nums[len(nums) - 1] == 6

# first_last
def same_first_last(nums):
  return len(nums) >= 1 and nums[0] == nums[len(nums) - 1]

# make_pi 
def make_pi():
  name = [3,1,4]
  return name

# common_end
def common_end(a, b):
  return a[0] == b[0] or a[len(a) - 1] == b[len(b) - 1]

#sum3
def sum3(nums):
    return sum(nums)

#rotate_left3
def rotate_left3(nums):
  ans = [nums[1],nums[2],nums[0]]
  return ans

#reverse3
def reverse3(nums):
  ans = [0,0,0]
  for e in range(3):
    ans[e] = nums[2-e]
  return ans

# max_end3
def max_end3(nums):
  mvalue = max(nums[0],nums[2])
  for e in range(3):
    nums[e] = mvalue
  return nums

#sum2
def sum2(nums):
  if len(nums) == 0:
    return 0
  elif len(nums) <= 2:
    return sum(nums) 
  else:
    return nums[0] + nums[1]

#middle_way
def middle_way(a, b):
  ans = [a[1],b[1]]
  return ans

#make_ends
def make_ends(nums):
  ans = [nums[0],nums[len(nums) - 1]]
  return ans

# has23
def has23(nums):
  return 2 in nums or 3 in nums