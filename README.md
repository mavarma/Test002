# NoteApp

Description: 
------------ 

It is a demo application to demonstrate the Basic Notes application, which is built on Windows machine, having the main CRUD operations as per the User requirements.

Environment:
-----------

Windows 10, Html, Typescript, CSS, Bootstrap, Angular 8, Typicode json-server, RESTful Web Service calls, Visual Studio Code, GitHub

How to run:
-----------

1. Install Node.js(latest is preferred like version 12+)
2. Install angular cli(npm install -g @angular/cli)
3. Clone the project code into your desired folder, using: git clone
4. Go to the required project root folder, enter the command in Node.js command prompt: npm install
5. Install json-server for data management: npm isntall -g json-server
6. Run the mock database: json-server -watch database.json
7. Run the application: ng serve
8. After successful 100% compilation, hit the url in the browser: http://localhost:4200 


Feauteres:
----------

1. On navigating: http://localhost:4200  ---> It falls under a home page having Open/Close toggle/button

2. On clicking of toggle/button of "Open" ----> It opens the Left side panel, having a Folders/Notes List name or link

3. On clicking of "Folders List/Notes List" ----> It displays the existing notes list, which grabs from the database.json file, it shows on middle panel

4. This middle panel, it shows the available Notes list, Where the User can do various operations like: a. can add a note list

      b. can edit/update a note list

      c. can delete a note list

      d. can do the Search the required notes

      e. User can see the background effect(color:gray) for his/her for a particular selected row so that User can understand that the selected row easily to see the proper description 

      f. default, we are showing some limited description for a note in the middle panel, If the User wants to see the full description, then he/she has to select his desired row, then it's entire data will be displayed in right mose panel

      g. All these note/note titles are shown in alphabetical order


