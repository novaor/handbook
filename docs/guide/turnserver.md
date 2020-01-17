# Turnserver 服务器搭建

## 安装
### 安装依赖库
```shell script
yum install -y make gcc cc gcc-c++ wget
yum install -y openssl-devel libevent libevent-devel
```
### 安装coturn
```shell script
git clone https://github.com/coturn/coturn
cd coturn
./configure
make
sudo make install
cd /usr/local/etc/
cp turnserver.conf.default turnserver.conf
```

## 配置
```shell script
vim turnserver.conf


# 默认监听端口
listening-port=3478
# 外网ip
external-ip=47.110.132.92
# 用户密码
user=idc:123456
# 域名
realm=nodesh.cn
no-tls
no-dtls
# 日志
log-file=/var/tmp/turn.log
# For the security reasons, it is recommended to use the encrypted
cli-password=idc123456
```

## 启动

### 确保端口开放
```shell script
iptables -A INPUT -p udp --dport 3478 -j ACCEPT
iptables -A INPUT -p udp --dport 5349 -j ACCEPT
```
### 启动
```shell script
turnserver -o -a -c /usr/local/etc/turnserver.conf
```
### 验证监听端口
```shell script
netstat -nat | grep LISTEN
```

## 验证
### 在线测试
[https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice/](https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice/)

::: tip 参考链接
[https://github.com/coturn/coturn/blob/master/INSTALL]()
:::
