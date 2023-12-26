// 变量赋值
package main

import "fmt"

// 全局变量
var g1 = 100
var g2 = 1.2

// 一次性声明
var (
	g3 = 3
	g4 = "4"
)

func main() {
	// 第一种 指定类型赋值
	var v1 int = 18
	fmt.Println(v1)
	// 第二种 指定类型，使用默认值
	var v2 int
	fmt.Println(v2)
	// 第三种 自动推断类型
	var v3 = "name"
	fmt.Println(v3)
	// 第四种 省略 var :=
	v4 := '男'
	fmt.Println(v4)

	// 声明多个变量
	var n1, n2, n3 int
	fmt.Println(n1, n2, n3)
	var m1, m2, m3 = 10, "hello", 10.0
	fmt.Println(m1, m2, m3)
	b1, b2, b3 := 1, '1', 1.1
	fmt.Println(b1, b2, b3)

	//! 指针
	/*
	 * 1.可以通过指针改变指向 var x *int = &a  *x = 20
	 * 2.指针变量一定是地址值 *int != int
	 * 3.指针变量的地址要匹配 *float != *int
	 * 4.基本数据类型都有对应的指针  *float32 = float32
	 */
	var age = 18
	fmt.Println(age, "age的地址为：", &age)
	// 定义指针变量   *int 指针类型
	var prt *int = &age
	*prt = 20
	// 获取指针指向数据
	fmt.Println("指针：", prt, "指针指向：", *prt)
}
