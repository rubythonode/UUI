/**
 * Full-size checkbox class
 */
UUI.FULL_CHECKBOX = CLASS({

	preset : function() {'use strict';
		return NODE;
	},

	init : function(cls, inner, self, params) {'use strict';
		//REQUIRED: params
		//REQUIRED: params.name
		//REQUIRED: params.label
		//OPTIONAL: params.value
		//OPTIONAL: params.children
		//OPTIONAL: params.wrapperStyle
		//OPTIONAL: params.inputStyle
		//OPTIONAL: params.onChange

		var
		// name
		name = params.name,

		// label
		label = params.label,

		// value
		value = params.value,

		// children
		children = params.children,

		// wrapper style
		wrapperStyle = params.wrapperStyle,

		// input style
		inputStyle = params.inputStyle,

		// on change.
		onChange = params.onChange,

		// wrapper
		wrapper,

		// input
		input,

		// label dom
		labelDom,

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

		// get name.
		getName,

		// get value.
		getValue,

		// set value.
		setValue,

		// select.
		select,

		// blur.
		blur,

		// add wrapper style.
		addWrapperStyle,

		// add input style.
		addInputStyle,

		// show.
		show,

		// hide.
		hide,

		// check is show.
		checkIsShow;

		wrapper = DIV({
			style : {
				position : 'relative'
			},
			on : {
				tap : function(e) {
					input.toggleCheck();
					e.stop();
				}
			},
			children : [ input = INPUT({
				style : {
					flt : 'left',
					marginRight : 5
				},
				name : name,
				type : 'checkbox',
				onChange : function(e) {
					if (onChange !== undefined) {
						onChange(e, self);
					}
				},
				value : value
			}), labelDom = SPAN({
				style : {
					flt : 'left',
					cursor : 'pointer'
				},
				children : [label]
			}), CLEAR_BOTH()]
		});

		// for VALID_FORM.
		wrapper.isValidWrapper = true;

		self.getDom = getDom = function() {
			return wrapper;
		};

		self.append = append = function(node) {
			//REQUIRED: node

			wrapper.append(node);
		};

		if (children !== undefined) {
			EACH(children, function(child, i) {
				labelDom.after(child);
			});
		}

		self.appendTo = appendTo = function(node) {
			//REQUIRED: node

			node.append(wrapper);

			return self;
		};

		self.prepend = prepend = function(node) {
			//REQUIRED: node

			wrapper.prepend(node);
		};

		self.prependTo = prependTo = function(node) {
			//REQUIRED: node

			node.prepend(wrapper);

			return self;
		};

		self.after = after = function(node) {
			//REQUIRED: node

			wrapper.after(node);
		};

		self.insertAfter = insertAfter = function(node) {
			//REQUIRED: node

			node.after(wrapper);

			return self;
		};

		self.before = before = function(node) {
			//REQUIRED: node

			wrapper.before(node);
		};

		self.insertBefore = insertBefore = function(node) {
			//REQUIRED: node

			node.before(wrapper);

			return self;
		};

		self.remove = remove = function() {
			wrapper.remove();
		};

		self.removeAllChildren = removeAllChildren = function() {
			wrapper.removeAllChildren();
		};

		self.getParent = getParent = function() {
			return wrapper.getParent();
		};

		self.setParent = setParent = function(parent) {
			//REQUIRED: parent

			wrapper.setParent(parent);
		};

		self.getChildren = getChildren = function() {
			return wrapper.getChildren();
		};

		self.getName = getName = function() {
			return name;
		};

		self.getValue = getValue = function() {
			return input.getValue();
		};

		self.setValue = setValue = function(value) {
			//REQUIRED: value

			input.setValue(value);
		};

		self.select = select = function() {
			input.select();
		};

		self.blur = blur = function() {
			input.blur();
		};

		self.addWrapperStyle = addWrapperStyle = function(style) {
			//REQUIRED: style

			wrapper.addStyle(style);
		};

		if (wrapperStyle !== undefined) {
			addWrapperStyle(wrapperStyle);
		}

		self.addInputStyle = addInputStyle = function(style) {
			//REQUIRED: style

			input.addStyle(style);
		};

		if (inputStyle !== undefined) {
			addInputStyle(inputStyle);
		}

		self.show = show = function() {
			wrapper.show();
		};

		self.hide = hide = function() {
			wrapper.hide();
		};

		self.checkIsShow = checkIsShow = function() {
			return wrapper.checkIsShow();
		};
	}
});
