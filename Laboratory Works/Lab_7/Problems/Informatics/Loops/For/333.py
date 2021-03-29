a = int(input())
b = int(input())
even_numbers = []

for i in range(a, b + 1):
    if i % 2 == 0:
        even_numbers.append(i)

print(' '.join(str(i) for i in even_numbers))
