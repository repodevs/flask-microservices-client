# FLASK MICROSERVICES

This project is based on [testdriven.io](http://testdriven.io/) Microservices with Docker, Flask and React  

### Structure
1. _[flask-microservices-main](https://github.com/repodevs/flask-microservices-main)_ Docker Compose files, Nginx, admin scripts
2. _[flask-microservices-users](https://github.com/repodevs/flask-microservices-users)_ Flask App
3. _[flask-microservices-client](https://github.com/repodevs/flask-microservices-client)_ client-side based on ReactJS
---

## How To Run
----
1. install dependencies
```bash
$ npm install 
```
2. add react users service url
```bash
$ export REACT_APP_USERS_SERVICE_URL=http://localhost:5555
```
3. run it
```bash
$ npm start
```

In the [flask-microservices-users](https://github.com/repodevs/flask-microservices-users) run the server

```bash
$ source env/bin/activate
$ export APP_SETTINGS=project.config.DevelopmentConfig
$ export DATABASE_URL=postgres://postgres:postgres@localhost:5432/users_dev
$ export DATABASE_TEST_URL=postgres://postgres:postgres@localhost:5432/users_test

## create and seed database
$ python manage.py recreate_db
$ python manage.py seed_db
$ python manage.py runserver -p 5555
```


