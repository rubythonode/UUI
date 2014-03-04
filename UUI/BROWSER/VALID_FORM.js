/**
 * Validatable form class
 */
UUI.VALID_FORM = CLASS({

	preset : function() {'use strict';
		return NODE;
	},

	init : function(cls, inner, self, params) {'use strict';
		//OPTIONAL: params
		//OPTIONAL: params.errorMsgs
		//OPTIONAL: params.onSubmit
		//OPTIONAL: params.children
		//OPTIONAL: params.style
		//OPTIONAL: params.errorMsgStyle

		var
		// error msgs
		errorMsgs = params === undefined ? undefined : params.errorMsgs,

		// on submit
		onSubmit = params === undefined ? undefined : params.onSubmit,

		// children
		children = params === undefined ? undefined : params.children,

		// style
		style = params === undefined ? undefined : params.style,

		// error msg style
		errorMsgStyle = params === undefined ? undefined : params.errorMsgStyle,

		// delays
		delays = [],

		// form
		form,

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

		// get data.
		getData,

		// set data.
		setData,

		// submit.
		submit,

		// show errors.
		showErrors,

		// get error msgs.
		getErrorMsgs,

		// add style.
		addStyle,

		// show.
		show,

		// hide.
		hide,

		// check is show.
		checkIsShow;

		form = FORM({
			onSubmit : function(e) {
				if (onSubmit !== undefined) {
					onSubmit(e, self);
				}
			}
		});

		form.addAfterRemoveProc(function() {
			EACH(delays, function(delay) {
				delay.remove();
			});
		});

		self.getDom = getDom = function() {
			return form;
		};

		self.append = append = function(node) {
			//REQUIRED: node

			form.append(node);
		};

		if (children !== undefined) {
			EACH(children, function(child, i) {
				append(child);
			});
		}

		self.appendTo = appendTo = function(node) {
			//REQUIRED: node

			node.append(form);

			return self;
		};

		self.prepend = prepend = function(node) {
			//REQUIRED: node

			form.prepend(node);
		};

		self.prependTo = prependTo = function(node) {
			//REQUIRED: node

			node.prepend(form);

			return self;
		};

		self.after = after = function(node) {
			//REQUIRED: node

			form.after(node);
		};

		self.insertAfter = insertAfter = function(node) {
			//REQUIRED: node

			node.after(form);

			return self;
		};

		self.before = before = function(node) {
			//REQUIRED: node

			form.before(node);
		};

		self.insertBefore = insertBefore = function(node) {
			//REQUIRED: node

			node.before(form);

			return self;
		};

		self.remove = remove = function() {
			form.remove();
		};

		self.removeAllChildren = removeAllChildren = function() {
			form.removeAllChildren();
		};

		self.getParent = getParent = function() {
			return form.getParent();
		};

		self.setParent = setParent = function(parent) {
			//REQUIRED: parent

			form.setParent(parent);
		};

		self.getChildren = getChildren = function() {
			return form.getChildren();
		};

		self.getData = getData = function() {
			return form.getData();
		};

		self.setData = setData = function(data) {
			//REQUIRED: data

			return form.setData(data);
		};

		self.submit = submit = function() {
			form.submit();
		};

		self.showErrors = showErrors = function(_errors) {
			//REQUIRED: _errors

			var
			// errors
			errors = COPY_DATA(_errors),

			// f.
			f = function(node) {

				EACH(node.getChildren(), function(child) {

					var
					// name
					name,

					// error
					error,

					// error msg
					errorMsg,

					// error msg p
					errorMsgP;

					if (child.getValue !== undefined && child.getName !== undefined) {

						name = child.getName();
						error = errors[name];

						if (error !== undefined && errorMsgs !== undefined) {
							errorMsg = errorMsgs[name][error.type];

							if ( typeof errorMsg === 'function') {
								if (error.validParam !== undefined) {
									errorMsg = errorMsg(error.validParam);
								} else {
									errorMsg = errorMsg(error.validParams);
								}
							}

							(child.getParent().getParent().isValidWrapper === true ? child.getParent().getParent() : (child.getParent().isValidWrapper === true ? child.getParent() : child)).after( errorMsgP = P({
								style : errorMsgStyle,
								children : [errorMsg]
							}));

							REMOVE_AT({
								data : errors,
								key : name
							});

							delays.push(DELAY(2, function(delay) {
								errorMsgP.remove();

								REMOVE({
									data : delays,
									value : delay
								});
							}));
						}
					}

					f(child);
				});
			};

			f(self);
		};

		self.getErrorMsgs = getErrorMsgs = function(_errors) {
			//REQUIRED: _errors

			var
			// errors
			errors = COPY_DATA(_errors),

			// msgs
			msgs = [],

			// f.
			f = function(node) {

				EACH(node.getChildren(), function(child) {

					var
					// name
					name,

					// error
					error,

					// error msg
					errorMsg;

					if (child.getValue !== undefined && child.getName !== undefined) {

						name = child.getName();
						error = errors[name];

						if (error !== undefined && errorMsgs !== undefined) {
							errorMsg = errorMsgs[name][error.type];

							if ( typeof errorMsg === 'function') {
								if (error.validParam !== undefined) {
									errorMsg = errorMsg(error.validParam);
								} else {
									errorMsg = errorMsg(error.validParams);
								}
							}

							msgs.push(errorMsg);

							REMOVE_AT({
								data : errors,
								key : name
							});
						}
					}

					f(child);
				});
			};

			f(self);

			return msgs;
		};

		self.addStyle = addStyle = function(style) {
			//REQUIRED: style

			form.addStyle(style);
		};

		if (style !== undefined) {
			addStyle(style);
		}

		self.show = show = function() {
			form.show();
		};

		self.hide = hide = function() {
			form.hide();
		};

		self.checkIsShow = checkIsShow = function() {
			return form.checkIsShow();
		};
	}
});
