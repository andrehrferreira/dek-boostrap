# @dek/bootstrap

DEK project base structure

What does the bootstrap do?

* Create a basic HTTP server with Express (https://www.npmjs.com/package/express)
* Set up the Babel build environment (https://babeljs.io/)
* Structure in ES6 build by Babel
* Configures production environment using Docker and Docker-compose
* Configuration control via dotenv (https://www.npmjs.com/package/dotenv)

### Instalation

To install the bootstrap we recommend using the CLI

```bash
$ npm i -g @dek/cli
$ dek init
```

After a brief fill of project information select the option "Do you want to use DEK skeleton?"

### Devmode

```bash
$ npm run dev
```

### Build

To build the ES6 files in the standard compatible with the NodeJS for production

```bash
$ npm run build
```

### Production

To create a project production container, execute the following commands:

```bash
$ docker-compose build
$ docker-compose up -d
```
