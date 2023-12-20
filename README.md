# Restaurant Page Demo - The Odin Project

A simple example of a restaurant page built completely with DOM manipulation in Javascript. Bundled with webpack. Built for the Odin Project.

[Live Link](https://antonharbers.github.io/Restaurant-Page-Demo/)

![Repo Image](/repoImage.png)

## DIY

If you would like to run this app locally or play around wit the code, feel free to clone this repo and run the following command in your terminal:

CMD:

```
    npm run watch
```

Make sure to have node and the needed dependencies installed.

When you now run the index.html file in the dist directory the app will start.

## Folder Structure

```
    /.git
    /dist               -> Webpack destination folder for the bundled code
        index.html          -> Entry Point
        main.js             -> Webpack bundled code
        ...                 -> Images used in the the app and favicon
    /node_modules
    /src                -> Contains the raw image files, css stylesheets and pre bundled js files
    .gitignore
    LICENSE             -> MIT LICENSE
    package-lock.json
    package.json
    README.md
    webpack.config.js   -> Webpack config file
```

## Key Concepts

### Webpack in General

Webpack is a powerful module bundler for JavaScript applications, capable of transforming, bundling, or packaging just about any resource or asset.

In this restaurant landing page project, Webpack plays a crucial role in bundling various JavaScript files, CSS, and assets into a single, optimized file. This streamlined bundling process improves load times and overall performance.

JS:

```
    module.exports = {
        entry: './src/index.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
        },
        // Additional configurations...
    };
```

Here, the Webpack configuration specifies the entry point and output for the bundled files.

Using Webpack enhances the scalability and maintainability of JavaScript applications, especially when they grow in complexity.

### Webpack Watch Flag

The Webpack watch flag (--watch) automatically rebuilds the bundle when files are changed. This is extremely useful during development.

In this project, the watch flag is set up in package.json to streamline development. Changes in the codebase are immediately reflected without manual rebuilds, speeding up the development process.

JSON:

```
    "scripts": {
        "watch": "webpack --watch"
    }
```

This script in package.json makes it easy to start Webpack in watch mode.

The watch flag is an indispensable tool for developers, fostering a more efficient and responsive coding workflow.

### DOM Manipulation

DOM Manipulation involves dynamically changing the structure, style, or content of a web page using JavaScript.

This project leverages DOM Manipulation to render and update the content of the restaurant page dynamically. Elements like buttons, images, and forms are created and manipulated in JavaScript, allowing for interactive and dynamic web pages.

JS:

```
    const ClearPage = () => {
        content.innerHTML = '';
    };
```

This function, ClearPage, demonstrates DOM manipulation by clearing the content of a page.

DOM Manipulation is fundamental in creating interactive web applications, allowing developers to create more engaging user experiences.

### Helper Functions

Helper functions are reusable pieces of code that perform common tasks in a program, making the codebase more efficient and readable.

In this project, helper functions like CreateDiv, CreateButton, and AppendChildrenToElement in helpers.js are used extensively to simplify the process of creating and managing DOM elements.

JS:

```
    function CreateButton(className, textContent, onClick = () => {}){
        const button = document.createElement('button');
        button.classList.add(className);
        button.textContent = textContent;
        button.addEventListener('click', onClick);
        return button;
    }
```

This CreateButton function is an example of a helper function used to create a button element. Utilizing helper functions is a best practice in programming, as it promotes code reuse, reduces complexity, and enhances readability.

## Final Notes

This project has been an enriching journey, blending the practicalities of Webpack for efficient asset bundling with the dynamic nature of DOM manipulation to create an interactive restaurant landing page. Mastering these concepts is not just about completing a project; it's about acquiring skills that are essential in modern web development. The application of these techniques extends far beyond this project, playing a crucial role in building scalable, maintainable, and responsive web applications. From small business websites to complex web applications, the lessons learned here lay a foundation for crafting digital experiences that are both functional and engaging. This project is a testament to the power of combining theoretical knowledge with practical implementation, leading to real-world applications that drive the digital world forward.
