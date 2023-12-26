package main

import (
	"fmt"
)

// (形参) (返回值)  可以传入func函数作为参数
func sum(num1 int, num2 int) int {
	return num1 + num2
}

// func sum(num1 int, num2 int) (sun int) {
// 	sun := num1 + num2
// 	return
// }

// 多个参数 args... + 类型
func moreArgs(args ...int) {
	for i := 0; i < len(args); i++ {
		fmt.Println(args[i])
	}
}

// 基本类型 和 数组 传递值
func inNum(num int) {
	num = 30
	fmt.Println("num", num)
}

// 传递地址
func inPointer(pointer *int) {
	*pointer = 20
	fmt.Println("pointer", *pointer)
}
func main() {
	// type xxx int  xxx 等价于 int 别名
	fmt.Println(sum(1, 2))
	moreArgs(50, 60, 70)
	var num = 10
	inNum(num)
	fmt.Println("main:", num)
	inPointer(&num)
	fmt.Println("main:", num)

}
