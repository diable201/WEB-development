def pow(x, y):
    if y == 0:
        return 1
    tmp = x
    for _ in range(y - 1):
        tmp *= x
    return tmp

a, b = input().split()
a = float(a)
b = int(b)
print(pow(a, b))

