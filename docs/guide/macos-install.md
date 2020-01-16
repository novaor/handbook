### MacOS 安装 nginx

### update brew
```shell script
brew update
```
::: tip 更新缓慢可参考
[https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/](https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/)
:::


### search nginx
```shell script
brew search nginx
# console
==> Formulae
nginx
```

### install nginx
```shell script
brew install nginx

# bin dir
/usr/local/Cellar/nginx/1.17.7/bin/
# config dir
/usr/local/etc//nginx/nginx.conf
```

### validate
```shell script
nginx -V
# console
nginx version: nginx/1.17.7
built by clang 11.0.0 (clang-1100.0.33.16)
built with OpenSSL 1.1.1d  10 Sep 2019
TLS SNI support enabled
```

### start
```shell script
cd /usr/local/Cellar/nginx/1.17.7/bin/
nginx
```

### config nginx
```shell script
cd /usr/local/etc//nginx/
vim nginx.conf
```

### stop
```shell script
nginx -s stop
```

### uninstall nginx
```shell script
brew uninstall nginx
```
