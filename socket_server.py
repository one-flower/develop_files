import socket
# 创建对象
sock = socket.socket()
# 绑定ip和端口
sock.bind(('localhost', 8888))
# 监听端口
sock.listen(1)
# 阻塞方法，接收 连接对象 / 地址信息
conn, address = sock.accept()
print(f"收到信息，地址为：{address}")
while True:
    data: str = conn.recv(1024).decode('utf-8')
    print("接受到发来的数据", data)
    recData = input("回复信息：")
    if (recData == 'exit'):
        break
    conn.send(recData.encode('utf-8'))

# 关闭连接
conn.close()
sock.close()
