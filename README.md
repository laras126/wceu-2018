# "Let's Build A Gutenberg Block" at WordCamp EU, 2018!

This Github project will provide the reference files and roadmap for our workshop today. Each portion will be introduced with a short lecture followed by an exercise.

### Learning Goals:

- To explain how a block works
- To read through a block’s code and envision what is happening behind the scenes

### Prerequisites:

Please have the following prepared for the workshop:

* Local install of WordPress with the Twenty Seventeen theme active
* Current version of the Gutenberg plugin installed (v3.0.1)
* Node version 8+, npm version 5.3+
* A text editor such as Sublime, VSCode, or Atom

### Part 0: Introductions (10:00)

Lecture: Workshop Outline / Pair Programming 101

Exercise:
1. Introduce yourself to your partner:
  * Name
  * Your experience with WordPress
  * A frustrating moment in development
2. Decide who will drive first

### Part 1: What _is_ Gutenberg? (10:15)

Lecture: An overview of how Gutenberg works

Exercise:
- [ ] Create a new post.
- [ ] Add a few blocks (one of them should be a paragraph block). 
  - [ ] Adjust some settings for the paragraph block in the sidebar.
- [ ] View the post from the frontend and use the Inspector to inspect the paragraph block.
- [ ] Note two locations where the styles are coming from.
- [ ] Deactivate the Gutenberg plugin.
- [ ] Reload the WYSIWYG editor and switch to the Text view. Make note of the comments surrounding blocks. 
- [ ] Reload the frontend and make note of any styling differences.
- [ ] Reactivate Gutenberg and see blocks re-appear.

### Part 2: Scaffold a block with Create Guten Block (10:30)

Lecture: Ways to create a block (a.k.a. JavaScript build processes 101)

Exercise (switch drivers):

1. Open the terminal (On Mac: Applications > Utilities > Terminal).
2. Type `node -v` and press Enter. If you get a response of `v8.0.0` or greater, proceed to step 3. Otherwise, skip this step.
3. Type `npm -v` and press Enter. If you get a response of `v5.3.0` or greater, proceed to step 3. Otherwise, skip this step.
4. `cd` into the plugins directory of your local install. Run the command `npx create-guten-block wceu-2018` and watch as your block is created! 
4. (Only if your node/npm versions were off) 
5. Activate the Create Guten Block plugin 
6. Add a new CGB block
7. Save and view it from the frontend

### Part 3: What are all these files? (10:40)

Lecture: A tour of the files

Exercise (switch drivers):

- Make sure you have the compiler running in the command line (`npm start`).
- Open up blocks/block.js and read through the code comments.
- Perform these changes to the code:
  1. Change the name of your block, that is, the one that shows in the block selector
  2. Change the icon of your block (❤ Dashicons)
  3. Change the text that displays on the frontend i.e. when you “View Post”
  4. Change the text that displays on the backend i.e. editor view
  5. Give the frontend view a border radius of 30px
- When you have finished, brainstorm how to make the text in the first paragrah editable.

### Part 4: Finding Answers in Gutenberg's Source (10:50)

(note: we will skip this section if running low on time!)

Exercise (switch drivers):

View the source of Gutenberg [on Github here](https://github.com/WordPress/gutenberg). See if you can figure out how to make text editable text area by referencing the source of Gutenberg's core blocks. 

1. Find the location of the source code for core blocks 
  * Or skip to [this directory](https://github.com/WordPress/gutenberg/tree/master/core-blocks))
2. Select a block that you know has editable text, or you can skip to one of these: 
    * [1️⃣ easiest](https://github.com/WordPress/gutenberg/blob/master/core-blocks/preformatted/index.js)
    * [2️⃣ medium](https://github.com/WordPress/gutenberg/blob/master/core-blocks/heading/index.js) 
    * [3️⃣ hardest](https://github.com/WordPress/gutenberg/blob/master/core-blocks/paragraph/index.js)
3. Identify where the editable functionality is coming from in the `edit` portion of the block
  * Answer: [1️⃣ this line](https://github.com/WordPress/gutenberg/blob/master/core-blocks/preformatted/index.js#L69)
4. Identify where that data is applied to the `save` markup of the block
  * Answer: [1️⃣ here](https://github.com/WordPress/gutenberg/blob/master/core-blocks/preformatted/index.js#L84) or [3⃣ here](https://github.com/WordPress/gutenberg/blob/master/core-blocks/paragraph/index.js#L501)?
5. Review the file from top to bottom. What other pieces of code are related to making the block editable?
  * HINT: it's very **import**ant

### Part 5: Making our block editable
