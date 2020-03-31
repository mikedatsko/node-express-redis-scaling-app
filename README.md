# NodeJS (ExpressJS) Application for Scalling

#### The purpose of the application is to show the code reuse. The structure of the functionality allows scaling the application horizontally.

Application preview

![Application Preview](./public/images/application-preview.png 'Application Preview')

## Getting started

Clone the repository, build images and run applications.

### Prerequisites

- Docker, docker-compose

### Build images

```
docker-compose build
```

### Run applications

```
docker-compose up
```

## Structure

### Applications

`app` - root, master, application to see messages and result of running `app1` and `app2`.

`app1` and `app2` - helper application to show the reuse of code.

`redis` - redis instance to use key-value storage for persistance.

### Storage

In the application using Redis as persistent storage for messages. Instead of Redis could be used and other databases (MongoDB, Couch, PostgreSQL, MySQL, etc.) or data storage functionality.
