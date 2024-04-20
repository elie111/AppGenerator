<h1 align="center">Final Project: App Generator </h1>
 <h1 align="center">Supervisor: Roi Poranne</h1>
  <h1 align="center">Student: Elie Haddad</h3>
 
 
 ## Material and Tools:
 * [App generators guide](https://www.youtube.com/@wearenocode)
 * [React Udemy Course](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595350?start=0#overview)
 * [Figma tutorial](https://www.youtube.com/watch?v=VRf8cyeuxoo)
 * [Figma tutorial](https://www.youtube.com/watch?v=JGLfyTDgfDc)

 ## To run the app generator:
 1) Clone project: git clone https://github.com/elie111/JenkinsHW.git
 2) Go to script direcotry: cd path-to-FinalProject/FinalProject
 3) run the pytohn script: python AppGenerator/main.py
 4) After the new app has been created go to the new react app directory: cd path-to-FinalProject/FinalProject/myGeneratedReactApp
 5) run the app: npm start
 
 ## Timeline
 * **12/3 - 20/3:** 
Started working on the Project and did some research on App Generators, [here is a summary](AppBuilders.md).\
**Hours worked: 4h**
 * **25/3 - 26/3:** 
Started implementing the app generator, a script that receives a json file that has description of each component we want to add, and then generated an angular components with those components, for now we only can read the json app and generate the angular app,next step is to create pre define components like buttons and add them based on the json file rules.\
**Hours worked: 2h**
 * **27/3:** 
Successfully added the first element dynamically based on the json File. Added all the needed pre-built components to the base project, and then we clone it and add to the main html page the components that are in the components array in the json file.\
**Hours worked: 3h**
* **28/3:** 
Successfully positioned elements based on the json values and not just using a pre-defined values.Modified the json file format. And started working on the design, only thing missing is adding the class name to the relevant component.\
**Hours worked: 3h**
* **1/4:** 
Added the styles to the relevant elements, added 2 more built-in components, and started working on the logic, if clicked on button then we change the chosen component style, changed the JSON file.\
**Hours worked: 3h**
* **2/4:** 
Started working on routing to move between screens.\
**Hours worked: 1h**
* **3/4:** 
Fixed few styling issues, and Created first version of the app with basic elements positioning and styling for my Demo inside the vesrion_1 branch, and worked on trying to solve the routing problem.\
**Hours worked: 2h**
* **4/4 - 7.4:** 
Had a meeting with my Supervisor Roi and discussed my progress and points to Improve. Also started doing research on other frontend frameworks that I can use insteaad of Angular to learn something new, my 2 candidates are Flutter and React.\
**Hours worked: 2h**
* **8.4 - 14.4:**
Decided I will switch to React since it is more suitable to my project since we can easily create mini components and position elements via css, even though it's also possible in flutter it's going to be much more challenging and take more time to do basic things. 
Bought a new [React Udemy Course](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595350?start=0#overview) and watched the first 6 section that cover the basics of react such as how to create reusable components, and how to style them and more, I also watched the summary section at the end of the course to be learn a little bit about the more complex parts of React to see if they might help without deep diving into them.\
**Hours worked: 18h**
* **15.4:**
Started Migrating my project from Angular to React, and started working on creating basic components such as buttons and sections.\
**Hours worked: 4h**
* **16.4:**
Planned the way I need to implement the structute of the App. in react it's easy to pass objects to child components via prop, so I need to pass the styles as an object and the logic as functions.\
I started implementing that logic in the Base App and started migrating the script from Angular to React.\
**Hours worked: 4h**
* **17.4:**
Finished building the Base App which now works in the three important aspects:\
1) we can add any built in component by simple creating the array that has all the components.
2) we can add the styling to every element, by simply adding the styles from the Json Object to the element tag, and the props in React will do the rest
3) we can add function to any element via the props as well
Also was able to implement the switching between pages logic using the useState from the React library
And successfully added functionality to buttons\
**Hours worked: 4h**
* **18.4:**
Given any JSON object with any of the built in components and styles and basic logic, the app generator can create a fully functional React app.\
Finished first stage of the project, we can build apps using the button and section components and define multiple screens, and style each component, and use basic onclick functionality.\
The next step is to add the required pre built componets, so that we can build our app: Navigation bar, menu, search bar, image buttons..
Also restructured the project file to be more comprehensible.
**Hours worked: 4h**
* **19.4:**
To be able to understand what components I need to add and how to continue I needed to have a basic design of the App the I am hoping to build by the end of this project, so I watched few Figma tutorial which is a tool to design apps, [Basic scheduling App Built Via Figma](https://www.figma.com/file/1ObCyFnAhEclOQ1NWssom8/Untitled?type=design&node-id=0%3A1&mode=dev&t=e8lM78poTQrd88JO-1)\
I started working on the list of components that I need to add: header, ticker, side navigation bar, search bar, cards, images, image buttons,and  supporting nested components\
I added images, image buttons, and headers, headers are the top part of the app that has the profile picture, app name / page name and buttons, right now we have static ammount of buttons with specific functionality but will later add a feature to let the user pick which of the buttons to use and which to hide.\
Also modified the JSON object to include all of the components we have so far: section, button, image, image button, header. The app has 2 pages that we can switch between by clicking on the profile picture in the header.\
Started working on the next component which is the side navigation bar.\
[Figma Design](https://www.figma.com/file/1ObCyFnAhEclOQ1NWssom8/Untitled?type=design&node-id=0%3A1&mode=dev&t=e8lM78poTQrd88JO-1)\
[Results 1](Progress-Images/page-1.png)\
[Results 2](Progress-Images/page-2.png)\
**Hours worked: 8h**

    
**Total ammount of hours spent on the project: 62h**
