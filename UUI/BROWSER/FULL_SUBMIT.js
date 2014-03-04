/**
 * Full-size submit class
 */
UUI.FULL_SUBMIT = CLASS({

	preset : function() {'use strict';
		return NODE;
	},

	init : function(cls, inner, self, params) {'use strict';
		//OPTIONAL: params
		//OPTIONAL: params.style
		//OPTIONAL: params.value
		//OPTIONAL: params.onMouseover
		//OPTIONAL: params.onMouseout

		var
		// style
		style = params === undefined ? undefined : params.style,

		// value
		value = params === undefined ? undefined : params.value,

		// on mouseover
		onMouseover = params === undefined ? undefined : params.onMouseover,

		// on mouseout
		onMouseout = params === undefined ? undefined : params.onMouseout,

		// input
		input,

		// get dom.
		getDom,

		// append.
		append,

		// append to.
		appendTo,

		// prepend.
		prepend,

		// prepend to.
		prependTo,

		// after.
		after,

		// insert after.
		insertAfter,

		// before.
		before,

		// insert before.
		insertBefore,

		// remove.
		remove,

		// remove all children.
		removeAllChildren,

		// get parent.
		getParent,

		// set parent.
		setParent,

		// get children.
		getChildren,

		// add style.
		addStyle,

		// show.
		show,

		// hide.
		hide,

		// check is show.
		checkIsShow;

		input = INPUT({
			type : 'submit',
			style : {
				border : 'none',
				width : '100%',
				padding : '10px 0',
				cursor : 'pointer'
			},
			onMouseover : onMouseover,
			onMouseout : onMouseout
		});

		if (value !== undefined) {
			input.setValue(value);
		}

		self.getDom = getDom = function() {
			return input;
		};

		self.append = append = function(node) {
			//REQUIRED: node

			input.append(node);
		};

		self.appendTo = appendTo = function(node) {
			//REQUIRED: node

			node.append(input);

			return self;
		};

		self.prepend = prepend = function(node) {
			//REQUIRED: node

			input.prepend(node);
		};

		self.prependTo = prependTo = function(node) {
			//REQUIRED: node

			node.prepend(input);

			return self;
		};

		self.after = after = function(node) {
			//REQUIRED: node

			input.after(node);
		};

		self.insertAfter = insertAfter = function(node) {
			//REQUIRED: node

			node.after(input);

			return self;
		};

		self.before = before = function(node) {
			//REQUIRED: node

			input.before(node);
		};

		self.insertBefore = insertBefore = function(node) {
			//REQUIRED: node

			node.before(input);

			return self;
		};

		self.remove = remove = function() {
			input.remove();
		};

		self.removeAllChildren = removeAllChildren = function() {
			input.removeAllChildren();
		};

		self.getParent = getParent = function() {
			return input.getParent();
		};

		self.setParent = setParent = function(parent) {
			//REQUIRED: parent

			input.setParent(parent);
		};

		self.getChildren = getChildren = function() {
			return input.getChildren();
		};

		self.addStyle = addStyle = function(style) {
			//REQUIRED: style

			input.addStyle(style);
		};

		if (style !== undefined) {
			addStyle(style);
		}

		self.show = show = function() {
			input.show();
		};

		self.hide = hide = function() {
			input.hide();
		};

		self.checkIsShow = checkIsShow = function() {
			return input.checkIsShow();
		};
	}
});
