/**
 * Modal class
 */
UUI.MODAL = CLASS({

	preset : function() {'use strict';
		return NODE;
	},

	init : function(cls, inner, self, params) {'use strict';
		//OPTIONAL: params
		//OPTIONAL: params.childs
		//OPTIONAL: params.wrapperStyle
		//OPTIONAL: params.contentStyle
		//OPTIONAL: params.xStyle
		//OPTIONAL: params.xImg
		//OPTIONAL: params.isCannotClose
		//OPTIONAL: params.onClose

		var
		// childs
		childs = params === undefined ? undefined : params.childs,

		// wrapper style
		wrapperStyle = params === undefined ? undefined : params.wrapperStyle,

		// content style
		contentStyle = params === undefined ? undefined : params.contentStyle,

		// x style
		xStyle = params === undefined ? undefined : params.xStyle,

		// x img
		xImg = params === undefined ? undefined : params.xImg,

		// is cannot close
		isCannotClose = params === undefined ? undefined : params.isCannotClose,

		// on close
		onClose = params === undefined ? undefined : params.onClose,

		// wrapper
		wrapper,

		// content
		content,

		// resize event
		resizeEvent,

		// scroll event
		scrollEvent,

		// esc event
		escEvent,

		// move to center.
		moveToCenter,

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

		// add wrapper style.
		addWrapperStyle,

		// add content style.
		addContentStyle;

		if (xImg === undefined && isCannotClose !== true) {
			xImg = IMG({
				src : UUI.R('x.png')
			});
		}

		wrapper = DIV({
			childs : [ content = DIV(), isCannotClose === true ? '' : UUI.IMG_BUTTON({
				style : COMBINE_DATA({
					origin : {
						position : 'absolute',
						top : -10,
						right : -10,
						padding : 0
					},
					extend : xStyle
				}),
				img : xImg,
				onTap : function() {

					remove();

					if (onClose !== undefined) {
						onClose();
					}
				}
			})]
		});

		moveToCenter = function() {

			var
			// left
			left = (WIN_WIDTH() - wrapper.getWidth()) / 2 + SCROLL_LEFT(),

			// top
			top = (WIN_HEIGHT() - wrapper.getHeight()) / 2 + SCROLL_TOP();

			wrapper.addStyle({
				position : 'absolute',
				left : left < 0 ? 0 : left,
				top : top < 0 ? 0 : top
			});
		};

		resizeEvent = EVENT({
			name : 'resize'
		}, moveToCenter);

		scrollEvent = EVENT({
			name : 'scroll'
		}, moveToCenter);

		escEvent = EVENT({
			name : 'keydown'
		}, function(e) {

			if (e.getKeyCode() === 27 && isCannotClose !== true) {

				remove();

				if (onClose !== undefined) {
					onClose();
				}
			}
		});

		wrapper.addAfterShowProc(function() {

			var
			// find.
			find;

			moveToCenter();

			find = function(childs) {
				EACH(childs, function(child) {

					if (child.type === IMG) {
						EVENT({
							node : child,
							name : 'load'
						}, function() {
							moveToCenter();
						});
					}

					if (child.getChilds !== undefined) {
						find(child.getChilds());
					}
				});
			};

			find(wrapper.getChilds());
		});

		wrapper.addAfterRemoveProc(function() {
			resizeEvent.remove();
			scrollEvent.remove();
			escEvent.remove();
		});

		self.getDom = getDom = function() {
			return wrapper;
		};

		self.append = append = function(node) {
			//REQUIRED: node

			content.append(node);
			moveToCenter();
		};

		if (childs !== undefined) {
			EACH(childs, function(child, i) {
				append(child);
			});
		}

		self.appendTo = appendTo = function(node) {
			//REQUIRED: node

			node.append(wrapper);

			return self;
		};

		self.prepend = prepend = function(node) {
			//REQUIRED: node

			content.prepend(node);
			moveToCenter();
		};

		self.prependTo = prependTo = function(node) {
			//REQUIRED: node

			node.prepend(wrapper);

			return self;
		};

		self.after = after = function(node) {
			//REQUIRED: node

			wrapper.after(node);
			moveToCenter();
		};

		self.insertAfter = insertAfter = function(node) {
			//REQUIRED: node

			node.after(wrapper);

			return self;
		};

		self.before = before = function(node) {
			//REQUIRED: node

			wrapper.before(node);
			moveToCenter();
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

		self.addWrapperStyle = addWrapperStyle = function(style) {
			//REQUIRED: style

			wrapper.addStyle(style);
			moveToCenter();
		};

		if (wrapperStyle !== undefined) {
			addWrapperStyle(wrapperStyle);
		}

		self.addContentStyle = addContentStyle = function(style) {
			//REQUIRED: style

			content.addStyle(style);
			moveToCenter();
		};

		if (contentStyle !== undefined) {
			addContentStyle(contentStyle);
		}

	}
});
