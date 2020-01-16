### CentOS 7 安装 Oracle XE

### 准备工作
- [下载安装包](http://www.oracle.com/technetwork/cn/database/database-technologies/express-edition/downloads/index.html)
- 将下载的安装包上传到服务器

### 安装依赖
- `yum install libaio libaio-devel bc -y`

### 安装

- 解压
  + 安装zip unzip `yum install -y unzip zip`
  + 解压安装包 `unzip oracle-xe-11.2.0-1.0.x86_64.rpm.zip`

- 创建swap空间
  ```shell
    dd if=/dev/zero of=/var/swapfile bs=1024 count=1048576
    mkswap /var/swapfile
    swapon /var/swapfile
    cp /etc/fstab /etc/fstab.backup_$(date +%N)
    echo '/var/swapfile swap swap defaults 0 0' /etc/fstab
    chown root:root /var/swapfile
    chmod 0600 /var/swapfile
    swapon -a
    swapon -s````
  ```
- 安装rpm包
  ```shell
    cd Disk1/
    rpm -ivh oracle-xe-11.2.0-1.0.x86_64.rpm
  ```

- 运行configure
  ```shell
    /etc/init.d/oracle-xe configure
  ```

- 配置环境变量以使用sqlplus

  ```shell
    vim /etc/profile
  ```
  
  加入
  
  ```shell
    export ORACLE_BASE=/u01/app/oracle
    export ORACLE_HOME=/u01/app/oracle/product/11.2.0/xe
    export PATH=$PATH:$ORACLE_HOME/bin
    export ORACLE_SID=XE
    export NLS_LANG=`$ORACLE_HOME/bin/nls_lang.sh`
  ```
  
  执行
  
  ```shell
    source /etc/profile
  ```

### 验证
  ```shell
    sqlplus
    conn system/passw@ip:1521/xe;
    SELECT sysdate FROM dual;
  ```

### 查看监听状态
  ```shell
    lsnrctl start
    lsnrctl stop
    lsnrctl reload
    lsnrctl status
  ```

### 配置监听服务
  ```shell
    cd /u01/app/oracle/product/11.2.0/xe/network/admin
    vim listener.ora
  ```

### 检查默认监听端口1521是否开启
