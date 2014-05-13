/**
 * Panel(wrapper layer + content layer) class
 */
UUI.PANEL = CLASS({

	preset : function() {'use strict';
		return NODE;
	},

	init : function(cls, inner, self, params) {'use strict';
		//OPTIONAL: params
		//OPTIONAL: params.children
		//OPTIONAL: params.wrapperStyle
		//OPTIONAL: params.contentStyle

		var
		// children
		children = params === undefined ? undefined : params.children,

		// wrapper style
		wrapperStyle = params === undefined ? undefined : params.wrapperStyle,

		// content style
		contentStyle = params === undefined ? undefined : params.contentStyle,

		// wrapper
		wrapper,

		// content
		content,

		// get dom.
		getDom,

		// append.
		append,

		// prepend.
		prepend,

		// remove all children.
		removeAllChildren,

		// get children.
		getChildren,

		// add wrapper style.
		addWrapperStyle,

		// add content style.
		addContentStyle;

		wrapper = DIV({
			children : [ content = DIV()]
		});

		self.getDom = getDom = function() {
			return wrapper;
		};

		self.append = append = function(node) {
			//REQUIRED: node

			content.append(node);
		};

		if (children !== undefined) {
			EACH(children, function(child, i) {
				append(child);
			});
		}

		self.prepend = prepend = function(node) {
			//REQUIRED: node

			content.prepend(node);
		};

		self.removeAllChildren = removeAllChildren = function() {
			content.removeAllChildren();
		};

		self.getChildren = getChildren = function() {
			return content.getChildren();
		};

		self.addWrapperStyle = addWrapperStyle = function(style) {
			//REQUIRED: style

			wrapper.addStyle(style);
		};

		if (wrapperStyle !== undefined) {
			addWrapperStyle(wrapperStyle);
		}

		self.addContentStyle = addContentStyle = function(style) {
			//REQUIRED: style

			content.addStyle(style);
		};

		if (contentStyle !== undefined) {
			addContentStyle(contentStyle);
		}
	}
});
