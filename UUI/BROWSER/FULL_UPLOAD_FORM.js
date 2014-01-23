/**
 * Full-size upload form class
 */
UUI.FULL_UPLOAD_FORM = CLASS({

	preset : function() {'use strict';
		return NODE;
	},

	init : function(cls, inner, self, params) {'use strict';
		//REQUIRED: params
		//OPTIONAL: params.wrapperStyle
		//OPTIONAL: params.formStyle
		//OPTIONAL: params.inputStyle
		//OPTIONAL: params.uploadingStyle
		//OPTIONAL: params.box
		//REQUIRED: params.afterUpload
		//OPTIONAL: params.onChange

		var
		// wrapper style
		wrapperStyle = params.wrapperStyle,

		// form style
		formStyle = params.formStyle,

		// input style
		inputStyle = params.inputStyle,

		// uploading style
		uploadingStyle = params.uploadingStyle,

		// box
		box = params.box,

		// after upload
		afterUpload = params.afterUpload,

		// on change.
		onChange = params.onChange,

		// wrapper
		wrapper,

		// form
		form,

		// input
		input,

		// iframe
		iframe,

		// uploading
		uploading,

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

		// show.
		show,

		// hide.
		hide,

		// check is show.
		checkIsShow,

		// select.
		select,

		// add wrapper style.
		addWrapperStyle,

		// add form style.
		addFormStyle,

		// add input style.
		addInputStyle,

		// add uplading style.
		addUploadingStyle,

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
				background : '#FFF',
				position : 'relative'
			},
			childs : [ iframe = IFRAME({
				style : {
					display : 'none'
				},
				name : '__UPLOAD_FORM_' + self.id
			}), form = FORM({
				action : '/' + box.boxName + '/__UPLOAD?' + CONFIG.version,
				target : '__UPLOAD_FORM_' + self.id,
				method : 'POST',
				enctype : 'multipart/form-data',
				style : {
					padding : 5
				},
				childs : [ input = INPUT({
					type : 'file',
					multiple : true,
					style : {
						width : '100%',
						height : '100%',
						color : '#000',
						border : 'none'
					}
				}), INPUT({
					type : 'submit',
					style : {
						visibility : 'hidden',
						position : 'absolute'
					}
				})]
			}), uploading = UUI.PANEL({
				wrapperStyle : {
					position : 'absolute',
					top : 0,
					left : 0,
					width : '100%',
					height : '100%',
					display : 'none'
				},
				contentStyle : {
					backgroundColor : '#000',
					position : 'absolute',
					top : '50%',
					left : '50%',
					width : 100,
					marginLeft : -55,
					marginTop : -13,
					padding : 5,
					textAlign : 'center',
					borderRadius : 10
				},
				childs : ['Uploading...']
			})]
		});

		// for VALID_FORM.
		form.isValidWrapper = true;

		EVENT({
			node : iframe,
			name : 'load'
		}, function(e) {

			var
			// frame
			frame = global['__UPLOAD_FORM_' + self.id],

			// file datas
			fileDatas = frame !== undefined ? frame.fileDatas : undefined,

			// error code
			errorCode = frame !== undefined ? frame.errorCode : undefined;

			if (fileDatas !== undefined || errorCode !== undefined) {

				EACH(fileDatas, function(fileData, i) {
					fileDatas[i] = UNPACK_DATA(fileData);
				});

				input.setValue('');

				afterUpload(fileDatas, errorCode);
			}

			uploading.hide();
		});

		EVENT({
			node : input,
			name : 'change'
		}, function(e) {
			uploading.show();
			form.submit(true);
		});

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

		self.show = show = function() {
			wrapper.show();
		};

		self.hide = hide = function() {
			wrapper.hide();
		};

		self.checkIsShow = checkIsShow = function() {
			return wrapper.checkIsShow();
		};

		self.select = select = function() {
			input.select();
		};

		self.addWrapperStyle = addWrapperStyle = function(style) {
			//REQUIRED: style

			wrapper.addStyle(style);
		};

		if (wrapperStyle !== undefined) {
			addWrapperStyle(wrapperStyle);
		}

		self.addFormStyle = addFormStyle = function(style) {
			//REQUIRED: style

			form.addStyle(style);
		};

		if (formStyle !== undefined) {
			addFormStyle(formStyle);
		}

		self.addInputStyle = addInputStyle = function(style) {
			//REQUIRED: style

			input.addStyle(style);
		};

		if (inputStyle !== undefined) {
			addInputStyle(inputStyle);
		}

		self.addUploadingStyle = addUploadingStyle = function(style) {
			//REQUIRED: style

			uploading.addWrapperStyle(style);
		};

		if (uploadingStyle !== undefined) {
			addUploadingStyle(uploadingStyle);
		}

		self.addChangeValueProc = addChangeValueProc = function(proc) {
			//REQUIRED: proc

			input.addChangeValueProc(proc);
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
