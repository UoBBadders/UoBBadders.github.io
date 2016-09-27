# UoB Badminton Website

This repository contains the code for the University of Bristol Badminton Website.
The website is built using AngularJS and is hosted on GitHub Pages at https://uobbadders.github.io/UoBBadminton/.

# Making Edits
---

## Important
All changes you need for the site can be made directly on GitHub!
However, in order for changes to appear live on the site they **must be made to the `gh-pages` branch**.
The default branch is `master`, so you need to switch it over manually using the dropdown box at the top of the page!

## Text Changes
You can make a number of changes to this site quite easily without requiring the assistance of a developer.
Things that you can edit are found in the `EDITME` folder.

In order to change the *text*, including the headings, tables etc. of certain sections of the website, you can edit the relevant Markdown files (the files which end in '.md').
Markdown is a way of rendering formatted text, including headings, lists and tables, all using plain text. For example, the following Markdown:
```
# This is a heading
This is the paragraph, blah blah blah.

- This is a **list** item
- This is *another* list item

## This is a sub-heading
This | is | a  | table
--- | --- | --- | ---
row1 | *content* | goes | here
row2 | content | **goes** | here
```

... will be rendered as:

# This is a heading
This is the paragraph, blah blah blah.

- This is a **list** item
- This is *another* list item

## This is a sub-heading
This | is | a  | table
--- | --- | --- | ---
row1 | *content* | goes | here
row2 | content | **goes** | here

In order to change the text in the "Squads and Coaches" section, for example, edit the Markdown in the file called `squadsandcoaches.md` in the folder `EDITME`.

## More complex changes
You can also change things like:
- The images that are displayed in the slideshow at the top of the website
- The Committee Members/Captains/Coaches, including their names, positions, emails and photographs
- The links which are navigated to when the various website's buttons are clicked

In order to make these changes you can makes edits to the file `editable.js` in the `EDITME` folder. Follow the detailed instructions in this file carefully. You may need to change the images in the various folders in `EDITME/images`.

# FOR DEVELOPERS
---

If you are a developer maintaining this project, you can get started by:

- `git clone https://github.com/UoBBadders/UoBBadminton`
- `cd UoBBadminton`
- `npm install && bower install`

Checkout `Gruntfile.js` for the preconfigured tasks:

- `grunt serve` to serve the website locally and watch for file changes
- `grunt build` to compile the [Less](http://lesscss.org/) into pure CSS, and lint the JS.
- `grunt publish` to merge your committed changes into a branch called 'production' (ensure it exists) and push it to the remote's `gh-pages` branch (i.e. to the live site).
