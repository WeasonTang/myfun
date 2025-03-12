# tools

## Gobuster

Gobuster 是一个用 Go 语言编写的命令行工具，主要用于目录和文件的暴力破解以及 DNS 子域名的暴力破解。它非常适合用于渗透测试和安全评估，帮助发现隐藏的目录、文件和子域名。

Gobuster 的主要功能包括：
- 目录和文件暴力破解：通过字典文件尝试访问目标服务器上的隐藏目录和文件。
- DNS 子域名暴力破解：通过字典文件尝试发现目标域名的子域名。
- S3 存储桶暴力破解：尝试发现 AWS S3 存储桶。

Gobuster 的一些常用选项包括：
- `-u`：指定目标 URL。
- `-w`：指定字典文件路径。
- `-t`：指定并发线程数。
- `-o`：指定输出文件路径。

示例用法：
```sh
gobuster dir -u http://example.com -w /path/to/wordlist.txt -t 50 -o output.txt
```

这个命令会使用 `/path/to/wordlist.txt` 中的单词列表对 `http://example.com` 进行目录和文件暴力破解，并将结果保存到 `output.txt` 文件中。


