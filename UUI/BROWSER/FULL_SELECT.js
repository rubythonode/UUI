/**
 * Full-size select class
 */
UUI.FULL_SELECT = CLASS({

	preset : function() {'use strict';
		return NODE;
	},

	init : function(cls, inner, self, params) {'use strict';
		//REQUIRED: params
		//REQUIRED: params.name
		//OPTIONAL: params.value
		//REQUIRED: params.options
		//OPTIONAL: params.wrapperStyle
		//OPTIONAL: params.selectStyle
		//OPTIONAL: params.onChange

		var
		// name
		name = params.name,

		// value
		value = params.value,

		// options
		options = params.options,

		// wrapper style
		wrapperStyle = params.wrapperStyle,

		// select style
		selectStyle = params.selectStyle,

		// on change.
		onChange = params.onChange,

		// wrapper
		wrapper,

		// _select
		_select,

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

		// add select style.
		addSelectStyle,

		// add option.
		addOption,

		// show.
		show,

		// hide.
		hide,

		// check is show.
		checkIsShow;

		wrapper = DIV({
			style : {
				padding : 5,
				backgroundColor : '#FFF',
				position : 'relative'
			},
			children : [ _select = SELECT({
				style : {
					width : '100%',
					border : 'none'
				},
				onChange : onChange,
				name : name
			})]
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
			return _select.getValue();
		};

		self.setValue = setValue = function(value) {
			//REQUIRED: value

			_select.setValue(value);
		};

		if (value !== undefined) {
			setValue(value);
		}

		self.select = select = function() {
			_select.select();
		};

		self.blur = blur = function() {
			_select.blur();
		};

		self.addWrapperStyle = addWrapperStyle = function(style) {
			//REQUIRED: style

			wrapper.addStyle(style);
		};

		if (wrapperStyle !== undefined) {
			addWrapperStyle(wrapperStyle);
		}

		self.addSelectStyle = addSelectStyle = function(style) {
			//REQUIRED: style

			_select.addStyle(style);
		};

		if (selectStyle !== undefined) {
			addSelectStyle(selectStyle);
		}

		self.addOption = addOption = function(option) {
			//REQUIRED: option

			_select.append(option);
		};

		if (options !== undefined) {
			EACH(options, function(option) {
				addOption(option);
			});
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
