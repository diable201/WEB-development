n = int(input())
num_list = list(int(num) for num in input().strip().split())[:n]
for i in range(len(num_list) - 1):
    if num_list[i] > 0 and num_list[i + 1] > 0 or num_list[i] < 0 and num_list[i + 1] < 0:
        print("YES")
        exit()
print("NO")

