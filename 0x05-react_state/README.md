# State
0. Adding a local state for notifications
Using the previous project (0x05. React inline styling), we have modularized our React application without worrying about interactions and state, which is usually a recommended process of development. Now, our application is in a good place to start adding logic and state.

Modify the App component in task_0/dashboard/src/App.App.js:

Create a local state to store a displayDrawer element:

Define the default state for the state in the constructor of the Class
Create a function named handleDisplayDrawer that will change the value of displayDrawer to true
Create a function named handleHideDrawer that will change the value of displayDrawer to false
Modify the Notifications import in task_0/dashboard/src/App/App.js:

Pass to the component the prop displayDrawer using the local state
Pass the new functions handleDisplayDrawer and handleHideDrawer
Modify the App test suite in task_0/dashboard/src/App/App.test.js:

Add a test to verify that the default state for displayDrawer is false. Verify that after calling handleDisplayDrawer, the state should now be true
Add a test to verify that after calling handleHideDrawer, the state is updated to be false
Modify the Notifications component in task_0/dashboard/src/Notifications/Notifications.js:

Define the propTypes and the defaultProps for the new props
When clicking on Your notifications, call handleDisplayDrawer
When clicking on the close button, call handleHideDrawer
At this point, after reloading the app, you should be able to show / hide the notifications panel

Modify the Notifications test suite in task_0/dashboard/src/Notifications/Notifications.test.js:

Add a test to verify that clicking on the menu item calls handleDisplayDrawer
Add a test to verify that clicking on the button calls handleHideDrawer
Tips:

Remember that you implemented shouldComponentUpdate. You will need to modify the logic to allow the component to rerender when the prop displayDrawer changes
Use setState and instance when creating tests with Enzyme
Remember to use spies to verify if a function is being called. You can pass a spy as a property
Requirements:

Do not forget to bind the functions you are passing to the children to improve performances
When running, there should not be any lint error in the console.
