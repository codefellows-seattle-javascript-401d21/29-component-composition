# General information
_Author_: Jeremy Pearson

_Version_: 1.0.0

_Libraries_: 
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-plugin-transform-object-rest-spread": "^6.26.0",
    "babel-preset-env": "^1.6.1",
    "babel-preset-react": "^6.24.1",
    "cowsay": "^1.2.1",
    "css-loader": "^0.28.9",
    "enzyme": "^3.3.0",
    "enzyme-adapter-react-16": "^1.1.1",
    "eslint-plugin-react": "^7.7.0",
    "extract-text-webpack-plugin": "^3.0.2",
    "faker": "^4.1.0",
    "html-webpack-plugin": "^2.30.1",
    "jest": "^22.4.0",
    "node-sass": "^4.7.2",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-router-dom": "^4.2.2",
    "resolve-url-loader": "^2.2.1",
    "sass-loader": "^6.0.6",
    "superagent": "^3.8.2",
    "uuid": "^3.2.1",
    "webpack": "^3.11.0",
    "webpack-dev-server": "^2.11.1"

_Last modified_: 2/22/2018

# App use

Install all needed dependencies

use 'npm run watch' to launch a hot server

use specified routes to add, remove and update notes.

## Routes

            <Route exact path='/' component={Landing}/>
            
            <Route exact path='/dashboard' component={Dashboard}/>

# Lab Readme (SPECS)

29: Component Composition
Submission Instructions
Work in a fork of this repository
Work in a branch on your fork
Write all of your code in a directory named lab- + <your name> e.g. lab-duncan
Submit a pull request to this repository
Submit a link to your pull request on canvas
Submit a question, observation, and how long you spent on canvas
Learning Objectives
Students will learn about composition vs inheritance
Students will learn to compose react components using props
Requirements
Feature Tasks
Refactor and add the following components

NoteUpdateForm
Create a NoteUpdateForm component that inherits a note through props and onSubmit is able to update the App's state with an updated note.

Refactor the NoteItem to have the following behavior
If the user double clicks on the notes content it should switch to the Edit View

Default view
Display the notes content and a delete button
Display a delete button that will remove the Note from the application's state
Edit View
Show the NoteUpdateForm and a Cancel Button
onSubmit or click of the cancel button in NoteUpdateForm it should switch back to the default view
App Component Tree
Your components should be nested in the following layout

App
  Landing
  Dashboard
   NoteCreateForm
   NoteList
     NoteItem
       NoteUpdateForm
Test
Test NoteCreateForm
Test your onChange handler
Test your onSubmit handler
Test NoteItem
Test the NoteItem's ability to remove a note from the App's state
Test NoteUpdateForm
Test the NoteUpdatesForm's ability to update a note in the App's state
Documentation
Write a description of the project in your README.md