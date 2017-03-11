![scaleconf-deploying-microservices](scaleconf.png)

#Deploying microservices to the cloud Medellin 2017

##Requirements
* Azure suscription https://azure.microsoft.com/




# Docker Tutorial

## Docker Installation
If you have Windows 10 or OS X and your machine`s hypervisor is activated, you can use the native version of docker, otherwise you must use Docker Toolbox which has a Virtual Machine with a linux distribution where docker is already installed  

## Docker common commands 

obtaining a list of currently running containers
```sh
$ docker ps
```

### Obtaining a list of all containers running / stopped
```sh
$ docker ps -a
```

### Stopping a container
```sh
$ docker stop <container name>
```

### Removing a container (has to be stopped)
```sh
$ docker rm <container name>
```

### Removing all containers with exited status
```sh
$ docker rm -v $(docker ps -a -q -f status=exited)
```

### Inspecting a container
```sh
$ docker inspect <container name>
```

### Listing docker images locally available
```sh
$ docker images
```

### Pulling an image from docker hub
```sh
$ docker pull <image>
```

### Removing docker images
```sh
$ docker rmi <image name>
```

### Go to interactive mode in a container
```sh
$ docker attach <idcontainer>
``` 

### SSH connection to the container
```sh
$ docker exec -i -t <idcontainer> /bin/bash
```
