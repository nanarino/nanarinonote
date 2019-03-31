> # 套接字（socket）
>
> 套接字起源于 20 世纪 70 年代加利福尼亚大学伯克利分校版本的 Unix,即人们所说的 BSD Unix。 因此,有时人们也把套接字称为“伯克利套接字”或“BSD 套接字”。一开始,套接字被设计用在同 一台主机上多个应用程序之间的通讯。这也被称进程间通讯,或 IPC。套接字有两种（或者称为有两个种族）,分别是基于文件型的和基于网络型的。  

# 基于TCP协议的socket

### server端

```python
import socket
sk = socket.socket()
sk.bind(('127.0.0.1',8898))  #把地址绑定到套接字
sk.listen()          #监听链接
conn,addr = sk.accept() #接受客户端链接
ret = conn.recv(1024)  #接收客户端信息
print(ret)       #打印客户端信息
conn.send(b'hi')        #向客户端发送信息
conn.close()       #关闭客户端套接字
sk.close()        #关闭服务器套接字(可选)
```

### client端

```python
import socket
sk = socket.socket()           # 创建客户套接字
sk.connect(('127.0.0.1',8898))    # 尝试连接服务器
sk.send(b'hello!')
ret = sk.recv(1024)         # 对话(发送/接收)
print(ret)
sk.close()            # 关闭客户套接字
```

### 在重启服务端时可能会遇到

