<h1 align="center">Final Project: App Generator </h1>
 <h1 align="center">Supervisor: Roi Poranne</h1>
  <h1 align="center">Student: Elie Haddad</h3>
 
 
 ## Material and Tools:
 * [App generators guide](https://www.youtube.com/@wearenocode)
 * [React Udemy Course](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595350?start=0#overview)
 * [Python Udemy Course](https://www.udemy.com/course/the-python-programming-v39-comprehensive-bootcamp/learn/lecture/22753277?start=0#overview)
 * [Figma tutorial](https://www.youtube.com/watch?v=VRf8cyeuxoo)
 * [Figma tutorial](https://www.youtube.com/watch?v=JGLfyTDgfDc)
 * [Firebase docs](https://firebase.google.com/docs/firestore/quickstart)
 * [Firebase docs](https://firebase.google.com/docs/web/setup)
 * [Firebase section React course](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/41053882#overview)
 * [Firestore database](https://firebase.google.com/docs/firestore/manage-data/add-data#before_you_begin)
 * [JSON Schema validation tool](https://www.liquid-technologies.com/online-json-schema-validator)
 * [icons](https://www.flaticon.com/)
 * [FireStore conditional logic](https://firebase.google.com/docs/firestore/query-data/queries#limitations_3)

 ## To run the app generator:
 1) Clone project: git clone https://github.com/elie111/JenkinsHW.git
 2) Go to script direcotry: cd path-to-FinalProject/FinalProject
 3) run the pytohn script: python AppGenerator/main.py
 4) After the new app has been created go to the new react app directory: cd path-to-FinalProject/FinalProject/myGeneratedReactApp
 5) run the app: npm start
 
 ## Timeline
 * **12/3 - 20/3:** \
Started working on the Project and did some research on App Generators, [here is a summary](AppBuilders.md).\
**Hours worked: 4h**

 * **25/3 - 26/3:** \
Started implementing the app generator, a script that receives a json file that has description of each component we want to add, and then generated an angular components with those components, for now we only can read the json app and generate the angular app,next step is to create pre define components like buttons and add them based on the json file rules.\
**Hours worked: 2h**

 * **27/3:** \
Successfully added the first element dynamically based on the json File. Added all the needed pre-built components to the base project, and then we clone it and add to the main html page the components that are in the components array in the json file.\
**Hours worked: 3h**

* **28/3:** \
Successfully positioned elements based on the json values and not just using a pre-defined values.Modified the json file format. And started working on the design, only thing missing is adding the class name to the relevant component.\
**Hours worked: 3h**

* **1/4:** \
Added the styles to the relevant elements, added 2 more built-in components, and started working on the logic, if clicked on button then we change the chosen component style, changed the JSON file.\
**Hours worked: 3h**

* **2/4:** \
Started working on routing to move between screens.\
**Hours worked: 1h**

* **3/4:** \
Fixed few styling issues, and Created first version of the app with basic elements positioning and styling for my Demo inside the vesrion_1 branch, and worked on trying to solve the routing problem.\
**Hours worked: 2h**

* **4/4 - 7.4:** \
Had a meeting with my Supervisor Roi and discussed my progress and points to Improve. Also started doing research on other frontend frameworks that I can use insteaad of Angular to learn something new, my 2 candidates are Flutter and React.\
**Hours worked: 2h**

* **8.4 - 14.4:**\
Decided I will switch to React since it is more suitable to my project since we can easily create mini components and position elements via css, even though it's also possible in flutter it's going to be much more challenging and take more time to do basic things. 
Bought a new [React Udemy Course](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595350?start=0#overview) and watched the first 6 section that cover the basics of react such as how to create reusable components, and how to style them and more, I also watched the summary section at the end of the course to be learn a little bit about the more complex parts of React to see if they might help without deep diving into them.\
**Hours worked: 18h**

* **15.4:**\
Started Migrating my project from Angular to React, and started working on creating basic components such as buttons and sections.\
**Hours worked: 4h**

* **16.4:**\
Planned the way I need to implement the structute of the App. in react it's easy to pass objects to child components via prop, so I need to pass the styles as an object and the logic as functions.\
I started implementing that logic in the Base App and started migrating the script from Angular to React.\
**Hours worked: 4h**

* **17.4:**\
Finished building the Base App which now works in the three important aspects:\
1) we can add any built in component by simple creating the array that has all the components.
2) we can add the styling to every element, by simply adding the styles from the Json Object to the element tag, and the props in React will do the rest
3) we can add function to any element via the props as well
Also was able to implement the switching between pages logic using the useState from the React library
And successfully added functionality to buttons\
**Hours worked: 4h**

* **18.4:**\
Given any JSON object with any of the built in components and styles and basic logic, the app generator can create a fully functional React app.\
Finished first stage of the project, we can build apps using the button and section components and define multiple screens, and style each component, and use basic onclick functionality.\
The next step is to add the required pre built componets, so that we can build our app: sidebar, menu, search bar, image buttons..
Also restructured the project file to be more comprehensible.\
**Hours worked: 4h**

* **19.4:**\
To be able to understand what components I need to add and how to continue I needed to have a basic design of the App the I am hoping to build by the end of this project, so I watched few Figma tutorial which is a tool to design apps, [Basic scheduling App Built Via Figma](https://www.figma.com/file/1ObCyFnAhEclOQ1NWssom8/Untitled?type=design&node-id=0%3A1&mode=dev&t=e8lM78poTQrd88JO-1)\
I started working on the list of components that I need to add: header, ticker, sidebar, search bar, cards, images, image buttons,and  supporting nested components\
I added images, image buttons, and headers, headers are the top part of the app that has the profile picture, app name / page name and buttons, right now we have static ammount of buttons with specific functionality but will later add a feature to let the user pick which of the buttons to use and which to hide.\
Also modified the JSON object to include all of the components we have so far: section, button, image, image button, header. The app has 2 pages that we can switch between by clicking on the profile picture in the header.\
Started working on the next component which is the sidebar.\
[Figma Design](https://www.figma.com/file/1ObCyFnAhEclOQ1NWssom8/Untitled?type=design&node-id=0%3A1&mode=dev&t=e8lM78poTQrd88JO-1)\
[Results 1](Progress-Images/page-1.png)\
[Results 2](Progress-Images/page-2.png)\
**Hours worked: 8h**

* **20.4:**\
I reached a point in the project where I am struggling a little bit with React, like in the sidebar, I am not sure for example how to add the button when the sidebar is closed, so I watched few more deep dive sections in React mainly focused on React hooks such as useState and useEffect,  and also found a python Udemy course and watched few important sections.
 * [React Udemy Course](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595350?start=0#overview)
 * [Python Udemy Course](https://www.udemy.com/course/the-python-programming-v39-comprehensive-bootcamp/learn/lecture/22753277?start=0#overview)
**Hours worked: 5h**

* **21.4:**\
Added a very important feature, nested components, it will allow us to divide the app to different section within section and since our header and sidebar and card components are going to be limited (the structure predefined) nested components will allow the user with some extra effort to build their own header and sidebar, by using buttons and images and sections and texts. Also made almost Final JSON adjustments to pass logic via parameters more easily, only thing left to modify is probably the pages structure.\\
And also continue working on the built in components, some of the issues I tried to solve: how will a button function? what is his role? and how to customize our headers and sidebar components.\
**Hours worked: 5h**

* **22.4:**\
Figured out a very efficient way of adding functionality to each component, which will make it much easier and smoother to add in the future other components, all components have styles, page number and nested children, but then they start to differ, each component requires different parameters, so I made Final changes to the JSON file, where we have params that allow us to send different params depending on the component. \
Successfully sdded the sidebar and it's now functional, only thing left is to be able to connect it to a button that can control it when it's closed and to add functionality to the sidebar buttons. Spent a lot of time debugging a react issue, when passing the setState function I got an error that it's not a function if I am passing it to more than one component. Also made plans on how to move on when it comes to styling (responsivness and nested components styles). And most importantly figured out what my approach with the buttons is going to be, buttons are basically a way to send a signal/flag to another component telling it to do something, so I also added to the button element: targetId (which component do we want to target), action (some components will have more than one action), actionInfo (more metadata about the action).\
Started thinking on how I can achieve such a thing (probably observeable pattern).\
**Hours worked: 9h**

* **23.4:**\
Implemented the observeabvle pattern that allows us to use buttons as "flaggers", each time we click a button we send a signal with 3 parameters (describer previously how it works), to do that I used the useEffect hook from React and the React context for state management to track each click. And now it's much easier and smoother to define functionality for nested buttons such as buttons inside the header or the sidebar.\
Finished working and optimizing all the components I have added so far: Button, ImageButton, Text, Header, SideBar, Section, page switching.\
Also added documentation for what a json file should be like, still in progress, it describes what each component needs to have as parameters.\
Started working on the final list of components that will allow us to fully build our scheduling app that I designed in Figma: Cards, scrollable section and login and sign up pages.\
[Here is a picture of the results after adding the sidebar and header](Progress-Images/header-and-sidebar.png)

**Hours worked: 9h**

* **24.4:**\
Finished adding all built in components that we need to build my Figma design, and now technically we are 100% able to build such an app, I added a form component, which the user can decide how many input fields they want and what type and what role (login, signup, maybe will add more later), added a card component and a dropdown menu component, Also made changes to Json file making it even better and enhancing params logic.\
Created an app with 4 pages that we switch between them via sidebar, header buttons, regular buttons, login button.., and used all of the built in components, here are few images to show our progress:\
 * [Image 1](Progress-Images/Image-1.png)
 * [Image 2](Progress-Images/Image-2.png)
 * [Image 3](Progress-Images/Image-3.png)
 * [Image 4](Progress-Images/Image-4.png)
 * [Image 5](Progress-Images/Image-5.png)

 And started planning integrating Firebase to the App, started doing some research on how to use Firebase with React.

**Hours worked: 10h**

* **25.4:**\
Started integrating Firebase in the project, started with few Firebase tutorials and created a Firebase account and a new Firebase project, then added to the JSON file a Firebase configuration section, and modified the script to dynamically connect the React app to the Firebase project, also planned what we need from Firebase and how can we use it in our app.
1) we will use Firebase auth for user authentication (loggin in, signing up)
2) we wil use Firestore to store and fetch data (list of students, lessons ...)
3) will eventually create few Firebase components, for example, a component that reads a list of items from the database and creates a certain component/s for the length of the list
I implemented the auth feature, and now we can login, sign up, log out from the app. by simply giving a button the role of login/sign in/ sign up and giving it a form as a target so it will know where to find the email and password (possibly in the future will add password requrement like min number of charachters ...)\
Also started thinking of how I will use Firestore and started creating a demo database.\
here are few images showing our list of users and the process of logging in.\
 * [Firebase 1](Progress-Images/Firebase-1.png)
 * [Firebase 2](Progress-Images/Firebase-2.png)
 * [Firebase 3](Progress-Images/Firebase-3.png)

**Hours worked: 10h**

* **26.4:**\
Integrated Firestore database in the project, and implemented all the needed function to upload, update, remove and get data from the firestore.\
Also added JSON schema to validate the JSON object structure and make sure we have the required data.\
Created 3 new componets, horizentalLayout, verticalLayout and dynamic Layout which allows us to choose how we display our components and moves all the complex css rules to the components built in styling and this way the user only has to define the basic styles such as colors, background colors, fonts, margins which a non technical person can easily do.\
And now that I have the neccessary infrastructure, started working on the last thing that is left to do which is to define the final params list, and buttons actions list and we will have a fully functional App Gnerator, need to add in the params list to each value a path to firestore field to be able to update and fetch data, and create new button actions like update data and get data.

**Hours worked: 10h**

* **27.4:**\
Improved JSON schema to make cleared what we need to recieve, also started creating other more complex apps, and created a params class for each component since it's different for each componet and this way will make sure we send the right type and params, and now we check for each value (text, image source) whether it's hardcoded or if it's bonded with a firebase field and display it accordingly. Also added a new component edit text, which will make it easier to update a text value such as student name, meeting location, date.., before we had to create a form and associate a field with the needed firebase cell. Also started checking small missed problems, like before we didn't change the title of the app so added it to the jsx generator. Also added the ability to use imagebuttons in header and sidebar and not just buttons, also started working on adding the ability to use other types of input fields in forms like checkbox.

**Hours worked: 10h**

* **28.4:**\
In progress\

**Hours worked: ~**\

**Total ammount of hours spent on the project: 130h**
