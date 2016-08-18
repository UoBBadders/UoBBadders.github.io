var app = angular.module('badmintonApp');
app.constant('coverImageUrls', [
  'assets/images/cover1.jpg',
  'assets/images/cover2.jpg',
  'assets/images/cover3.jpg',
  'assets/images/cover4.jpg',
  'assets/images/cover5.jpg',
  'assets/images/cover6.jpg',
  'assets/images/cover7.jpg',
  'assets/images/cover8.jpg'
]);

app.constant('sponsors', [
  {
    link: 'http://www.fz-forza.com/',
    imageUrl: 'assets/images/sponsors/Fz Forza.png'
  }
]);

app.constant('committee', [
  {
    imageUrl: 'assets/images/team/Lauren Ashley.png',
    name: 'Lauren Ashley',
    position: 'Club Captain',
    email: 'la13576@my.bristol.ac.uk'
  }, {
    imageUrl: 'assets/images/team/Joe Urwin.jpg',
    name: 'Joe Urwin',
    position: 'Vice Club Captain',
    email: 'ju14762@my.bristol.ac.uk'
  }, {
    imageUrl: 'assets/images/team/Darren Chin.jpg',
    name: 'Darren Chin',
    position: 'Secretary',
    email: 'dc15333@my.bristol.ac.uk'
  }, {
    imageUrl: 'assets/images/team/James Wheeler.png',
    name: 'James Wheeler',
    position: 'Treasurer',
    email: 'jw15835@my.bristol.ac.uk'
  }, {
    imageUrl: 'assets/images/team/Bryan Wong.jpg',
    name: 'Bryan Wong',
    position: 'Publicity Officer',
    email: 'bw14555@my.bristol.ac.uk'
  }, {
    imageUrl: 'assets/images/team/Dan Bethell.png',
    name: 'Dan Bethell',
    position: 'Equality Officer',
    email: 'db14349@my.bristol.ac.uk'
  }, {
    imageUrl: 'assets/images/team/Robert Eyre.jpg',
    name: 'Robert Eyre',
    position: 'Social Section Captain',
    email: 're13093@my.bristol.ac.uk'
  }, {
    imageUrl: 'assets/images/team/Dome Chartsakulkanajarn.jpg',
    name: 'Dome Chartsakulkanajarn',
    position: 'Social Secretary',
    email: 'tc14273@my.bristol.ac.uk'
  }, {
    imageUrl: 'assets/images/team/Kaamil Walilay.png',
    name: 'Kaamil Walilay',
    position: 'Development Squad Captain',
    email: 'kw13080@my.bristol.ac.uk'
  }, {
    imageUrl: 'assets/images/team/Katrina Fray.png',
    name: 'Katrina Fray',
    position: 'Kit Officer',
    email: 'kf15164@my.bristol.ac.uk'
  }
]);

app.constant('captains', [
  {
    imageUrl: 'assets/images/team/Rohan Gupta.jpg',
    name: 'Rohan Gupta',
    position: 'Men\'s 1st Captain',
    email: 'rg15793@my.bristol.ac.uk'
  }, {
    imageUrl: 'assets/images/team/Will Brownhill.jpg',
    name: 'Will Brownhill',
    position: 'Men\'s 2nd Captain',
    email: 'wb14520@my.bristol.ac.uk'
  }, {
    imageUrl: 'assets/images/team/Georgia Higgs.jpg',
    name: 'Georgia Higgs',
    position: 'Ladies\' 1st Captain',
    email: 'gh15476@my.bristol.ac.uk'
  }, {
    imageUrl: 'assets/images/team/James Wheeler.png',
    name: 'James Wheeler',
    position: 'Men\'s Captain',
    email: 'jw15835@my.bristol.ac.uk'
  }, {
    imageUrl: 'assets/images/team/Catherine Toase.jpg',
    name: 'Catherine Toase',
    position: 'Ladies\' Captain',
    email: 'ct14868@my.bristol.ac.uk'
  }, {
    imageUrl: 'assets/images/team/Lizzy Cassidy.png',
    name: 'Lizzy Cassidy',
    position: 'Mixed Captain',
    email: 'ec14396@my.bristol.ac.uk'
  }
]);

app.constant('coaches', [
  {
    imageUrl: 'assets/images/team/Paul Tomlinson.png',
    name: 'Paul Tomlinson',
    position: 'Performance Squad Coach'
  }, {
    imageUrl: 'assets/images/team/Nicola Wall.png',
    name: 'Nicola Wall',
    position: 'Performance Squad Coach'
  }
]);

app.constant('purchaseMembershipLink', 'http://bristol.unioncloud.org/groups/badminton-0548');
app.constant('getTheKitLink', '');
app.constant('viewOurCalendarLink', '');

app.constant('footerLinksLeft', [
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
]);

app.constant('footerLinksRight', [
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
]);
