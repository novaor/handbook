### Linux 安装 mysql

### 创建系统用户
```shell script
groupadd mysql
useradd -g mysql mysql
```

### 解压
```shell script
cd /usr/local
tar -zxvpf /path-to/mariadb-VERSION-OS.tar.gz
ln -s mariadb-VERSION-OS mysql
cd mysql
```

### 配置my.conf
```shell script
vim /etc/my.conf

[mysqld]
datadir=/data
character-set-server=utf8

[mysql]
socket=/var/lib/mysql/mysql.sock
default-character-set=utf8

[client]
default-character-set=utf8
```

### 配置字符集
```shell script
show variables like '%character%';
show variables like 'collation%';

set character_set_database=utf8;
set character_set_server=utf8;
set collation_database=utf8_general_ci;
set collation_server=utf8_general_ci;
```

### 初始化数据库
```shell script
./scripts/mysql_install_db --user=mysql
chown -R root .
chown -R mysql data
```

# 配置系统服务
```shell script
cp support-files/systemd/mariadb.service /usr/lib/systemd/system/
systemctl enable mariadb
systemctl start mariadb
systemctl stop mariadb
systemctl status mariadb

GRANT ALL PRIVILEGES ON *.* TO 'api'@'%' IDENTIFIED BY 'api' WITH GRANT OPTION;
```
