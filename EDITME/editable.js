/*  Hello! This file will allow you to edit the content that appears on the
**  badminton website. You MUST follow the instruction VERY carefully however:
**  this is actual real code, so if you mess it up then your website will break!
**  But don't worry - it's super simple.
**
**  This file allows you to change things like the committee members, pictures,
**  links etc on the website. If you want to make changes to website text only,
**  refer to the relevant ".md" file in the EDITME folder. Each file is names after
**  the section is represents, e.g. to make changes to the "About" section
**  description, make your edits to the "about.md" file.
**
**  Areas of this document which are safe for you to edit are marked clearly
**  between markers like this:
**
**    (do not make changes here)
**  // ---- EDIT HERE ----
**    (this is where you can make changes)
**  // ---- END EDIT HERE ----
**    (do not make changes here)
*/

var app = angular.module('badmintonApp');

// COVER IMAGES FOR THE IMAGE SLIDESHOW IN THE HEADER
app.constant('coverImageUrls', [

  /*  This is a list of filepaths for the images which appear in the images
  **  slideshow at the top of the website.
  **
  **  The images listed here MUST exist in the folder: EDITME/images/slideshow
  **  The filenames must match exactly, and the filename MUST have the correct
  **  extension (e.g. ".jpg").
  **
  **  Make sure each filename is surrounded by 'single quotes' and that there
  **  is a comma separating each entry. Do not put a comma after the very last entry.
  */
  // ---- EDIT HERE ----
  'cover1.jpg',
  'cover2.jpg',
  'cover3.jpg',
  'cover4.jpg',
  'cover5.jpg',
  'cover6.jpg',
  'cover7.jpg',
  'cover8.jpg'
  // ---- END EDIT HERE ----

]);

// LIST OF SPONSORS AND THEIR LOGOS
app.constant('sponsors', [

  /*  This is a list of objects describing the sponsors which appear in a banner
  **  beneath the slideshow. Each sponsor object is wrapped in {curly braces},
  **  and inside it specified 2 properties:
  **  'link' is the URL to the sponsor's website, which will be opened when clicked.
  **  'image' is the filename of the image as it appears in the folder: EDITME/images/sponsors
  **  This filename must match exactly, and the filename MUST have the correct
  **  extension (e.g. ".jpg").
  **
  ** Follow the format described below, noting the commas and quotes.
  **
  ** {
  **  link: 'url-to-the-sponsor-1-website',
  **  image: 'image-1-filename'
  ** }, {
  **  link: 'url-to-sponsor-2-website',
  **  image: 'image-2-filename'
  ** }
  */
  // ---- EDIT HERE ----
  {
    link: 'http://www.fz-forza.com/',
    image: 'Fz Forza.png'
  }
  // ---- END EDIT HERE ----
]);

// LIST OF COMMITTEE MEMBERS
app.constant('committee', [
  /*  This is a list of objects describing the committee members which appear in
  **  the 'Team' section. (See below for a similar list for the Captains and Coaches).
  **
  **  Each committee member object is wrapped in {curly braces},
  **  and inside it specified 4 properties:
  **  'image' is the filename of the image as it appears in the folder: EDITME/images/team
  **  'name' is the name of the committee member
  **  'position' is the position of the committee member
  **  'email' is the email of the committee member
  */
  // ---- EDIT HERE ----
  {
    image: 'Lauren Ashley.png',
    name: 'Lauren Ashley',
    position: 'Club Captain',
    email: 'la13576@my.bristol.ac.uk'
  }, {
    image: 'Joe Urwin.png',
    name: 'Joe Urwin',
    position: 'Vice Club Captain',
    email: 'ju14762@my.bristol.ac.uk'
  }, {
    image: 'Darren Chin.png',
    name: 'Darren Chin',
    position: 'Secretary',
    email: 'dc15333@my.bristol.ac.uk'
  }, {
    image: 'James Wheeler.png',
    name: 'James Wheeler',
    position: 'Treasurer',
    email: 'jw15835@my.bristol.ac.uk'
  }, {
    image: 'Bryan Wong.png',
    name: 'Bryan Wong',
    position: 'Publicity Officer',
    email: 'bw14555@my.bristol.ac.uk'
  }, {
    image: 'Dan Bethell.png',
    name: 'Dan Bethell',
    position: 'Equality Officer',
    email: 'db14349@my.bristol.ac.uk'
  }, {
    image: 'Robert Eyre.png',
    name: 'Robert Eyre',
    position: 'Social Section Captain',
    email: 're13093@my.bristol.ac.uk'
  }, {
    image: 'Dome Chartsakulkanajarn.png',
    name: 'Dome Chartsakulkanajarn',
    position: 'Social Secretary',
    email: 'tc14273@my.bristol.ac.uk'
  }, {
    image: 'Kaamil Walilay.png',
    name: 'Kaamil Walilay',
    position: 'Development Squad Captain',
    email: 'kw13080@my.bristol.ac.uk'
  }, {
    image: 'Katrina Fray.png',
    name: 'Katrina Fray',
    position: 'Kit Officer',
    email: 'kf15164@my.bristol.ac.uk'
  }
  // ---- END EDIT HERE ----
]);

