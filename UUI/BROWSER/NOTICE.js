/**
 * Notice class
 */
UUI.NOTICE = CLASS({

	preset : function() {'use strict';
		return NODE;
	},

	init : function(cls, inner, self, params) {'use strict';
		//REQUIRED: params
		//OPTIONAL: params.wrapperStyle
		//OPTIONAL: params.contentStyle
		//OPTIONAL: params.isCannotClose
		//REQUIRED: params.msg

		var
		// wrapper style
		wrapperStyle = params.wrapperStyle,

		// content style
		contentStyle = params.contentStyle,

		// is cannot close
		isCannotClose = params.isCannotClose,

		// msg
		msg = params.msg,

		// modal
		modal,

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

		// remove all childs.
		removeAllChilds,

		// get parent.
		getParent,

		// set parent.
		setParent,

		// get childs.
		getChilds,

		// add wrapper style.
		addWrapperStyle,

		// add content style.
		addContentStyle;

		modal = UUI.MODAL({
			wrapperStyle : wrapperStyle,
			contentStyle : contentStyle,
			isCannotClose : true,
			childs : [msg]
		});

		self.getDom = getDom = function() {
			return modal;
		};

		self.append = append = function(node) {
			//REQUIRED: node

			modal.append(node);
		};

		self.appendTo = appendTo = function(node) {
			//REQUIRED: node

			node.append(modal);

			return self;
		};

		self.prepend = prepend = function(node) {
			//REQUIRED: node

			modal.prepend(node);
		};

		self.prependTo = prependTo = function(node) {
			//REQUIRED: node

			node.prepend(modal);

			return self;
		};

		self.after = after = function(node) {
			//REQUIRED: node

			modal.after(node);
		};

		self.insertAfter = insertAfter = function(node) {
			//REQUIRED: node

			node.after(modal);

			return self;
		};

		self.before = before = function(node) {
			//REQUIRED: node

			modal.before(node);
		};

		self.insertBefore = insertBefore = function(node) {
			//REQUIRED: node

			node.before(modal);

			return self;
		};

		self.remove = remove = function() {
			modal.remove();
		};

		self.removeAllChilds = removeAllChilds = function() {
			modal.removeAllChilds();
		};

		self.getParent = getParent = function() {
			return modal.getParent();
		};

		self.setParent = setParent = function(parent) {
			//REQUIRED: parent

			modal.setParent(parent);
		};

		self.getChilds = getChilds = function() {
			return modal.getChilds();
		};

		self.addWrapperStyle = addWrapperStyle = function(style) {
			//REQUIRED: style

			modal.addWrapperStyle(style);
		};

		self.addContentStyle = addContentStyle = function(style) {
			//REQUIRED: style

			modal.addContentStyle(style);
		};

		if (isCannotClose !== true) {
			DELAY(2, remove);
		}

	}
});
