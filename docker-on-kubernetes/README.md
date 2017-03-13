![scaleconf-deploying-microservices](kubernetes.png)


#Run and expose container on Kubernates

##Publish image in a Docker registry

We need to publish our image in a private or public registry

`Public`
* Docker hub https://hub.docker.com/

`Private`
* Azure container registry https://azure.microsoft.com/en-us/services/container-registry/
* AWS container registry https://aws.amazon.com/es/ecr/
* Google Cloud container registry https://cloud.google.com/container-registry/

This time we're going to use Docker Hub, we need to execute the next commands

```sh
$ docker login
$ Username: <dockerhub user>
$ Password: <dockerhub password>
```

Then we need to create a tag for our microservice image

```sh
$ docker tag microservice <username>/scaleconf
$ docker push <username>/scaleconf
```
Check your Docker Hub account 


##Run image from Kubernetes