// LIST OF CAPTAINS
app.constant('captains', [

  /*  This is a list of objects describing the Captains. It works the same as
  **  the "Committee" section described above.
  */
  // ---- EDIT HERE ----
  {
    image: 'Rohan Gupta.png',
    name: 'Rohan Gupta',
    position: 'Men\'s 1st Captain',
    email: 'rg15793@my.bristol.ac.uk'
  }, {
    image: 'Bradley Miles.png',
    name: 'Will Brownhill',
    position: 'Men\'s 2nd Captain',
    email: 'wb14520@my.bristol.ac.uk'
  }, {
    image: 'Georgia Higgs.png',
    name: 'Georgia Higgs',
    position: 'Ladies\' 1st Captain',
    email: 'gh15476@my.bristol.ac.uk'
  }, {
    image: 'James Wheeler.png',
    name: 'James Wheeler',
    position: 'Men\'s Captain',
    email: 'jw15835@my.bristol.ac.uk'
  }, {
    image: 'Catherine Toase.png',
    name: 'Catherine Toase',
    position: 'Ladies\' Captain',
    email: 'ct14868@my.bristol.ac.uk'
  }, {
    image: 'Lizzy Cassidy.png',
    name: 'Lizzy Cassidy',
    position: 'Mixed Captain',
    email: 'ec14396@my.bristol.ac.uk'
  }
  // ---- END EDIT HERE ----
]);

// LIST OF COACHES
app.constant('coaches', [

  /*  This is a list of objects describing the Coaches. It works the same as
  **  the "Committee" and "Captains" sections described above, except an
  **  email address is not specified.
  */
  // ---- EDIT HERE ----
  {
    image: 'Paul Tomlinson.png',
    name: 'Paul Tomlinson',
    position: 'Performance Squad Coach'
  }
  // ---- END EDIT HERE ----
]);

// LINK FOR THE PURCHASE MEMBERSHIP BUTTON
app.constant('purchaseMembershipLink',

  /*  The URL provided below is the web page that wil be opened when the
  **  'PURCHASE MEMBERSHIP' button in the Membership section is clicked.
  **  Make sure the URL below is surrounded by 'single quotes' !!
  */
  // ---- EDIT HERE ----
  'http://bristol.unioncloud.org/groups/badminton-0548'
  // ---- END EDIT HERE ----
);

// LINK FOR GET THE KIT BUTTON
app.constant('getTheKitLink',

  /*  The URL provided below is the web page that wil be opened when the
  **  'GET THE KIT' button in the Membership section is clicked.
  **  Make sure the URL below is surrounded by 'single quotes' !!
  */
  // ---- EDIT HERE ----
  ''
  // ---- END EDIT HERE ----
);

// LINK FOR THE VIEW OUR CALENDAR BUTTON
app.constant('viewOurCalendarLink',

  /*  The URL provided below is the web page that wil be opened when the
  **  'VIEW OUR CALENDAR' button in the Events section is clicked.
  **  Make sure the URL below is surrounded by 'single quotes' !!
  */
  // ---- EDIT HERE ----
  'https://calendar.google.com/calendar/embed?src=uobbadders%40gmail.com&ctz=Europe%2FLondon'
  // ---- END EDIT HERE ----
);

// IMPORTANT LINKS APPEARING IN THE LEFT SIDE OF THE FOOTER
app.constant('footerLinksLeft', [

  /*  This is a list of objects describing the links which appear in the
  **  left hand column of the website's footer.
  **  Each object is made up of 2 properties:
  **  'link'  This is the URL for the website that will be opened when the link is clicked
  **  'name'  This is the text that will appear describing the link
  */
  // ---- EDIT HERE ----
  {
    link: 'http://www.bristol.ac.uk/',
    name: 'University of Bristol'
  }, {
    link: 'http://www.bristolsu.org.uk/',
    name: 'UoB Students\' Union'
  }, {
    link: 'http://www.bristol.ac.uk/sport/welcome/',
    name: 'UoB Sport, Exercise and Health'
  }, {
    link: 'http://www.bristol.ac.uk/sport/facilities/medicine-clinic/',
    name: 'UoB Sport, Exercise and Medicine Clinic'
  }
  // ---- END EDIT HERE ----
]);

// IMPORTANT LINKS APPEARING IN THE RIGHT SIDE OF THE FOOTER
app.constant('footerLinksRight', [

  /*  This is a list of objects describing the links which appear in the
  **  right hand column of the website's footer.
  **  Each object is made up of 2 properties:
  **  'link'  This is the URL for the website that will be opened when the link is clicked
  **  'name'  This is the text that will appear describing the link
  */
  // ---- EDIT HERE ----
  {
    link: 'http://www.fz-forza.com/',
    name: 'Fz Forza'
  }, {
    link: 'http://www.badmintonengland.co.uk/homepage.asp',
    name: 'Badminton England'
  }, {
    link: 'http://avonba.co.uk/index.php/mnulcllgs/mnubritables',
    name: 'Avon and Local League'
  }, {
    link: 'http://bucs.org.uk/',
    name: 'British University and College Sport'
  }
  // ---- END EDIT HERE ----
]);
