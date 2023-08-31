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
  '2023cover1.jpg',
  '2023cover2.jpg',
  '2023cover3.jpg',
  '2023cover4.jpg',
  '2023cover5.jpg',
  '2023cover6.jpg',
  '2023cover7.jpg',
  '2023cover8.jpg',
  '2023cover9.jpg'
  // ---- END EDIT HERE ----

]);

// LIST OF SPONSORS AND THEIR LOGOS
app.constant('supports', [

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
    link: 'https://www.bristolsu.org.uk/',
    image: 'Supported_By_Bristol_SU_Logo_Blue.png'
  },  {
    link: 'https://www.kempsjewellers.com/',
    image: 'KempsLogoBlack.png'
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
      image: 'Peter Shield 2.JPG',
      name: 'Peter Shield',
      position: 'Club Captain',
      email: 'ax21801@bristol.ac.uk'
    }, {
      image: 'Ben Kemp.JPG',
      name: 'Ben Kemp',
      position: 'Vice-Club Captain',
      email: 'mw21957@bristol.ac.uk'
    }
  ], 
  [ // Second tier
    {
      image: 'UoBBC Logo.png',
      name: 'To Be Confirmed',
      position: 'Secretary',
      email: '...'
    }, {
      image: 'Ryan Tham.JPG',
      name: 'Ryan Tham',
      position: 'Treasurer',
      email: 'uo21656@bristol.ac.uk'
    }, {
      image: 'Than Sin.JPG',
      name: 'Than Sin',
      position: 'Publicity Officer',
      email: '...'
    }, 
  ],
  [ // Third tier
    {
      image: 'Leon Zhu.png',
      name: 'Leon Zhu',
      position: 'Kit Officer',
      email: 'ab20179@bristol.ac.uk'
    }, {
      image: 'Amy Amin.JPG',
      name: 'Amy Amin',
      position: 'Alumni Secretary',
      email: '...'
    },  {
      image: 'Barney Pridmore.JPG',
      name: 'Barney Pridmore',
      position: 'Social Secretary',
      email: '...'
    }, {
      image: 'UoBBC Logo.png',
      name: 'To Be Confirmed',
      position: 'Social Secretary',
      email: '...'
    }, {
      image: 'Priya Basnet.JPG',
      name: 'Priya Basnet',
      position: 'Equality and Welfare Officer',
      email: 'lv21097@bristol.ac.uk'
    }, {
      image: 'Orton Khoo.JPG',
      name: 'Orton Khoo',
      position: 'Fixtures Secretary',
      email: '...'
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
      image: 'Rachel Chew.JPG',
      name: 'Rachel Chew',
      position: 'Women\'s Performance Captain',
      email: 'yn22384@bristol.ac.uk'
    }, {
      image: 'Ricky Lam.png',
      name: 'Ricky Lam',
      position: 'Men\'s Performance Captain',
      email: 'qj20749@bristol.ac.uk'
    }
  ],
  [ // Dev
    {
      image: 'Lacey Rose Trebilcook.JPG',
      name: 'Lacey Rose Trébilcook',
      position: 'Women\'s Development Captain',
      email: 'oe20277@bristol.ac.uk'
    }, {
      image: 'Aaron Vinod.JPG',
      name: 'Aaron Vinod',
      position: 'Men\'s Development Captain',
      email: 'ce20480@bristol.ac.uk'
    }
  ],
  [ // Social
    {
      image: 'Min Xu.JPG',
      name: 'Min Xu',
      position: 'Social Captain',
      email: '...'
    }, {
      image: 'Huvan Chan.JPG',
      name: 'Huvan Chan',
      position: 'Social Vice Captain',
      email: '...'
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
    image: 'Raj Popat.jpg',
    name: 'Raj Popat',
    position: 'Performance Squad Coach',
    details: 'Raj is our newly-appointed Performance Squad Coach. Raj is an ex-international player for Wales and now full-time coach. His coaching accolades include 4 years as Head Coach at Cardiff University, now Head Coach of the Newport Badminton Academy and a consultant coach for the English, French and Spanish teams. As Coach at the University, Raj will coordinate players\' development and team development. He will manage, monitor and motivate our players throughout the season. We are looking forward to working with him.',
  },
  {
    image: 'UoBBC Logo.png',
    name: 'Performance/Development Player-Coaches',
    position: 'Coaches for the Development and Social Squads',
    details: 'Following the success of the University\'s "Game Changers" programme last year, which saw a team of Performance Squad and Development Squad players train as Badminton England-qualified coaches and apply those skills to coach the social squad, Game Changers will be returning this year. These coaches will run coaching sessions for the Development and Social Squads, supported by experienced coaches in the Performance Squad.',
    email: 'uobbadders@outlook.com'
  },
  {
    image: 'RebeccaPantaney.png',
    name: 'Rebecca Pantaney',
    position: 'Outgoing Badminton Coordinator & Performance Squad Coach',
    details: 'Bex has been part of UoBBC for many years, during this time she has played a pivotal role in overseeing the growth and development of the club. We are sad to lose Bex, but we wish her all the best for her future endeavours.',
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
  'https://www.bristolsu.org.uk/groups/badminton-9c11'
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
  },{
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
