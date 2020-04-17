# [FFmpeg](http://ffmpeg.org/) 安装

## 简介
<ul>
    <li>A complete, cross-platform solution to record, convert and stream audio and video.</li>
</ul>

## Centos安装FFmpeg
### 准备
```shell script
# 使用yum安装编译工具 gcc cc cl
yum -y install gcc cc cl
```
### 安装yasm插件
[Yasm官网](http://yasm.tortall.net/)
```shell script
# 下载
wget http://www.tortall.net/projects/yasm/releases/yasm-1.3.0.tar.gz
# 解压
tar -xvf yasm-1.3.0.tar.gz
# 执行安装
cd yasm-1.3.0/
./configure && make && make install
```

## 安装FFmpeg
```shell script
# 下载
wget http://www.ffmpeg.org/releases/ffmpeg-4.2.2.tar.gz
# 解压
tar -xvf ffmpeg-4.2.2.tar.gz
# 执行安装
cd ffmpeg-4.2.2/
./configure && make && make install
```

## 验证
```shell script
ffmpeg -version

ffmpeg version 4.2.2 Copyright (c) 2000-2019 the FFmpeg developers
built with gcc 4.8.5 (GCC) 20150623 (Red Hat 4.8.5-39)
configuration: 
libavutil      56. 31.100 / 56. 31.100
libavcodec     58. 54.100 / 58. 54.100
libavformat    58. 29.100 / 58. 29.100
libavdevice    58.  8.100 / 58.  8.100
libavfilter     7. 57.100 /  7. 57.100
libswscale      5.  5.100 /  5.  5.100
libswresample   3.  5.100 /  3.  5.100
```
