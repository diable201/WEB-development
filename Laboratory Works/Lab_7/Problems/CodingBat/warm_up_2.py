def string_times(str, n):
    return str * n


def string_splosion(str):
    result = ""
    for i in range(len(str)):
        result = result + str[:i+1]
    return result


def array_front9(nums):
    end = len(nums)
    if end > 4:
        end = 4
    for i in range(end):
        if nums[i] == 9:
            return True
    return False


def front_times(str, n):
    front = str[:3]  
    result = ""
    for _ in range(n):
        result = result + front
    return result


def last2(str):
    if len(str) < 2:
        return 0
    last2 = str[-2:]
    count = 0
    for i in range(len(str) - 2):
        sub = str[i:i+2]
        if sub == last2:
            count += 1
    return count


def array123(nums):
    for i in range(0, len(nums) - 2):
        if [1, 2, 3] == nums[i:i + 3]:
            return True
    return False


def string_bits(str):
    return str[::2]


def array_count9(nums):
    return nums.count(9)


def string_match(a, b):
    short = min(len(a), len(b))
    tmp = 0
    for i in range(short - 1):
        a_sub = a[i:i + 2]
        b_sub = b[i:i + 2]
        if a_sub == b_sub:
            tmp += 1
    return tmp

