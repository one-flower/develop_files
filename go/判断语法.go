package main

import "fmt"

// "gotest/testPkg" //testPkg包

func main() {
	// fmt.Println(testPkg.StuAge)
	// var age uint8
	// fmt.Println("请输入年龄:")
	// fmt.Scanln(&age)
	// var name string
	// fmt.Println("请输入姓名:")
	// fmt.Scanln(&name)
	// var score float32
	// fmt.Println("请输入成绩:")
	// fmt.Scanln(&score)

	// fmt.Println("请输入学生的年龄，姓名，成绩，空格切割")
	// fmt.Scanf("%d %s %f", &age, &name, &score)
	// fmt.Printf("学生的年龄%v，学生的姓名%v，学生的成绩%v", age, name, score)

	//! if 判断
	// if score < 60 {
	// 	fmt.Printf("不及格")
	// }
	// // 简写
	// if s1 := 20; s1 < 30 {
	// 	fmt.Printf("s1:%v", s1)
	// }

	//! for 循环
	// var sum int
	// for i := 1; i <= 5; i++ {
	// 	sum += i
	// }
	// fmt.Printf("for循环sum %v", sum)

	// var str string = "hello world 你好"
	// 普通for循环，循环子节
	// for i := 0; i < len(str); i++ {
	// 	fmt.Printf("%c \n", str[i])
	// }
	// for range
	// for k, v := range str {
	// 	fmt.Printf("索引 %d，值 %c \n", k, v)
	// }

	//! break continue goto 作用
	// 跳出标签
	// label1:
	// 	for i := 0; i < 5; i++ {
	// 		fmt.Println(i)
	// 	label2:
	// 		for j := 0; i < 5; j++ {
	// 			if j == 2 {
	// 				break label1
	// 			}
	// 			if j == 3 {
	// 				continue label2
	// 			}
	// 		}
	// 	}
	fmt.Println("1")
	if true {
		goto label3
	}
	fmt.Println("2")
	fmt.Println("3")
label3:
	fmt.Println("4")

}
