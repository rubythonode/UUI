/**
 * IMG Button class
 */
UUI.IMG_BUTTON = CLASS({

	preset : function() {'use strict';
		return NODE;
	},

	init : function(cls, inner, self, params) {'use strict';
		//REQUIRED: params
		//OPTIONAL: params.img
		//OPTIONAL: params.href
		//OPTIONAL: params.target
		//OPTIONAL: params.style
		//OPTIONAL: params.onTap
		//OPTIONAL: params.onMouseover
		//OPTIONAL: params.onMouseout

		var
		// img
		img = params.img,

		// href
		href = params.href,

		// target
		target = params.target,

		// style
		style = params.style,

		// on tap
		onTap = params.onTap,

		// on mouseover
		onMouseover = params.onMouseover,

		// on mouseout
		onMouseout = params.onMouseout,

		// a
		a,

		// get img.
		getImg,

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
		checkIsShow,

		// tap.
		tap;

		a = A({
			style : {
				cursor : 'pointer',
				textDecoration : 'none',
				touchCallout : 'none',
				userSelect : 'none'
			},
			href : href,
			target : target,
			children : [img]
		});

		if (onTap !== undefined) {
			EVENT({
				node : a,
				name : 'tap'
			}, function(e) {
				onTap(e, self);
			});
		}

		if (onMouseover !== undefined) {
			EVENT({
				node : a,
				name : 'mouseover'
			}, function(e) {
				onMouseover(e, self);
			});
		}

		if (onMouseout !== undefined) {
			EVENT({
				node : a,
				name : 'mouseout'
			}, function(e) {
				onMouseout(e, self);
			});
		}

		self.getImg = getImg = function() {
			return img;
		};

		self.getDom = getDom = function() {
			return a;
		};

		self.append = append = function(node) {
			//REQUIRED: node

			a.append(node);
		};

		self.appendTo = appendTo = function(node) {
			//REQUIRED: node

			node.append(a);

			return self;
		};

		self.prepend = prepend = function(node) {
			//REQUIRED: node

			a.prepend(node);
		};

		self.prependTo = prependTo = function(node) {
			//REQUIRED: node

			node.prepend(a);

			return self;
		};

		self.after = after = function(node) {
			//REQUIRED: node

			a.after(node);
		};

		self.insertAfter = insertAfter = function(node) {
			//REQUIRED: node

			node.after(a);

			return self;
		};

		self.before = before = function(node) {
			//REQUIRED: node

			a.before(node);
		};

		self.insertBefore = insertBefore = function(node) {
			//REQUIRED: node

			node.before(a);

			return self;
		};

		self.remove = remove = function() {
			a.remove();
		};

		self.removeAllChildren = removeAllChildren = function() {
			a.removeAllChildren();
		};

		self.getParent = getParent = function() {
			return a.getParent();
		};

		self.setParent = setParent = function(parent) {
			//REQUIRED: parent

			a.setParent(parent);
		};

		self.getChildren = getChildren = function() {
			return a.getChildren();
		};

		self.addStyle = addStyle = function(style) {
			//REQUIRED: style

			a.addStyle(style);
		};

		if (style !== undefined) {
			addStyle(style);
		}

		self.show = show = function() {
			a.show();
		};

		self.hide = hide = function() {
			a.hide();
		};

		self.checkIsShow = checkIsShow = function() {
			return a.checkIsShow();
		};

		self.tap = tap = function() {
			onTap();
		};
	}
});
