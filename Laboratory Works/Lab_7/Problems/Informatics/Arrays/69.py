n = int(input())
num_list = list(int(num) for num in input().strip().split())[:n]
num_list.reverse()
print(' '.join(str(i) for i in num_list))

