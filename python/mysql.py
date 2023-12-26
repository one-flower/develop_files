from pymysql import Connection
# 获取到Mysql数据库的链接对象
conn = Connection(
    host='120.26.243.190',
    port=3306,
    user='root',
    password='999326',
    autocommit=True,      # 设置自动提交
)
# 打印Mysql数据库软件信息
# print(conn.get_server_info())
# 获取游标对象
cursor = conn.cursor()
conn.select_db('zhz')
# 使用游标对象，执行sel语句
cursor.execute(
    "INSERT INTO user VALUES ( UUID(), 'name', 'psd', null , null , null, null,	NOW(), NOW())")
# 循环插入
# for i in list:
#     sql = f"insert into user (name, psd)"\
#           f"values('{i.name, i.psd}')"
# 获取查询结果
# reselts: tuple = cursor.fetchall()
# print(reselts)
# conn.commit() # 提交修改
# 关闭连接
conn.close()
