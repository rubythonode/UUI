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
		//OPTIONAL: params.childs
		//OPTIONAL: params.style
		//OPTIONAL: params.errorMsgStyle

		var
		// error msgs
		errorMsgs = params === undefined ? undefined : params.errorMsgs,

		// on submit
		onSubmit = params === undefined ? undefined : params.onSubmit,

		// childs
		childs = params === undefined ? undefined : params.childs,

		// style
		style = params === undefined ? undefined : params.style,

		// error msg style
		errorMsgStyle = params === undefined ? undefined : params.errorMsgStyle,

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

		// remove all childs.
		removeAllChilds,

		// get parent.
		getParent,

		// set parent.
		setParent,

		// get childs.
		getChilds,

		// get data.
		getData,

		// set data.
		setData,

		// add submit proc.
		addSubmitProc,

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

		form = FORM();

		self.getDom = getDom = function() {
			return form;
		};

		self.append = append = function(node) {
			//REQUIRED: node

			form.append(node);
		};

		if (childs !== undefined) {
			EACH(childs, function(child, i) {
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

		self.removeAllChilds = removeAllChilds = function() {
			form.removeAllChilds();
		};

		self.getParent = getParent = function() {
			return form.getParent();
		};

		self.setParent = setParent = function(parent) {
			//REQUIRED: parent

			form.setParent(parent);
		};

		self.getChilds = getChilds = function() {
			return form.getChilds();
		};

		self.getData = getData = function() {
			return form.getData();
		};

		self.setData = setData = function(data) {
			//REQUIRED: data

			return form.setData(data);
		};

		self.addSubmitProc = addSubmitProc = function(func) {
			//REQUIRED: func

			form.addSubmitProc(function(e) {
				func(e, self);
			});
		};

		if (onSubmit !== undefined) {
			addSubmitProc(onSubmit);
		}

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

				EACH(node.getChilds(), function(child) {

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
								childs : [errorMsg]
							}));

							REMOVE_AT({
								data : errors,
								key : name
							});

							DELAY(2, function() {
								errorMsgP.remove();
							});
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

				EACH(node.getChilds(), function(child) {

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
