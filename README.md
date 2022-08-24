# Devtoolbox 
devToolBox is an open-source project that compiles the top free tools for web development, web design and coding in general, to enable quick and easy access to all the tools you need to create your next dream project!
# Clone the repository
In the project directory, run:
### `git clone https://github.com/Ayblue004/devtoolbox.git `
### `npm install`
### `npm start`
# Contribute
To contribute or add tools go to:
### `src/Tool.jsx`
Run the `checkDuplicate('Name of tool you want to add)` function to ensure that you aren't adding a tool that has already been added.

If you don't receive an alert saying "Sorry, this tool already exists", proceed by adding an object consiting of :

### `{`
 ` name:"Name of the tool", `
  
 ` description:"Breif description of what the tool does",`
  
 ` image:"Name-of-tool.png",`
  
 ` link:"Home page of the tool",`
  
 ` search:"Key-words describing the tool E.g(Code editor,background remover e.t.c)"`
  
`}`

To the bottom of the Tools array in `src/Tool.jsx`

Finally, add a .png logo of the tool you want to add to the `src/assets` folder (Preferred image size 310x290). Ensure that the name of the .png(image) file matches the `image` property in the object you created. 
