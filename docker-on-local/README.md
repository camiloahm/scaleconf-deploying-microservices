![scaleconf-deploying-microservices](docker.png)

#Expose cointainer,build and run image on local machine

##Building an image
We are going to use a super small Linux distribution called Alpine Linux with an Nginx HTTP server.Please check file  "Dockerfile" that is inside this folder

The `FROM` directive references an existing image in the registry.
The `COPY` Directive copies the contents of the `./site` folder to `/usr/share/nginx/html` inside of the container.

In order to run this image, we must first build it :

```sh
$ docker build -t microservice .
```

Building an image, executes every statement inside of the `Dockerfile` and overlays the resulting file system on top of the previous one.

This time we run the container in the background with the parameter -d:

```sh
$ docker run -d -p 3000:80 microservice
```

The `-d` flag tells docker to run a "daemonized" container "Run in background".
The `-p 3000:80` flag maps the port 3000 on the host machine to the port 80 inside the container.

For native docker installs, you can access the HTTP server on localhost:3000. If you are using VirtualBox(docker toolbox), you should check the IP given by `docker-machine`. You can check the ip running:

```sh
$ docker-machine ls
$ docker-machine env <docker-machine>
```


# Other Docker common commands 


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
```

### Create and start a container in background
```sh
$ docker run -d <idcontainer>
```

### Create and start a container with port map from local to container
```sh
$ docker run -it -p <localport>:<containerport> <idcontainer>
```

### Create and start, but if the container is stop it will be removed 
```sh
$ docker run --rm <idcontainer>
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
