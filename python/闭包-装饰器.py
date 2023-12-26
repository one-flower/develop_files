# 闭包
def outer(title):
    def inner(msg):
        print(f"{title}, {msg}")
    return inner


text = outer('标题')
text('haha')

# 装饰器
def sleep_t(func):
    def inner():
        print('程序开始')
        func()
        print('程序结束')
    return inner


@sleep_t
def sleep():
    import time
    print('休眠')
    time.sleep(5)


sleep()
