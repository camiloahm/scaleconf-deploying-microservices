# Docker Tutorial

## Docker common commands 

obtaining a list of currently running containers
```sh
$ docker ps
```

### Obtaining a list of all containers running / stopped
```sh
$ docker ps -a
```

### Create and start a container 
```sh
$ docker run -it <idcontainer>


### Create and start a container in background
```sh
$ docker run -d <idcontainer>


### Create and start a container with port map from local to container
```sh
$ docker run -it -p <localport>:<containerport> <idcontainer>


### Create and start, but if the container is stop it will be removed 
```sh
$ docker run --rm <idcontainer>


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










