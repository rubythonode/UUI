/**
 * Modal class
 */
UUI.MODAL = CLASS({

	init : function(cls, inner, self, params) {'use strict';
		//OPTIONAL: params
		//OPTIONAL: params.children
		//OPTIONAL: params.wrapperStyle
		//OPTIONAL: params.contentStyle
		//OPTIONAL: params.xStyle
		//OPTIONAL: params.xImg
		//OPTIONAL: params.isCannotClose
		//OPTIONAL: params.onClose

		var
		// children
		children = params === undefined ? undefined : params.children,

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

		// prepend.
		prepend,

		// after.
		after,

		// before.
		before,

		// remove.
		remove,

		// remove all children.
		removeAllChildren,

		// get children.
		getChildren,

		// add wrapper style.
		addWrapperStyle,

		// add content style.
		addContentStyle,

		// close.
		close;

		if (xImg === undefined && isCannotClose !== true) {
			xImg = IMG({
				src : UUI.R('x.png')
			});
		}

		wrapper = DIV({
			children : [ content = DIV(), isCannotClose === true ? '' : UUI.IMG_BUTTON({
				style : COMBINE_DATA({
					origin : {
						position : 'absolute'
					},
					extend : xStyle === undefined ? {
						top : -20,
						right : -20,
						padding : 10
					} : xStyle
				}),
				img : xImg,
				onTap : function(e) {
					close();
				},
				onMouseover : function() {
					addWrapperStyle({
						opacity : 0.8
					});
				},
				onMouseout : function() {
					addWrapperStyle({
						opacity : 1
					});
				}
			})]
		}).appendTo(BODY);

		moveToCenter = RAR(function() {

			var
			// left
			left = (WIN_WIDTH() - wrapper.getWidth()) / 2 + SCROLL_LEFT(),

			// top
			top = (WIN_HEIGHT() - wrapper.getHeight()) / 2 + SCROLL_TOP(),

			// find.
			find;

			wrapper.addStyle({
				position : 'absolute',
				left : left < 0 ? 0 : left,
				top : top < 0 ? 0 : top
			});

			find = function(children) {
				EACH(children, function(child) {

					if (child.type === IMG) {
						EVENT({
							node : child,
							name : 'load'
						}, function() {
							moveToCenter();
						});
					}

					if (child.getChildren !== undefined) {
						find(child.getChildren());
					}
				});
			};

			find(wrapper.getChildren());
		});

		wrapper.addAfterShowProc(moveToCenter);

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
				close();
			}
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

		if (children !== undefined) {
			EACH(children, function(child, i) {
				append(child);
			});
		}

		self.prepend = prepend = function(node) {
			//REQUIRED: node

			content.prepend(node);
			moveToCenter();
		};

		self.after = after = function(node) {
			//REQUIRED: node

			wrapper.after(node);
			moveToCenter();
		};

		self.before = before = function(node) {
			//REQUIRED: node

			wrapper.before(node);
			moveToCenter();
		};

		self.remove = remove = function() {
			wrapper.remove();
		};

		self.removeAllChildren = removeAllChildren = function() {
			wrapper.removeAllChildren();
		};

		self.getChildren = getChildren = function() {
			return wrapper.getChildren();
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

		self.close = close = function() {

			if (onClose !== undefined) {
				if (onClose(self) !== false) {
					remove();
				}
			} else {
				remove();
			}
		};
	}
});
