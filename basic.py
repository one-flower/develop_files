# 注释
"""
我是注释 
"""

# 定义变量
name = 'python'


def func(z, y):
    # 定义函数
    return z * y


# 判断
if name == 'python':
    print(name)
else:
    print('name')

# while判断
num = 10
while num < 10:
    num += 1
print('while判断', num)

# for循环
for i in range(10):
    if i % 3 == 0:
        print('conrinue')
        continue
    elif i == 5:
        break
    else:
        print('for循环', i)

# 使用包
# import my_util.str_util
# print(my_util.str_util.set_reverse('hhhhhhh11222'))
# from my_util import str_util
# print(str_util.set_reverse('hhhhhhh11222'))
