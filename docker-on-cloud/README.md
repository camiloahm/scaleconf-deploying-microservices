![scaleconf-deploying-microservices](dockermachine.png)

#Expose container in cloud using docker-machine

`docker-machine` is a docker tool (docker client) and is one of the docker mechanism to deploy containers to cloud providers

`docker-machine` uses "drivers" to deploy virtual instances in popular cloud providers. Every driver depends on a few configurations to work.

Some useful commands from docker-machine client

obtaining a list of currently docker machines
```sh
$ docker-machine ls
```
obtaining which docker machine is being used 
```sh
$ docker-machine active
```
Gets useful information from docker-machine to access the docker machine  
```sh
$ docker-machine env <docker-machine-name>
```
Creates a docker-machine inside specific environments depending on the driver (google cloud, azure, aws, virtual box, etc)  
```sh
$ docker-machine create -d <driver>
```

## Azure driver

```sh
$ docker-machine create -d azure --azure-ssh-user ops --azure-subscription-id <SubscriptionId> --azure-open-port 80 azuremachine
```
You will be asked to login with your account Azure account. The process takes about 5 minutes.

Connect to docker machine

```sh
$ docker-machine ls
$ docker-machine env <machine name>
```
Let´s deploy our site
$ docker build -t mynginx .
$ docker run -d -p 80:80 mynginx

Verify public ip and test again. 

## Google Cloud driver

To create a compute instance(VM) in google cloud, we need to follow the `gcloud` tools [gcloud install process](https://cloud.google.com/sdk/downloads) for your OS, to deploy from your command line.

After the install process, we can use our google cloud account to create a new machine then connect to it and deploy containers. Let´s deploy our nginx site

```
$ gcloud beta auth application-default login
$ docker-machine create -d google --google-project <google-cloud-project-id> <compute-name>
$ docker build -t mynginx .
$ docker run -d -p 80:80 mynginx

```
If you have this error "Error with pre-create check: "google: could not find default credentials." you must follow the json credential steps in the URL or you can use the beta command   

```
gcloud beta auth application-default login

```

Now we can check if the cointainer is up go to <http://<google-compute-ip>>

Now let´s install aspnet service. Please go to the folder MyService inside this path

```
$ docker build -t aspservice .
$ docker run -it -p 5000:5000 aspservice
```



## Amazon EC2 driver
To create an EC2 instance in AWS running Docker that we will later command from our local computer, we need the following variables set up : 

```
export AWS_ACCESS_KEY_ID=<your aws iam key>
export AWS_SECRET_ACCESS_KEY=<your aws iam key>

# According to when your AWS account was created, you may also need the following
export AWS_VPC_ID=vpc-xxxxxxxxx
export AWS_SUBNET_ID=subnet-xxxxxxxxx
```

```sh
$ docker-machine create -d amazonec2 aws01
```

Now you can deploy containers inside an Amazon´s virtual machine
