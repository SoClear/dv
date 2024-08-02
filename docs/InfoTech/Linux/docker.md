# docker

| 需求              | 命令                                                                                      |
|-----------------|-----------------------------------------------------------------------------------------|
| 查看正在运行的容器       | `docker ps`                                                                             |
| 查看所有容器          | `docker ps -a`                                                                          |
| 启动容器            | `docker start 容器名或容器ID`                                                                 |
| 停止容器            | `docker stop 容器名或容器ID`                                                                  |
| 重启容器            | `docker restart 容器名或容器ID`                                                               |
| 删除容器            | `docker rm 容器名或容器ID`                                                                    |
| 查看容器IP          | `docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' 容器名或容器ID` |

```sh
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' 容器名或容器ID
```

{{1+1}}
