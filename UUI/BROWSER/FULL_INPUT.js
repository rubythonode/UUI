/**
 * Full-size input class
 */
UUI.FULL_INPUT = CLASS({

	preset : function() {'use strict';
		return NODE;
	},

	init : function(cls, inner, self, params) {'use strict';
		//REQUIRED: params
		//REQUIRED: params.name
		//OPTIONAL: params.type
		//OPTIONAL: params.placeholder
		//OPTIONAL: params.value
		//OPTIONAL: params.wrapperStyle
		//OPTIONAL: params.inputStyle
		//OPTIONAL: params.onChange
		//OPTIONAL: params.onKeydown
		//OPTIONAL: params.onKeyup
		//OPTIONAL: params.isHidePlaceholder

		var
		// name
		name = params.name,

		// type
		type = params.type,

		// placeholder
		placeholder = params.placeholder,

		// value
		value = params.value,

		// wrapper style
		wrapperStyle = params.wrapperStyle,

		// input style
		inputStyle = params.inputStyle,

		// on change.
		onChange = params.onChange,

		// on keydown.
		onKeydown = params.onKeydown,

		// on keyup.
		onKeyup = params.onKeyup,
		
		// is hide placeholder
		isHidePlaceholder = params.isHidePlaceholder,

		// keydown delay
		keydownDelay,

		// placeholder style
		placeholderStyle = COMBINE_DATA({
			origin : {
				position : 'absolute',
				top : 0,
				color : '#999',
				cursor : 'text'
			},
			extend : inputStyle !== undefined && inputStyle.textAlign === 'center' ? {
				left : 0,
				width : '100%',
				textAlign : 'center'
			} : {
				left : value === undefined ? 0 : value.length,
			}
		}),

		// wrapper
		wrapper,

		// input
		input,

		// placeholder button
		placeholderButton,

		// replace placeholder button.
		replacePlaceholderButton,

		// get input dom.
		getInputDom,

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

		// focus.
		focus,

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
				padding : 5,
				backgroundColor : '#FFF'
			},
			children : [DIV({
				style : {
					position : 'relative',
					overflow : 'hidden'
				},
				children : [ input = INPUT({
					style : {
						width : '100%',
						border : 'none'
					},
					name : name,
					type : type,
					value : value,
					onChange : function(e) {

						replacePlaceholderButton();

						if (onChange !== undefined) {
							onChange(e, self);
						}
					},
					onKeydown : function(e) {

						keydownDelay = DELAY(function() {
							replacePlaceholderButton();
						});

						if (onKeydown !== undefined) {
							onKeydown(e, self);
						}
					},
					onKeyup : function(e) {

						replacePlaceholderButton();

						if (onKeyup !== undefined) {
							onKeyup(e, self);
						}
					}
				}), placeholderButton = UUI.TEXT_BUTTON({
					style : placeholderStyle,
					title : placeholder,
					onTap : function() {
						focus();
					}
				})]
			})]
		});

		replacePlaceholderButton = RAR(function() {

			var
			// value
			value = input.getValue(),

			// count
			count = 0,

			// font size str
			fontSizeStr = input.getStyle('fontSize'),

			// font size
			fontSize = fontSizeStr === undefined ? 12 : INTEGER(fontSizeStr);

			if (input.getStyle('textAlign') === 'center') {

				placeholderButton.addStyle({
					left : 0,
					width : '100%',
					textAlign : 'center'
				});

				if (value === '') {
					placeholderButton.show();
				} else {
					placeholderButton.hide();
				}

			} else if ( isHidePlaceholder === true) {

				placeholderButton.addStyle({
					left : 0,
					width : 'auto',
					textAlign : 'left'
				});

				if (value === '') {
					placeholderButton.show();
				} else {
					placeholderButton.hide();
				}

			} else {

				REPEAT(value.length, function(i) {

					var
					// c
					c = value.charAt(i);

					if (escape(c).length > 4) {
						count += 1.8;
					} else {
						count += 1;
					}
				});

				placeholderButton.addStyle({
					left : count * fontSize / 1.6 + (count > 0 ? 5 : 0),
					width : 'auto',
					textAlign : 'left'
				});
			}
		});

		wrapper.addAfterRemoveProc(function() {
			if (keydownDelay !== undefined) {
				keydownDelay.remove();
			}
		});

		// for VALID_FORM.
		wrapper.isValidWrapper = true;

		self.getInputDom = getInputDom = function() {
			return input;
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

		self.focus = focus = function() {
			input.focus();
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
			placeholderButton.addStyle(style);
			placeholderButton.addStyle(placeholderStyle);
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
