# 目录
1. [标题](#title)
2. [列表](#title)
   1. [无序列表](#title_1)
   2. [有序列表](#title_2)
   3. [嵌套列表](#title_3)
3. [引用块](#quote)
   1. [行引用](#quote_line)
   2. [嵌套引用](#quote_nest)
4. [代码块](#codeBlock)
5. [链接](#link)
   1. [链接](#link_main)
   2. [链接参数](#link_param)
6. [图片](#photo)
   1. [图片](#photo_main)
   2. [图片参数](#photo_param)
7. [分割线](#splitLine)
8. [表格](#table)
9.  [复选框](#check)
10. [特殊样式](#special)

<h1 id="title">标题</h1>

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

<h1 id="title">列表</h1>

<h2 id='title_1'>无序列表</h2>
+ a
+ b

- a
- b

* a
* b
* 
<h2 id='title_2'>有序列表</h2>

1. a
2. b

<h2 id='title_3'>嵌套列表</h2>
+ a
  + a1
  + a2
+ b

1. a
   1. a1
   2. a2
2. b

<h1 id="quote">引用块</h1> 

<h2 id='quote_line'>行引用</h2>

> 引用行

<h2 id='quote_nest'>嵌套引用</h2>

> 行1
>> 行2

<h1 id="codeBlock">代码块</h1>

```
let a = 1
console.log(a)
// 1
```

<h1 id="link">链接</h1>

<h2 id="link_main">链接</h2>

[百度](www.baidu.com)

## 
<h2 id="link_param">链接参数</h2>

[name]: https://www.baidu.com
[名字]: https://www.baidu.com
这是[name]，这是[名字]

<h1 id="photo">图片</h1>

<h2 id="photo_main">图片</h2>

![图片](https://note.youdao.com/favicon.ico)

<h2 id="photo_param">图片参数</h2>

[图片参数](https://note.youdao.com/favicon.ico)  
[参数]: https://note.youdao.com/favicon.ico  
这是 ![图片带url]

<h1 id="splitLine">分割线</h1>

三个连续 - * _ , 可以有空格
---
- - -
------
*****
* * *
___

<h1 id="table">表格</h1>

用:的不同位置来改变对齐方式，默认左对齐(:-)，右对齐(-:)，居中对齐(:-:)

| 表1  | 表1  |
| ---- | ---- |
| 表格 | 表格 |
| 表格 | 表格 |

| 表2  |
| :--- |
| 表格 |
| 表格 |

表3 |
:--- |
表格 |
表格 |

<h1 id="check">复选框</h1>

- [ ] 未选
- [x] 已选

<h1 id="special">特殊样式</h1>

*斜体* or _斜体_   
**加粗** or __加粗__  
***加粗斜体*** or ___加粗斜体___    
\+ 转义  
~~删除~~ 