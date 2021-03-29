n = int(input())
num_list = list(int(num) for num in input().strip().split())[:n]
res = 0
for i in range(len(num_list)):
    if num_list[i] > 0:
        res += 1
print(res)

