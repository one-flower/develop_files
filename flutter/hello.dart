abstract class Animal {
  String url = 'url';
  void name(String name); // 抽象方法
}

class Dark extends Animal {
  @override
  String url = '123';
  @override
  name(name) {
    print('猫的名字' + name);
  }
}

abstract class Cat {
  void jump();
}

abstract class Dog {
  void run();
}

class CatAndDog implements Cat, Dog {
  @override
  jump() {
    print('跳');
  }

  @override
  run() {
    print('跑');
  }
}

void main() {
  // 创建Cat类的实例
  var dark = Dark();

  dark.name('嘎嘎');

  var catAndDog = CatAndDog();
  catAndDog.jump();
  catAndDog.run();
}
