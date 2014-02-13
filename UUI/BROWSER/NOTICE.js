/**
 * Notice class
 */
UUI.NOTICE = CLASS({

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

		// prepend.
		prepend,

		// after.
		after,

		// before.
		before,

		// remove.
		remove,

		// remove all childs.
		removeAllChilds,

		// get childs.
		getChilds,

		// add wrapper style.
		addWrapperStyle,

		// add content style.
		addContentStyle;

		modal = UUI.MODAL({
			wrapperStyle : COMBINE_DATA({
				origin : {
					textAlign : 'center'
				},
				extend : wrapperStyle
			}),
			contentStyle : contentStyle,
			isCannotClose : true,
			childs : [msg]
		});

		self.getDom = getDom = function() {
			return modal.getDom();
		};

		self.append = append = function(node) {
			//REQUIRED: node

			modal.append(node);
		};

		self.prepend = prepend = function(node) {
			//REQUIRED: node

			modal.prepend(node);
		};

		self.after = after = function(node) {
			//REQUIRED: node

			modal.after(node);
		};

		self.before = before = function(node) {
			//REQUIRED: node

			modal.before(node);
		};

		self.remove = remove = function() {
			modal.remove();
		};

		self.removeAllChilds = removeAllChilds = function() {
			modal.removeAllChilds();
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
