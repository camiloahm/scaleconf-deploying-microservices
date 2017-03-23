![scaleconf-deploying-microservices](scaleconf.png)

# Deploying microservices to the cloud Medellin 2017

## Requirements

* Git https://git-scm.com/downloads  
* Docker community edition https://www.docker.com/get-docker Notice that If you have Windows 10 or OS X and your machine`s hypervisor is activated, you can use the native version of docker, otherwise you must use Docker Toolbox which has a Virtual Machine with a linux distribution where docker is already installed.  
* Verify Docker: open a terminal or docker toolbox and execute docker run --rm -p 80:80 nginx then open a browser and test http://localhost/. You must see welcome page from nginx 
* Docker Hub account https://hub.docker.com/ 

One of these subscriptions
* Azure suscription https://azure.microsoft.com/
* Google Cloud suscription https://cloud.google.com/
* AWS suscription https://aws.amazon.com/

Optional
*  If your subscription is Google Cloud you must install this CMD SDK https://cloud.google.com/sdk/
*  If your subscription is Azure you must install this CMD SDK https://docs.microsoft.com/en-us/cli/azure/install-azure-cli  

## Setup
* Open a terminal and execute git clone https://github.com/camiloahm/scaleconf-deploying-microservices.git

## Kubernetes configuration
`Google`
* Google containers engine https://cloud.google.com/container-engine/

`Azure`
* Azure container service https://azure.microsoft.com/en-us/services/container-service/

`AWS`
* Heptio Kubernetes Template https://aws.amazon.com/es/quickstart/architecture/heptio-kubernetes/

`Kubernetes Command Line Tool`
* KubeCTL Commands https://kubernetes.io/docs/user-guide/kubectl-overview/

### Kubernetes on Azure Container Services

Install Azure Commanline Tool 2.0 
* https://docs.microsoft.com/en-us/cli/azure/install-azure-cli 

Create Kubernetes Cluster 
```sh
az login -u <subscriptionuser>
az acs create --orchestrator-type=kubernetes --resource-group <RESOURCE_GROUP> --name=<CLUSTER_NAME> --dns-prefix=<DNS_PREFIX>
```
Install Kubernetes command line tool
```sh
az acs kubernetes install-cli
```
Connect to a cluster 
```sh
az acs kubernetes get-credentials --resource-group=<RESOURCE_GROUP> --name=<CLUSTER_NAME>
```

### Kubernetes Google Cloud Containers

Go to Google cloud and create a new Container Engine https://cloud.google.com/container-engine/docs/quickstart 

Click connect and execute get credentials command

```sh
gcloud container clusters get-credentials <clustername> --zone us-central1-a --project scaleconf-161302
```

### Kubernetes on AWS

Heptio Kubernetes Template https://aws.amazon.com/es/quickstart/architecture/heptio-kubernetes/ follow this guide https://s3.amazonaws.com/quickstart-reference/heptio/latest/doc/heptio-kubernetes-on-the-aws-cloud.pdf 