![img](https://images2017.cnblogs.com/blog/827651/201711/827651-20171109174833325-1552312354.png)解决方法： 

```python
#加入一条socket配置，重用ip和端口
import socket
from socket import SOL_SOCKET,SO_REUSEADDR
sk = socket.socket()
sk.setsockopt(SOL_SOCKET,SO_REUSEADDR,1) #就是它，在bind前加
sk.bind(('127.0.0.1',8898))  #把地址绑定到套接字
sk.listen()          #监听链接
conn,addr = sk.accept() #接受客户端链接
ret = conn.recv(1024)   #接收客户端信息
print(ret)              #打印客户端信息
conn.send(b'hi')        #向客户端发送信息
conn.close()       #关闭客户端套接字
sk.close()        #关闭服务器套接字(可选)
```



# 基于UDP协议的socket

#### server端

```python
import socket
udp_sk = socket.socket(type=socket.SOCK_DGRAM)   #创建一个服务器的套接字
udp_sk.bind(('127.0.0.1',9000))        #绑定服务器套接字
msg,addr = udp_sk.recvfrom(1024)
print(msg)
udp_sk.sendto(b'hi',addr)                 # 对话(接收与发送)
udp_sk.close()                         # 关闭服务器套接字
```

#### client端

```python
import socket
ip_port=('127.0.0.1',9000)
udp_sk=socket.socket(type=socket.SOCK_DGRAM)
udp_sk.sendto(b'hello',ip_port)
back_msg,addr=udp_sk.recvfrom(1024)
print(back_msg.decode('utf-8'),addr)
```


### 更多方法介绍

```txt
服务端套接字函数
s.bind()    绑定(主机,端口号)到套接字
s.listen()  开始TCP监听
s.accept()  被动接受TCP客户的连接,(阻塞式)等待连接的到来

客户端套接字函数
s.connect()     主动初始化TCP服务器连接
s.connect_ex()  connect()函数的扩展版本,出错时返回出错码,而不是抛出异常

公共用途的套接字函数
s.recv()            接收TCP数据
s.send()            发送TCP数据
s.sendall()         发送TCP数据
s.recvfrom()        接收UDP数据
s.sendto()          发送UDP数据
s.getpeername()     连接到当前套接字的远端的地址
s.getsockname()     当前套接字的地址
s.getsockopt()      返回指定套接字的参数
s.setsockopt()      设置指定套接字的参数
s.close()           关闭套接字

面向锁的套接字方法
s.setblocking()     设置套接字的阻塞与非阻塞模式
s.settimeout()      设置阻塞套接字操作的超时时间
s.gettimeout()      得到阻塞套接字操作的超时时间

面向文件的套接字的函数
s.fileno()          套接字的文件描述符
s.makefile()        创建一个与该套接字相关的文件
```

官方文档对socket模块下的socket.send()和socket.sendall()解释如下：

```txt
socket.send(string[, flags])
Send data to the socket. The socket must be connected to a remote socket. The optional flags argument has the same meaning as for recv() above. Returns the number of bytes sent. Applications are responsible for checking that all data has been sent; if only some of the data was transmitted, the application needs to attempt delivery of the remaining data.

send()的返回值是发送的字节数量，这个数量值可能小于要发送的string的字节数，也就是说可能无法发送string中所有的数据。如果有错误则会抛出异常。

–

socket.sendall(string[, flags])
Send data to the socket. The socket must be connected to a remote socket. The optional flags argument has the same meaning as for recv() above. Unlike send(), this method continues to send data from string until either all data has been sent or an error occurs. None is returned on success. On error, an exception is raised, and there is no way to determine how much data, if any, was successfully sent.

尝试发送string的所有数据，成功则返回None，失败则抛出异常。

故，下面两段代码是等价的：

#sock.sendall('Hello world\n')

#buffer = 'Hello world\n'
#while buffer:
#    bytes = sock.send(buffer)
#    buffer = buffer[bytes:]
```



#### 验证客户端链接的合法性

如果你想在分布式系统中实现一个简单的客户端链接认证功能，又不像SSL那么复杂，那么利用hmac+加盐的方式来实现 

服务端 

```python
#_*_coding:utf-8_*_
from socket import *
import hmac,os

secret_key=b'linhaifeng bang bang bang'
def conn_auth(conn):
    '''
    认证客户端链接
    :param conn:
    :return:
    '''
    print('开始验证新链接的合法性')
    msg=os.urandom(32)
    conn.sendall(msg)
    h=hmac.new(secret_key,msg)
    digest=h.digest()
    respone=conn.recv(len(digest))
    return hmac.compare_digest(respone,digest)

def data_handler(conn,bufsize=1024):
    if not conn_auth(conn):
        print('该链接不合法,关闭')
        conn.close()
        return
    print('链接合法,开始通信')
    while True:
        data=conn.recv(bufsize)
        if not data:break
        conn.sendall(data.upper())

def server_handler(ip_port,bufsize,backlog=5):
    '''
    只处理链接
    :param ip_port:
    :return:
    '''
    tcp_socket_server=socket(AF_INET,SOCK_STREAM)
    tcp_socket_server.bind(ip_port)
    tcp_socket_server.listen(backlog)
    while True:
        conn,addr=tcp_socket_server.accept()
        print('新连接[%s:%s]' %(addr[0],addr[1]))
        data_handler(conn,bufsize)

if __name__ == '__main__':
    ip_port=('127.0.0.1',9999)
    bufsize=1024
    server_handler(ip_port,bufsize)
```

客户端(合法) 

```python
#_*_coding:utf-8_*_
__author__ = 'Linhaifeng'
from socket import *
import hmac,os

secret_key=b'linhaifeng bang bang bang'
def conn_auth(conn):
    '''
    验证客户端到服务器的链接
    :param conn:
    :return:
    '''
    msg=conn.recv(32)
    h=hmac.new(secret_key,msg)
    digest=h.digest()
    conn.sendall(digest)

def client_handler(ip_port,bufsize=1024):
    tcp_socket_client=socket(AF_INET,SOCK_STREAM)
    tcp_socket_client.connect(ip_port)

    conn_auth(tcp_socket_client)

    while True:
        data=input('>>: ').strip()
        if not data:continue
        if data == 'quit':break

        tcp_socket_client.sendall(data.encode('utf-8'))
        respone=tcp_socket_client.recv(bufsize)
        print(respone.decode('utf-8'))
    tcp_socket_client.close()

if __name__ == '__main__':
    ip_port=('127.0.0.1',9999)
    bufsize=1024
    client_handler(ip_port,bufsize)
```

客户端(非法:不知道加密方式) 

```python
#_*_coding:utf-8_*_
__author__ = 'Linhaifeng'
from socket import *

def client_handler(ip_port,bufsize=1024):
    tcp_socket_client=socket(AF_INET,SOCK_STREAM)
    tcp_socket_client.connect(ip_port)

    while True:
        data=input('>>: ').strip()
        if not data:continue
        if data == 'quit':break

        tcp_socket_client.sendall(data.encode('utf-8'))
        respone=tcp_socket_client.recv(bufsize)
        print(respone.decode('utf-8'))
    tcp_socket_client.close()

if __name__ == '__main__':
    ip_port=('127.0.0.1',9999)
    bufsize=1024
    client_handler(ip_port,bufsize)
```

客户端(非法:不知道secret_key) 

```python
#_*_coding:utf-8_*_
__author__ = 'Linhaifeng'
from socket import *
import hmac,os

secret_key=b'linhaifeng bang bang bang1111'
def conn_auth(conn):
    '''
    验证客户端到服务器的链接
    :param conn:
    :return:
    '''
    msg=conn.recv(32)
    h=hmac.new(secret_key,msg)
    digest=h.digest()
    conn.sendall(digest)

def client_handler(ip_port,bufsize=1024):
    tcp_socket_client=socket(AF_INET,SOCK_STREAM)
    tcp_socket_client.connect(ip_port)

    conn_auth(tcp_socket_client)

    while True:
        data=input('>>: ').strip()
        if not data:continue
        if data == 'quit':break

        tcp_socket_client.sendall(data.encode('utf-8'))
        respone=tcp_socket_client.recv(bufsize)
        print(respone.decode('utf-8'))
    tcp_socket_client.close()

if __name__ == '__main__':
    ip_port=('127.0.0.1',9999)
    bufsize=1024
    client_handler(ip_port,bufsize)
```



### socketserver模块

server端 

```python
import socketserver
class Myserver(socketserver.BaseRequestHandler):
    def handle(self):
        self.data = self.request.recv(1024).strip()
        print("{} wrote:".format(self.client_address[0]))
        print(self.data)
        self.request.sendall(self.data.upper())

if __name__ == "__main__":
    HOST, PORT = "127.0.0.1", 9999

    # 设置allow_reuse_address允许服务器重用地址
    socketserver.TCPServer.allow_reuse_address = True
    # 创建一个server, 将服务地址绑定到127.0.0.1:9999
    server = socketserver.TCPServer((HOST, PORT),Myserver)
    # 让server永远运行下去，除非强制停止程序
    server.serve_forever()
```

client端

```python
import socket

HOST, PORT = "127.0.0.1", 9999
data = "hello"

# 创建一个socket链接，SOCK_STREAM代表使用TCP协议
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
    sock.connect((HOST, PORT))          # 链接到客户端
    sock.sendall(bytes(data + "\n", "utf-8")) # 向服务端发送数据
    received = str(sock.recv(1024), "utf-8")# 从服务端接收数据

print("Sent:     {}".format(data))
print("Received: {}".format(received))
```

