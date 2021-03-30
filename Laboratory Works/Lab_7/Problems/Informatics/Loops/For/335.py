from math import sqrt

a = int(input())
b = int(input())
result = []

for i in range(a, b + 1):
    j = int(sqrt(i))
    if j * j == i:
        result.append(i)

print(' '.join(str(i) for i in result))

