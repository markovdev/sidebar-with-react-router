# Welcome 🙋‍♂️

This is a simple sidebar component built with React, Vite and JavaScript. It has a responsive sidebar that is hidden on small screens and can be opened by clicking on the button in the top left corner. The sidebar contains links to the different pages on the website.

To run the website, clone the repository and install the dependencies by running the following command in the terminal:

```
npm install
```

Once the dependencies have been installed, you can run the website by running the following command in the terminal:

```
npm run dev
```

The website will be served on port 3000. You can open the website in your browser by navigating to http://localhost:3000.

The code for the website is divided into three files:

- `App.jsx`: This file contains the main component for the website. It renders the sidebar and the content of the page.
- `Sidebar.jsx`: This file contains the component for the sidebar. It renders the list of links and the button to open and close the sidebar.
- `Logo.svg`: This file contains the SVG logo for the website.

The sidebar is implemented using the following HTML elements:

- `div`: This element is used to create the main container for the sidebar.
- `ul`: This element is used to create the list of links.
- `li`: This element is used to create each link in the list.
- `span`: This element is used to create the icon for each link.

The sidebar is opened and closed using the following CSS properties:

- `transform`: This property is used to move the sidebar to the left or right.
- `transition`: This property is used to animate the movement of the sidebar.

The sidebar is responsive and is hidden on small screens. The following media queries are used to control the visibility of the sidebar:

- `@media only screen and (max-width: 62.5em)`: This media query hides the sidebar on screens that are smaller than 62.5em wide.
- `@media only screen and (max-width: 50em)`: This media query changes the layout of the sidebar on screens that are smaller than 50em wide.

The website is built using React, Vite and JavaScript. React is a JavaScript library for building user interfaces. Vite is a build
