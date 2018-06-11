# "Let's Build A Gutenberg Block" at WordCamp EU, 2018!

This Github project will provide the reference files and roadmap for our workshop today. Each portion will be introduced with a short lecture followed by an exercise. The schedule is as follows:

### Prerequisites:

Please have the following prepared for the workshop:

* Local install of WordPress
* Up to date install of the Gutenberg plugin
* Node version 8+, npm version 5.3+
* A text editor such as Sublime, VSCode, or Atom

### Part 0: Introductions

1. Find a pair programming partner 
2. In your pair, introduce yourself:
  * Name
  * Your experience with WordPress
  * A frustrating moment in development

### Part 1: What _is_ Gutenberg? (10 mins)

- [ ] Create a few blocks in Gutenberg (one of them should be a paragraph block). 
  - [ ] Adjust some settings for the paragraph block in the sidebar.
- [ ] View the block from the frontend and see where the styles are coming from using the Devtools Inspector (right click on the element, Inspect Element).
- [ ] Deactivate the Gutenberg plugin.
- [ ] Reload the WYSIWYG editor and make note of the comments surrounding blocks. 
- [ ] Reload the frontend and make note of any styling differences.
- [ ] Reactivate Gutenberg and see blocks re-appear.

### Part 2: Scaffold a block with `create-guten-block` (10 mins)

1. Open the terminal (On Mac: Applications > Utilities > Terminal).
2. Type `node -v` and hit Enter. 
  * If you get a response of `v8.0.0` or greater, proceed to step 3. Otherwise, skip this step.
2. Type `npm -v` and hit Enter. 
  * If you get a response of `v5.3.0` or greater, proceed to step 3. Otherwise, skip this step.
3. `cd` into the plugins directory of your local install. Run the command `npx create-guten-block wceu-2018` and watch as your block is created! 
4. (Only if your node/npm versions were off) 

### Part 3: 





This project was bootstrapped with [Create Guten Block](https://github.com/ahmadawais/create-guten-block).

Below you will find some information on how to run scripts.

>You can find the most recent version of this guide [here](https://github.com/ahmadawais/create-guten-block).

## 👉  `npm start`
- Use to compile and run the block in development mode.
- Watches for any changes and reports back any errors in your code.

## 👉  `npm run build`
- Use to build production code for your block inside `dist` folder.
- Runs once and reports back the gzip file sizes of the produced code.

## 👉  `npm run eject`
- Use to eject your plugin out of `create-guten-block`.
- Provides all the configurations so you can customize the project as you want.
- It's a one-way street, `eject` and you have to maintain everything yourself.
- You don't normally have to `eject` a project because by ejecting you lose the connection with `create-guten-block` and from there onwards you have to update and maintain all the dependencies on your own.

---

###### Feel free to tweet and say 👋 at me [@MrAhmadAwais](https://twitter.com/mrahmadawais/)

[![npm](https://img.shields.io/npm/v/create-guten-block.svg?style=flat-square)](https://www.npmjs.com/package/create-guten-block) [![npm](https://img.shields.io/npm/dt/create-guten-block.svg?style=flat-square&label=downloads)](https://www.npmjs.com/package/create-guten-block)  [![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/ahmadawais/create-guten-block) [![Tweet for help](https://img.shields.io/twitter/follow/mrahmadawais.svg?style=social&label=Tweet%20@MrAhmadAwais)](https://twitter.com/mrahmadawais/) [![GitHub stars](https://img.shields.io/github/stars/ahmadawais/create-guten-block.svg?style=social&label=Stars)](https://github.com/ahmadawais/create-guten-block/stargazers) [![GitHub followers](https://img.shields.io/github/followers/ahmadawais.svg?style=social&label=Follow)](https://github.com/ahmadawais?tab=followers)