def min(a, b):
    if a < b:
        return a
    else:
        return b

a, b, c, d = list(map(int, input().split()))
print(min(min(a, b), min(c, d)))

