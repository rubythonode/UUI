/**
 * Notice class
 */
UUI.NOTICE = CLASS({

	init : function(inner, self, params) {'use strict';
		//REQUIRED: params
		//OPTIONAL: params.wrapperStyle
		//OPTIONAL: params.contentStyle
		//OPTIONAL: params.isCannotClose
		//OPTIONAL: params.on
		//REQUIRED: params.msg

		var
		// wrapper style
		wrapperStyle = params.wrapperStyle,

		// content style
		contentStyle = params.contentStyle,

		// is cannot close
		isCannotClose = params.isCannotClose,

		// on
		on = params.on,

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

		// empty.
		empty,

		// get children.
		getChildren,

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
			on : on,
			c : [msg]
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

		self.empty = empty = function() {
			modal.empty();
		};

		self.getChildren = getChildren = function() {
			return modal.getChildren();
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
			DELAY(2, function() {
				modal.close();
			});
		}
	}
});
