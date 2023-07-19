from pyspark import SparkConf, SparkContext
# pypark找不到python解释器，需要手动赋值
import os
os.environ['PYSPARK_PYTHON'] = "D:/python/python.exe"

conf = SparkConf().setMaster('local[*]').setAppName('test_spark')
sc = SparkContext(conf=conf)

# 通过parallelize方法将Python对象加载到Spark内，成为RDD对象
rdd1 = sc.parallelize([1, 2, 3, 4, 5])  # 列表 list
rdd2 = sc.parallelize((1, 2, 3, 4, 5))  # 元组 tuple
rdd3 = sc.parallelize("12345")         # 字符串 str
rdd4 = sc.parallelize({1, 2, 3, 4, 5})  # 集合 set
rdd5 = sc.parallelize({'key1': 'value1', "key2": "value2"})  # 字典 dict

# 查看使用collect()方法
# print(rdd1.collect())
# print(rdd2.collect())
# print(rdd3.collect())
# print(rdd4.collect())
# print(rdd5.collect())

# 通过textFile方法，读取文件数据加载代Spark内，成为RDD对象
rdd = sc.textFile("./txt.txt")
print(rdd.map(lambda x: (x.split(' ')[0][:2], 1)).
      reduceByKey(lambda a, b: a + b).collect())
# map flatMap(解除一层嵌套)
# rdd = rdd1.map(lambda x: x * 10)
# print(rdd.collect())
# reduceByKey 对数据两两相加，自动分组
# rdd1 = sc.parallelize(([('男', 10), ('男', 20), ('女', 10)]))
# rdd = rdd1.reduceByKey(lambda x, y: x + y)
# print(rdd.collect())
sc.stop()
