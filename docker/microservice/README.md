#Expose cointainer and build image

##Building an image
We are going to use a super small Linux distribution called Alpine Linux with an Nginx HTTP server.Please check file  "Dockerfile" that is inside this folder

The `FROM` directive references an existing image in the registry.
The `COPY` Directive copies the contents of the `./site` folder to `/usr/share/nginx/html` inside of the container.

In order to run this image, we must first build it :

```sh
$ docker build -t quick-nginx .
```

Building an image, executes every statement inside of the `Dockerfile` and overlays the resulting file system on top of the previous one.

This time we run the container in the background with the parameter -d:

```sh
$ docker run -d -p 3000:80 quick-nginx
```

The `-d` flag tells docker to run a "daemonized" container "Run in background".
The `-p 3000:80` flag maps the port 3000 on the host machine to the port 80 inside the container.

For native docker installs, you can access the HTTP server on localhost:3000. If you are using VirtualBox(docker toolbox), you should check the IP given by `docker-machine`. You can check the ip running:

```sh
$ docker-machine ls
$ docker-machine env <docker-machine>
```



