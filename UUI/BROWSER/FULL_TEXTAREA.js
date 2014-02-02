/**
 * Full-size textarea class
 */
UUI.FULL_TEXTAREA = CLASS({

	preset : function() {'use strict';
		return NODE;
	},

	init : function(cls, inner, self, params) {'use strict';
		//REQUIRED: params
		//REQUIRED: params.name
		//OPTIONAL: params.placeholder
		//OPTIONAL: params.value
		//OPTIONAL: params.wrapperStyle
		//OPTIONAL: params.textareaStyle
		//OPTIONAL: params.onChange

		var
		// name
		name = params.name,

		// placeholder
		placeholder = params.placeholder,

		// value
		value = params.value,

		// wrapper style
		wrapperStyle = params.wrapperStyle,

		// textarea style
		textareaStyle = params.textareaStyle,

		// on change.
		onChange = params.onChange,

		// wrapper
		wrapper,

		// textarea
		textarea,

		// get textarea dom.
		getTextareaDom,

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

		// get name.
		getName,

		// get value.
		getValue,

		// set value.
		setValue,

		// select.
		select,

		// focus.
		focus,

		// blur.
		blur,

		// add wrapper style.
		addWrapperStyle,

		// add input style.
		addTextareaStyle,

		// add change value proc.
		addChangeValueProc,

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
				position : 'relative',
				height : 100
			},
			childs : [ textarea = TEXTAREA({
				style : {
					width : '100%',
					height : '100%',
					backgroundColor : 'transparent',
					border : 'none'
				},
				name : name,
				placeholder : placeholder,
				value : value
			})]
		});

		// for VALID_FORM.
		wrapper.isValidWrapper = true;

		self.getTextareaDom = getTextareaDom = function() {
			return textarea;
		};

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

		self.removeAllChilds = removeAllChilds = function() {
			wrapper.removeAllChilds();
		};

		self.getParent = getParent = function() {
			return wrapper.getParent();
		};

		self.setParent = setParent = function(parent) {
			//REQUIRED: parent

			wrapper.setParent(parent);
		};

		self.getChilds = getChilds = function() {
			return wrapper.getChilds();
		};

		self.getName = getName = function() {
			return name;
		};

		self.getValue = getValue = function() {
			return textarea.getValue();
		};

		self.setValue = setValue = function(value) {
			//REQUIRED: value

			textarea.setValue(value);
		};

		self.select = select = function() {
			textarea.select();
		};

		self.focus = focus = function() {
			textarea.focus();
		};

		self.blur = blur = function() {
			textarea.blur();
		};

		self.addWrapperStyle = addWrapperStyle = function(style) {
			//REQUIRED: style

			wrapper.addStyle(style);
		};

		if (wrapperStyle !== undefined) {
			addWrapperStyle(wrapperStyle);
		}

		self.addTextareaStyle = addTextareaStyle = function(style) {
			//REQUIRED: style

			textarea.addStyle(style);
		};

		if (textareaStyle !== undefined) {
			addTextareaStyle(textareaStyle);
		}

		self.addChangeValueProc = addChangeValueProc = function(proc) {
			//REQUIRED: proc

			textarea.addChangeValueProc(proc);
		};

		if (onChange !== undefined) {
			addChangeValueProc(onChange);
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
