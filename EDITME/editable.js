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
  /*  This is a 'list of lists' of objects describing the committee members which appear in
  **  the 'Team' section. (See below for a similar list for the Captains and Coaches).
  **  Each 'sub-list' (between sets of square brackets) contains the members that will
  **  be displayed on the same level on-screen.
  **  Currently the committee is shown in a 2-4-3 layout, this can be seen and modified in
  **  the list structure below.
  **  You can even add more tiers if you like, just make sure the general format is:
  **
  [ // outer list, opened above
    [
      // First tier
      {member 1},
      {member 2},
      ...
    ],
    [
      // second tier
      :
    ],
    :
    [
      // final tier
    ]
  ]
  **
  **  Each committee member object is wrapped in {curly braces},
  **  and inside it specified 4 properties:
  **  'image' is the filename of the image as it appears in the folder: EDITME/images/team
  **  'name' is the name of the committee member
  **  'position' is the position of the committee member
  **  'email' is the email of the committee member
  */
  // ---- EDIT HERE ----
  [ // First tier
    {
      image: 'Silhouette.jpg',
      name: 'Emma Greenough',
      position: 'Club Captain',
      email: 'eg17373@bristol.ac.uk'
    }, {
      image: 'Silhouette.jpg',
      name: 'Eve Chillcott',
      position: 'Vice-Club Captain',
      email: 'dp19613@bristol.ac.uk'
    }
  ], 
  [ // Second tier
    {
      image: 'Silhouette.jpg',
      name: 'Eva Craig',
      position: 'Secretary',
      email: 'wp19488@bristol.ac.uk'
    }, {
      image: 'Silhouette.jpg',
      name: 'Niharika Singh',
      position: 'Treasurer',
      email: 'ns17177@bristol.ac.uk'
    }, {
      image: 'Silhouette.jpg',
      name: 'Julian Chan',
      position: 'Publicity Officer',
      email: 'sq18682@bristol.ac.uk'
    }, {
      image: 'Silhouette.jpg',
      name: 'Henry Doyle',
      position: 'Fitness Officer',
      email: 'pf19393@bristol.ac.uk'
    },
  ],
  [ // Third tier
    {
      image: 'Silhouette.jpg',
      name: 'Charlotte Housden',
      position: 'Kit Officer',
      email: 'uf19497@bristol.ac.uk\r\n&nbsp;'
    }, {
      image: 'Silhouette.jpg',
      name: 'Juliet Chee',
      position: 'Social Secretary',
      email: 'fb18727@bristol.ac.uk'
    }, {
      image: 'Silhouette.jpg',
      name: 'Numra Maryam',
      position: 'Equality and Welfare Officer\r\n&nbsp;',
      email: 'fe18932@bristol.ac.uk'
    }
  ],
  // ---- END EDIT HERE ----
]);

// LIST OF CAPTAINS
app.constant('captains', [

  /*  This is a list of objects describing the Captains. It works the same as
  **  the "Committee" section described above.
  **  The three tiers here match those for the squads
  */
  // ---- EDIT HERE ----
  [ // Performance
    {
      image: 'Silhouette.jpg',
      name: 'Ben Wood',
      position: 'Men\'s Performance Captain',
      email: 'bw17084@bristol.ac.uk'
    }, {
      image: 'Silhouette.jpg',
      name: 'Maya Raichoora',
      position: 'Women\'s Performance Captain',
      email: 'mr16067@bristol.ac.uk'
    }
  ],
  [ // Dev
    {
      image: 'Silhouette.jpg',
      name: 'Henry Doyle',
      position: 'Men\'s Development Captain',
      email: 'pf19393@bristol.ac.uk'
    }, {
      image: 'Silhouette.jpg',
      name: 'Anna McQuillan',
      position: 'Women\'s and Mixed Development Captain',
      email: 'sy19161@bristol.ac.uk'
    }
  ],
  [ // Social
    {
      image: 'Silhouette.jpg',
      name: 'Mark Ngu',
      position: 'Social Captain',
      email: 'eh19379@bristol.ac.uk'
    }, {
      image: 'Silhouette.jpg',
      name: 'Miguel Sangalang',
      position: 'Social Vice-Captain',
      email: 'tp19086@bristol.ac.uk'
    }
  ]
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
    image: 'RebeccaPantaney.png',
    name: 'Rebecca Pantaney',
    position: 'Badminton Coordinator and Performance Squad Coach',
    details: 'The University have appointed a part time Badminton Coordinator, Bex. She works within the club committee and alongside Avon and Badminton England to support the growth and development of UoBBC as a nationally recognised institution within both the Bristol and Badminton communities. Bex works to host several Badminton England sanctioned tournaments throughout the year, support NGB talent pathways, and encourage player development.',
  },
  {
    image: 'Paul Tomlinson.png',
    name: 'Paul Tomlinson',
    position: 'Performance and Development\nSquad Coach',
    details: '',
  }
  // ---- END EDIT HERE ----
]);

// LIST OF OTHER POSITIONS
app.constant('others', [

  /*  This is a list of objects describing the Other Positions. It works the same as
  **  the "Committee" and "Captains" sections described above, except an
  **  email address is not specified.
  */
  // ---- EDIT HERE ----
  {
    image: 'RebeccaPantaney.png',
    name: 'Rebecca Pantaney',
    position: 'Badminton Coordinator',
    details: 'The University have appointed a part time Badminton Coordinator, Bex. She works within the club committee and alongside Avon and Badminton England to support the growth and development of UoBBC as a nationally recognised institution within both the Bristol and Badminton communities. Bex works to host several Badminton England sanctioned tournaments throughout the year, support NGB talent pathways, and encourage player development.'
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
  'https://www.surridgesport.com/uob-badminton'
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
