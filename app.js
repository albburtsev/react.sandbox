jQuery(function() {
	'use strict';

	var appNode = $('.js-app').get(0);

	var Hello = React.createClass({
		render: function() {
			var element = React.createElement('div', null, 'Hello, world!');
			return element;
		}
	});

	React.render(
		React.createElement(Hello),
		appNode
	);
});
