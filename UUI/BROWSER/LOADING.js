/**
 * Loading class
 */
UUI.LOADING = CLASS({

	init : function(cls, inner, self, params) {'use strict';
		//REQUIRED: params
		//OPTIONAL: params.wrapperStyle
		//OPTIONAL: params.contentStyle
		//OPTIONAL: params.indicator
		//REQUIRED: params.msg

		var
		// wrapper style
		wrapperStyle = params.wrapperStyle,

		// content style
		contentStyle = params.contentStyle,

		// indicator
		indicator = params.indicator,

		// msg
		msg = params.msg,

		// modal
		modal,

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
			childs : [indicator === undefined ? '' : indicator, P({
				style : indicator === undefined ? {} : {
					marginTop : 10
				},
				childs : [msg]
			})]
		});

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

	}
});
