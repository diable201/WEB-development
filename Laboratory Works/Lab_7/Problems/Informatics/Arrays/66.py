n = int(input())
num_list = list(int(num) for num in input().strip().split())[:n]
res = 0
for i in range(len(num_list) - 1):
    if num_list[i + 1] > num_list[i]:
        res += 1
print(res)

