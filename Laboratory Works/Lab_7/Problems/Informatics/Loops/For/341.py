from math import sqrt

n = int(input())
s = int(sqrt(n))
res = 0

for i in range(1, s):
    if n % i == 0:
        res += 2

if n % s == 0:
    res += 1
    print(res)
else:
    print(res)
