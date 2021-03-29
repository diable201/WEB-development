n = int(input())
num_list = list(int(num) for num in input().strip().split())[:n]
res = []
for i in range(len(num_list)):
    if i % 2 == 0:
        res.append(num_list[i])
print(' '.join(str(i) for i in res))

