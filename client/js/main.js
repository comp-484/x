Router.route('/', function () {
    this.render('main');
  });

  Router.route('/home', function () {
    this.render('home');
  });
  
  Router.route('/profile', function () {
    this.render('profile');
  });
  
  Router.route('/settings', function () {
    this.render('settings');
  });