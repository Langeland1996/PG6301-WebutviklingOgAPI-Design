# PG6301-WebutviklingOgAPI-Design

This repository was created to have all lectures notes
and tasks on a single place, using branches to separate
Tasks and lectures from each other.

# Movie database
## Tour of the course #L01

* [x] say hello to react - Parcel generates React App from jsx.
* [x] Routing request in React - navigate.
* [x] List existing movies.
* [x] Add new movies using forms and state.
* [x] Encapsulate movie database.
* [x] Express app
* [x] Move API to server.
* [ ] Deploy to Heroku.

## Lecture Walkthrough
* [x] Lecture 01.
* [ ] Lecture 02.
* [ ] Lecture 03.
* [ ] Lecture 04.
* [ ] Lecture 05.
* [ ] Lecture 06.
* [ ] Lecture 07.
* [ ] Lecture 08.
* [ ] Lecture 09.
* [ ] Lecture 10.
* [ ] Lecture 11.
* [ ] Lecture 11.
* [ ] Lecture 12.



# Setting up a project with npm.
* Connect IDE to new repository.
    * git init

* Execute commands (Terminal):
    * npm init -y
    * npm install --save-dev parcel
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