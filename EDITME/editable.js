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
  }, {
    link: 'https://www.bristolsu.org.uk/',
    image: 'Supported_By_Bristol_SU_Logo_Blue.png'
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
      image: 'Leon Zhu.png',
      name: 'Alex Hyde',
      position: 'Club Captain',
      email: 'vc20825@bristol.ac.uk'
    }, {
      image: 'Leon Zhu.png',
      name: 'Peter Shield',
      position: 'Vice-Club Captain',
      email: 'ax21801@bristol.ac.uk'
    }
  ], 
  [ // Second tier
    {
      image: 'Leon Zhu.png',
      name: 'Lucy Ossege',
      position: 'Secretary',
      email: 'lucy.ossege.2020@bristol.ac.uk'
    }, {
      image: 'Leon Zhu.png',
      name: 'Sam Philmore',
      position: 'Treasurer',
      email: 's.philmore.2020@bristol.ac.uk'
    }, {
      image: 'Leon Zhu.png',
      name: 'Ryan Cho',
      position: 'Publicity Officer',
      email: 'nn21181@bristol.ac.uk'
    }, 
  ],
  [ // Third tier
    {
      image: 'Leon Zhu.png',
      name: 'Sam Philmore',
      position: 'Kit Officer',
      email: 's.philmore.2020@bristol.ac.uk'
    }, {
      image: 'Leon Zhu.png',
      name: 'Eva Craig',
      position: 'Alumni Secretary',
      email: 'eva.craig.2019@bristol.ac.uk'
    },  {
      image: 'Leon Zhu.png',
      name: 'Amy Kwong',
      position: 'Social Secretary',
      email: 'tc20603@bristol.ac.uk'
    }, {
      image: 'Leon Zhu.png',
      name: 'Leon Zhu',
      position: 'Social Secretary',
      email: 'ab20179@bristol.ac.uk'
    }, {
      image: 'Leon Zhu.png',
      name: 'Serena Khan',
      position: 'Equality and Welfare Officer',
      email: 'serena.k.2020@bristol.ac.uk'
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
      image: 'Leon Zhu.jpg',
      name: 'Ricky Lam',
      position: 'Men\'s Performance Captain',
      email: 'qj20749@bristol.ac.uk'
    }, {
      image: 'Leon Zhu.png',
      name: 'Eve Chillcott',
      position: 'Women\'s Performance Captain',
      email: 'eve.c.2019@bristol.ac.uk'
    }
  ],
  [ // Dev
    {
      image: 'Leon Zhu.png',
      name: 'Hattie Chudley',
      position: 'Women\'s Development Captain',
      email: 'sa21715@bristol.ac.uk'
    }, {
      image: 'Leon Zhu.png',
      name: 'Alex Chan',
      position: 'Men\'s Development Captain',
      email: 'pf19367@bristol.ac.uk'
    }
  ],
  [ // Social
    {
      image: 'Leon Zhu.png',
      name: 'Amy Kwong',
      position: 'Social Captain',
      email: 'tc20603@bristol.ac.uk'
    }, {
      image: 'Leon Zhu.png',
      name: 'Pranav Arya',
      position: 'Social Vice-Captain',
      email: 'bv21717@bristol.ac.uk'
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
    details: 'Bex is employed by the University of Bristol and works within SEH to support the growth and development of UoBBC as a nationally recognised institution within both the Bristol and Badminton communities. Bex leads the hosting of several Badminton England sanctioned tournaments throughout the year, supports NGB talent pathways, and encourages player development.',
    email: 'ny19487@bristol.ac.uk'
  },
  {
    image: 'Paul Tomlinson.png',
    name: 'Paul Tomlinson',
    position: 'Development Squad Coach',
    details: 'Paul has been part of UoBBC for many years and has been instrumental in its growth as a club. He coaches once a week for the Development squad.',
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
    link: 'https://www.bristolsu.org.uk/groups/badminton-0548',
    name: 'Our SU Page'
  }, {
    link: 'http://www.bristol.ac.uk/sport/welcome/',
    name: 'UoB Sport, Exercise and Health'
  }, {
    link: 'https://www.bristol.ac.uk/sport/facilities/clinic/',
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
    link: 'http://www.bristol.ac.uk/students/support/finances/scholarships/vc-scholarship/terms/',
    name: 'UoB Vice-Chancellor\'s Scholarship'
  }, {
    link: 'http://www.bristol.ac.uk/sport/performance/squad/maroon-athletes/',
    name: 'Maroon Scholarship'
  }, {
    link: 'http://www.fz-forza.com/',
    name: 'Fz Forza'
  }, {
    link: 'http://www.badmintonengland.co.uk/homepage.asp',
    name: 'Badminton England'
  }, {
    link: 'http://avonba.org/leagues',
    name: 'Avon and Local League'
  }, {
    link: 'http://bucs.org.uk/',
    name: 'British University and College Sport'
  }
  // ---- END EDIT HERE ----
]);
