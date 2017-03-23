# Using docker-compose


This example shows a simple way of running a small node js server listening on port 3000. We´re going to use docker compose for this test. 

Before using docker compose we need to install our package.json with
```sh
$ npm install
```

```sh
$ docker-compose build
$ docker-compose run --service-ports echo
```

The above commands, will build the container and run the container (exposing the service ports). 

The configuration used to build and run the container can be found in `docker-compose.yml`.


