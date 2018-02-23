
# LAB 28: Routing and Testing


### Installing and How to use.

To install this program, place fork and 'git clone' this repo to your computer. From the terminal, navigate to  `lab-heath`. once there, install NPM but typing in , `nmp install` and after that, you will neex to install all the dependencies. do this by typing in `npm i`. 

next you need to have these scripts adjusted in your package.json file.

```javascript
"scripts": {
    "test": "jest",
    "watch": "webpack-dev-server --inline --hot"
  },
  ```

from there, you can go to your terminal and type, 

```javascript
node run build
```
this will build out a it builds the app by packaging it all up into a simple file for us to use later on.

to get a preview of your app. you need to run this command also.

```javascript
node run watch
```
once you have done that. you can go to your localhost:8080 and see your project in the browser.

## How to use

you have 2 input boxes that will take in a strings. this is a `title` and a `content`. you will have a button below that will submit the data into the app that will return an list item that will have the title, data made, and content.

under all of them will have a button that will let you delete just that one item.

## tests

we test just to see if the this.state objects properties are what we want them to be.

we are testing the dashboard which will hold all of our notes.
```javascript
describe('Dashboard', () => {
  test('Testing initial state', () => {
    let mountedDashboard = Enzyme.mount(<Dashboard />);
    expect(mountedDashboard.state('notes')).toEqual([]);
  });
});
```

we are testing the NoteCreateForm and making sure we have the needed items on the this.state object.
```javascript
describe('NoteCreateForm', () => {
  test('Testing initial state', () => {
    let mountedNoteCreateForm = Enzyme.mount(<NoteCreateForm />);
    expect(mountedNoteCreateForm.state('completed')).toEqual(false);
    expect(mountedNoteCreateForm.state('content')).toEqual('');
    expect(mountedNoteCreateForm.state('title')).toEqual('');
  });
});
```