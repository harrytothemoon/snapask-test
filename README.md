### Pomodor Layout

You can visit the webpage [here](https://harry.github.io/snapask-test/).

![Imgur](https://i.imgur.com/z7lgoJi.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and follow the [design layout](https://xd.adobe.com/spec/6580ddf6-aa24-4706-5622-c26ee7975161-13b1/screen/87717a9a-9896-440b-b4d5-4d4b954c83e4/specs/) created by [Miss_Y](https://challenge.thef2e.com/user/3115?schedule=2762#works-2762)

---

## Layout Idea

- Divided the content into three main parts: todolist, counter and navbar.
- Layout techniques: flex and positioning.
- Font style: The font-style of the design layout is replaced by the 'bitter' font-style(from google font).
- Image source: PNG files provided by the website and hand-drawn SVG files.
- Use CSS custom properties (variables) to manage frequently used colors.
- Import normalize.css: provides better cross-browser consistency in the default styling of HTML elements.
- Cross-browser: Considering that FireFox does not support the pseudo elements of input tag (on going).

## Key Features

#### Timer

- The timer has play, pause and cancel function.
- The default value is 25 mins, and the user can also customize settings.

#### Todolist (divided into to-do area and completion area)

##### To-do area(Up to five to-do items):

- User can choose the next item to be done, otherwise the default is the first item.
- User can manually complete things by clicking.
- User can add to-do items through "enter" or click the "+" button.

##### Completion area:

- Sort in descending order by completion time.
- Click More to view all completed items.

#### Future (Depends on product requirements)

- Todolist can add delete and edit functions.
- The limit on the number of to-do items can be updated.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
