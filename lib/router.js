Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {name: 'welcome'});

Router.route('/showall', {name: 'showall'});

Router.route('/find',{name: 'find'});

Router.route('/show',{name: 'show', 
                      data: {school:'Harvard', where:'commons', when:"5/1/15 9:00pm"}});

