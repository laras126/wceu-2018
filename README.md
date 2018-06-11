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
1. Create a new post.
2. Add a few blocks (one of them should be a paragraph block). 
    * Adjust some settings for the paragraph block in the sidebar.
3. View the post from the frontend and use the Inspector to inspect the paragraph block.
4. Note two locations where the styles are coming from.
5. Deactivate the Gutenberg plugin.
6. Reload the WYSIWYG editor and switch to the Text view. Make note of the comments surrounding blocks. 
7. Reload the frontend and make note of any styling differences.
8. Activate Gutenberg plugin and see blocks re-appear.

### Part 2: Scaffold a block with Create Guten Block (10:30)

Lecture: Ways to create a block (a.k.a. JavaScript build processes 101)

Exercise (switch drivers):

1. Open the terminal (On Mac: Applications > Utilities > Terminal).
2. Type `node -v` and press Enter. If you get a response of `v8.0.0` or greater, proceed to step 3. Otherwise, skip this step.
3. Type `npm -v` and press Enter. If you get a response of `v5.3.0` or greater, proceed to step 3. Otherwise, skip this step.
4. `cd` into the plugins directory of your local install. Run the command `npx create-guten-block wceu-2018` and watch as your block is created! 
5. Navigate to the plugins screen and activate your new block
6. Navigate to a post editor and add the new block
7. Save and view it from the frontend

### Part 3: What are all these files? (10:40)

Lecture: A tour of the files 

Exercise (switch drivers):

1. Make sure you have the compiler running in the command line (`npm start`).
2. Open up blocks/block.js and read through the code comments.
3. Perform these changes to the code:
    1. Change the name of your block, that is, the one that shows in the block selector
    2. Change the icon of your block (❤ Dashicons)
    3. Change the text that displays on the frontend i.e. when you “View Post”
    4. Change the text that displays on the backend i.e. editor view
    5. Give the edit view a border of 10px solid yellow
    6. Give the frontend view a border radius of 30px
4. When you have finished, brainstorm how to make the text in the first paragrah editable.

Debrief:

1. What did you learn about how a block is structured?

### Part 4: Finding Answers in Gutenberg's Source (10:50)

Exercise (switch drivers):

1. View the source of Gutenberg [on Github here](https://github.com/WordPress/gutenberg).
2. Find the location of the source code for core blocks 
    * Or skip to [this directory](https://github.com/WordPress/gutenberg/tree/master/core-blocks))
3. Select a block that you know has editable text, or you can skip to one of these: 
    * [1️⃣ easiest](https://github.com/WordPress/gutenberg/blob/master/core-blocks/preformatted/index.js)
    * [2️⃣ medium](https://github.com/WordPress/gutenberg/blob/master/core-blocks/heading/index.js) 
    * [3️⃣ hardest](https://github.com/WordPress/gutenberg/blob/master/core-blocks/paragraph/index.js)
4. Identify where the editable functionality is coming from in the `edit` portion of the block
    * Answer: [1️⃣ this line](https://github.com/WordPress/gutenberg/blob/master/core-blocks/preformatted/index.js#L69)
5. Identify where that data is applied to the `save` markup of the block
    * Answer: [1️⃣ here](https://github.com/WordPress/gutenberg/blob/master/core-blocks/preformatted/index.js#L84) or [3⃣ here](https://github.com/WordPress/gutenberg/blob/master/core-blocks/paragraph/index.js#L501)?
6. Review the file from top to bottom. What other pieces of code are related to making the block editable?
    * HINT: it's very **import**ant

Debrief:

1. What looked familiar?
2. What was unexpected?
3. What do you have questions about?

### Part 5: Making our block editable (and more!)

Lecture: Attributes and State

Exercise (switch drivers):

1. Make your block editable! Reference the files in this repository inside the `blocks/` directory. 
2. 

### Part 6: Conclusion (11:20)

Individually, and in your own words, write 1-3 paragraphs explaining what a block is using the terms database, PHP, JavaScript, and React.

