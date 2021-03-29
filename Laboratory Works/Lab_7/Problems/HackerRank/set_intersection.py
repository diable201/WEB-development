_ = int(input())
fist_set = set(map(int, input().split()))
_ = int(input())
second_set = set(map(int, input().split()))
print(len(fist_set.intersection(second_set)))

