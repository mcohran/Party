Router.configure({
	layoutTemplate: 'layout'
});
Router.route('/About', {name: 'About'});


Router.route('/', {name: 'welcome'});

Router.route('/showall', {name: 'showall'});

Router.route('/find',{name: 'find'});

Router.route('/profile',{name: 'profile'});

Router.route('/show',{name: 'show', 
                      data: {school:'Harvard', where:'commons', when:"5/1/15 9:00pm", dress:"casual"}});

