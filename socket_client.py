import socket
# 创建对象
sock = socket.socket()
# 连接服务器
sock.connect(('localhost', 8888))

while True:
    sData = input("发送信息：")
    if (sData == 'exit'):
        break
    sock.send(sData.encode('utf-8'))
    data: str = sock.recv(1024).decode('utf-8')
    print(f"接受信息为：{data}")
# 关闭连接
sock.close()
