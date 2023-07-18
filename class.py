class Cls:
  # 成员变量使用self
    name = None

    def __init__(self, name):
        self.name = name

    def say_hello(self):
        print(f"大家好，我是{self.name}")

    def say_hello2(self, msg):
        print(f"{msg}，我是{self.name}")
    # 魔术方法
    # def __eq__(self, name):
    #     return self.name == name


# cls = Cls()
# cls.name = 'zzz'
# cls.say_hello2('aaa')
# cls1 = Cls('aaa')
# cls2 = Cls('aaa')

class Phone1:
    date = '2022'

    def p_type(self):
        print(f'name：{self.date}')


class Phone2:
    date = '2023'

    def p_type(self):
        print(f'name：{self.date}')
        
class MyPhone(Phone1,Phone2):
  pass
# 前面的替换后面的
# myPhone = MyPhone()
# print(myPhone.date)

class Phone3(Phone2):
  date = '2024'
  def p_type(self):
      # print(f'name：{Phone2.date}')
      # Phone2.p_type(self)
      print(f'name：{super().date}')
      super().p_type()
# 优先使用子类 
myPhone = Phone3()
print(myPhone.date)
print(myPhone.p_type(),'===')