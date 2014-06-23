package main

import (
	"log"
	"os"
	"os/exec"
	"time"
)

func main() {
	lf, err := os.OpenFile("angel.txt", os.O_CREATE|os.O_RDWR|os.O_APPEND, 0600)
	if err != nil {
		os.Exit(1)
	}
	defer lf.Close()

	// 日志
	l := log.New(lf, "", os.O_APPEND)

	for {
		cmd := exec.Command("./app")
		err := cmd.Start()
		if err != nil {
			l.Printf("%s 启动命令失败", time.Now().Format("2006-01-02 15:04:05"), err)

			time.Sleep(time.Second * 5)
			continue
		}
		l.Printf("%s 进程启动", time.Now().Format("2006-01-02 15:04:05"), err)
		err = cmd.Wait()
		l.Printf("%s 进程退出", time.Now().Format("2006-01-02 15:04:05"), err)

		time.Sleep(time.Second * 1)
	}
}
