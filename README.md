# PG6301-WebutviklingOgAPI-Design

This repository was created to have all lectures notes
and tasks on a single place, using branches to separate
Tasks and lectures from each other.

# Movie database
## Tour of the course #L01

* [ ] say hello to react - Parcel generates React App from jsx.
* [ ] Routing request in React - navigate.
* [ ] List existing movies.
* [ ] Add new movies using forms and state.
* [ ] Encapsulate movie database.
* [ ] Express app
* [ ] Move API to server.
* [ ] Deploy to Heroku.


# Setting up a project with npm.
* Connect IDE to new repository.
    * git init

* Execute commands (Terminal):
    * npm init -y
    * npm install parcel
    * npm install react react-dom react-router-dom
    * * npm intall rimraf
    * * * npm install jest (testing)

* create scripts (package.json)
    * "dev" : "parcel index.html"
    * * "clean" : "rimraf dist .parcel-cache"
    * * * "test" : "jest"

* Add files to gitignore
    * parcel-cache
    * .idea
    * node_modules

* imports in index.jsx:
    * react
    * react-dom
    * react-router-dom