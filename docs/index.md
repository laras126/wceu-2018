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

### Part 0: Introductions (10:00 - 10:10)

Lecture: Workshop Outline / Pair Programming 101

Exercise:
1. Introduce yourself to your partner:
    * Name
    * Your experience with WordPress
    * A frustrating moment in development
2. Decide who will drive first

### Part 1: What _is_ Gutenberg? (10:15 - 10:25)

Lecture: An overview of how Gutenberg works

Exercise:
1. Create a new post.
2. Add a few blocks (one of them should be a paragraph block). 
    * Adjust some settings for the paragraph block in the sidebar.
3. View the post from the frontend and use the Inspector to inspect the paragraph block.
4. Note where the styles are coming from e.g. inline? a theme stylesheet? plugin stylesheet?
5. Deactivate the Gutenberg plugin.
6. Reload the WYSIWYG editor and switch to the Text view. Make note of the comments surrounding blocks. 
7. Reload the frontend and make note of any styling differences.
8. Activate Gutenberg plugin and see blocks re-appear.

### Part 2: Scaffold a block with Create Guten Block (10:30 - 10:40)

Lecture: Ways to create a block (a.k.a. JavaScript build processes 101)

Exercise (switch drivers):

1. Open the terminal (On Mac: Applications > Utilities > Terminal).
2. Type `node -v` and press Enter. If you get a response of `v8.0.0` or greater, proceed to step 3. Otherwise, skip to step 9.
3. Type `npm -v` and press Enter. If you get a response of `v5.3.0` or greater, proceed to step 4. Otherwise, skip to step 9.
4. `cd` into the plugins directory of your local install (e.g. `cd ~/Sites/wceu-test/wp-content/plugins`)
5. Run the command `npx create-guten-block wceu-2018` and watch as your block is created! 
6. Navigate to the plugins screen of your local install and activate your new block
7. Navigate to a post editor and add the new block
8. Save and view it from the frontend
9. Only if your node and npm versions are out of date: Join a different pair programming group with a working machine! Since we are limited on time, you'll get the most out of the workshop if you skip this step for now. Later, reference [this blog post](https://solarianprogrammer.com/2016/04/29/how-to-upgrade-nodejs-mac-os-x/) for updating node and npm.


### Part 3: What are all these files? (10:40 - 10:50)
Lecture: A tour of these files

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
4. To see changes, remember to save and reload the editor.

If you finish early, brainstorm how to make the text in the first paragrah editable.

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
    * Answer: [1️⃣ here](https://github.com/WordPress/gutenberg/blob/master/core-blocks/preformatted/index.js#L69)
5. Identify where that data is applied to the `save` markup of the block
    * Answer: [1️⃣ here](https://github.com/WordPress/gutenberg/blob/master/core-blocks/preformatted/index.js#L84) or [3️⃣ here](https://github.com/WordPress/gutenberg/blob/master/core-blocks/paragraph/index.js#L501)?
6. Review the file from top to bottom. What other pieces of code are related to making the block editable?
    * HINT: it's very **import**ant

Debrief:

1. What looked familiar?
2. What was unexpected?
3. What do you have questions about?

### Part 5: Making our block editable (11:00-end)

Lecture: Attributes and State

Exercises (switch drivers for each):

The exercises are organized as branches in Github. [Start here](https://github.com/laras126/wceu-2018/blob/1-editable/src/block/block.js) for the first challenge, then change branches using the dropdown on the left below the project menu as you move to each exercise. The branch's code contains an implementation of the feature. Figure out which changes you need to apply to your own block from the code on the branch. 

Note that I have removed most of the comments on each branch's example code for legibility. You do not have to do this, but you can!

#### 1. Make the text editable (`1-editable`).
Reference `src/block/block.js` on the branch `1-editable`. 

#### 2. Add options for text alignment (`2-alignment-toolbar`).
Again reference `src/block/block.js`, as well as one of the `scss` files.

#### 3. Add a nested blocks area (`3-inner-blocks`).
We have the ability to have nested blocks, or "inner block" areas, in Gutenberg blocks. Perhaps we want to have an area for some free-form content below our editable, say an image or maybe a quote? Rather than writing those blocks ourselves, we can use the `InnerBlocks` component to allow for an area of nested blocks! Switch to the branch `3-inner-blocks` and figure out how to apply that code to your own block.

#### 4. Create an option for changing the border color (`4-border-color-control`).
For general block options, we can use the Inspector Controls component. This is the settings area that shows up in the sidebar, like that of the paragraph block. Switch to branch `4-border-color-control` to apply the functionality to your own block to modify the block's border color.

#### 5. Create an option for changing the background color (`5-background-color-control`).
Let's use the same strategy to create an option for changing the block's background color, and employ the contrast checker component to make sure our colors choices are readable.

#### 6. Improvements to #1 (`6-editable-improvements`)
As I was creating this exercise, I realized the initial `p` element we created would be better as a heading element. Then, we could use this block as a callout style block with a heading. We can also utilize the focus states Gutenebrg provides to make the editing experience more smooth. 

#### 7. Improve block semantics (`7-semantic-improvements`)
This is shaping up to be a pretty useful callout or section block! Let's make the markup in our save function a bit more semantic.

#### 8. Improve block style (`8-style-improvements`)
Clean up the edit and style CSS (rather, Sass) to have less harsh initial colors, and apply a border to the header. Apply some CSS organizational practices and tweak the display of the edit view.

I think we have a pretty useful block! Whether or not you made it this far in the workshop, this Github project will be online for you to test outlater. And, if you go beyond what I've done, feel free to submit a PR and I'll take a look!

### Part 6: Conclusion (11:20)

Individually, and in your own words, write 1-3 paragraphs explaining the core components of a block.

### Debugging techniques:

* Make sure the compiler is running and isn't showing syntax errors
* Check the JavaScript console. If it shows an error:
    1. Delete your block
    2. Update the post
    3. Refresh the editor page (command + R)
    4. Create the block again
    5. Read the error
* Make sure you have imported any new components
* Add a `console.log(props.attributes)` to your `edit` function. Does it output what is expected?
* Raise your hand and help will come!

### Helpful links:
* [Creating a Global Options Component in Gutenberg](https://webdevstudios.com/2018/04/12/creating-a-global-options-component-in-gutenberg/), WebDevStudios
* More here...