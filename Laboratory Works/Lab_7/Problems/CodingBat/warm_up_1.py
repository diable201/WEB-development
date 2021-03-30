def sleep_in(weekday, vacation):
    if not weekday or vacation:
        return True
    else:
        return False


def diff21(n):
    if n <= 21:
        return 21 - n
    else:
        return (n - 21) * 2


def near_hundred(n):
    return (abs(100 - n) <= 10) or (abs(200 - n) <= 10)


def missing_char(str, n):
    front = str[:n]
    back = str[n + 1:]
    return front + back


def monkey_trouble(a_smile, b_smile):
    if a_smile and b_smile:
        return True
    if not a_smile and not b_smile:
        return True
    return False


def parrot_trouble(talking, hour):
    return talking and (hour < 7 or hour > 20)


def pos_neg(a, b, negative):
    if negative:
        return a < 0 and b < 0
    else:
        return (a < 0 and b > 0) or (a > 0 and b < 0)


def front_back(str):
    if len(str) <= 1:
        return str
    mid = str[1:len(str) - 1]
    return str[len(str) - 1] + mid + str[0]


def sum_double(a, b):
    sm = a + b
    if a == b:
        sm = sm * 2
    return sm


def makes10(a, b):
    return a == 10 or b == 10 or a + b == 10


def not_string(str):
    if len(str) >= 3 and str[:3] == "not":
        return str
    return "not " + str


def front3(str):
    front = str[:3]
    return front * 3
