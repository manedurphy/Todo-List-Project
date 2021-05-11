# Beginner's Todo List in HTML, CSS, and Vanilla JavaScript

This is a todo list that I made when I was first learning how to code and about Web Development. I followed the logic from this course [here](https://www.youtube.com/watch?v=Ttf3CEsEwMQ&t=2042s).

Features:
1. Input for a todo item.
2. One add button.
3. Dropdown menu that filters between "All", "Complete", and "Incomplete" tasks.
4. Green checkbox button to complete a task.
5. Trash button to remove an item

I have also setup an express server to serve the static files in the `public` directory, as well as a variety of script in `package.json` to run this project locally

## Run locally with node and npm
```bash
# Install dependencies
npm install

# Run with nodemon
npm run start:dev

# Run with node
npm start
```

Note: If you run the `start:dev` script, you will start the server with the `nodemon` dependency which is set to watch for changes in the public directory. This means you can work and see your changes immediately. Learn more on their GitHub repository [here](https://github.com/remy/nodemon).

## Run locally with Docker
```bash
# Run with nodemon
npm run docker:dev

# Run with node
npm run docker
```

With the `docker:dev` script, I have setup a bind mount from the working directory on your machine to the working directory of the container. This is so `nodemon` can detect your changes and restart the server. You can see the full Docker commands in `package.json`.


## Challenge

If you'd like to build on top of this project for practice, try adding a feature. My recommendation is to figure out a way to persist the data so that the todo items are still there after a page reload. Have fun!