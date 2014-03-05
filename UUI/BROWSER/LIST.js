/**
 * List class
 */
UUI.LIST = CLASS({

	preset : function() {'use strict';
		return NODE;
	},

	init : function(cls, inner, self, params) {'use strict';
		//OPTIONAL: params
		//OPTIONAL: params.children
		//OPTIONAL: params.style
		//OPTIONAL: params.items
		//OPTIONAL: params.isNeedClearBoth

		var
		// children
		children = params === undefined ? undefined : params.children,

		// style
		style = params === undefined ? undefined : params.style,

		// items
		items = params === undefined ? undefined : params.items,

		// is need clear both
		isNeedClearBoth = params === undefined ? undefined : params.isNeedClearBoth,

		// item stack
		itemStack = [],

		// remove item handlers
		removeItemHandlers = {},

		// ul
		ul,

		// clear both
		clearBoth,

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

		// add style.
		addStyle,

		// add item.
		addItem,

		// remove item.
		removeItem,

		// add remove item handler.
		addRemoveItemHandler,

		// remove all items.
		removeAllItems,

		// show.
		show,

		// hide.
		hide,

		// check is show.
		checkIsShow;

		if (items === undefined) {
			items = {};
		}

		ul = UL();

		self.getDom = getDom = function() {
			return ul;
		};

		self.append = append = function(node) {
			//REQUIRED: node

			ul.append(node);
		};

		if (children !== undefined) {
			EACH(children, function(child, i) {
				append(child);
			});
		}

		self.appendTo = appendTo = function(node) {
			//REQUIRED: node

			node.append(ul);

			return self;
		};

		self.prepend = prepend = function(node) {
			//REQUIRED: node

			ul.prepend(node);
		};

		self.prependTo = prependTo = function(node) {
			//REQUIRED: node

			node.prepend(ul);

			return self;
		};

		self.after = after = function(node) {
			//REQUIRED: node

			ul.after(node);
		};

		self.insertAfter = insertAfter = function(node) {
			//REQUIRED: node

			node.after(ul);

			return self;
		};

		self.before = before = function(node) {
			//REQUIRED: node

			ul.before(node);
		};

		self.insertBefore = insertBefore = function(node) {
			//REQUIRED: node

			node.before(ul);

			return self;
		};

		self.remove = remove = function() {
			ul.remove();
		};

		self.removeAllChildren = removeAllChildren = function() {
			ul.removeAllChildren();
		};

		self.getParent = getParent = function() {
			return ul.getParent();
		};

		self.setParent = setParent = function(parent) {
			//REQUIRED: parent

			ul.setParent(parent);
		};

		self.getChildren = getChildren = function() {
			return ul.getChildren();
		};

		self.addStyle = addStyle = function(style) {
			//REQUIRED: style

			ul.addStyle(style);
		};

		if (style !== undefined) {
			addStyle(style);
		}

		self.addItem = addItem = function(params) {
			//REQUIRED: params
			//REQUIRED: params.key
			//REQUIRED: params.item
			//OPTIONAL: params.isFirst

			var
			// key
			key = params.key,

			// item
			item = params.item,

			// is first
			isFirst = params.isFirst;

			if (items[key] !== undefined) {

				item.insertBefore(items[key]);

				itemStack[FIND_KEY({
					data : itemStack,
					value : items[key]
				})] = item;

				items[key].remove();

			} else if (isFirst === true && itemStack.length > 0) {
				item.insertBefore(itemStack[0]);
				itemStack.unshift(item);
			} else {
				ul.append(item);
				itemStack.push(item);
			}

			items[key] = item;

			if (isNeedClearBoth === true) {

				if (clearBoth !== undefined) {
					clearBoth.remove();
				}

				clearBoth = CLEAR_BOTH().appendTo(ul);
			}
		};

		EACH(items, function(item, key) {

			itemStack.push(item);

			ul.append(item);
		});

		self.removeItem = removeItem = function(key) {
			//REQUIRED: key

			var
			// item
			item = items[key],

			// handlers
			handlers = removeItemHandlers[key];

			if (item !== undefined) {
				item.remove();
			}

			if (handlers !== undefined) {
				EACH(handlers, function(handler) {
					handler();
				});
			}

			REMOVE({
				data : itemStack,
				value : item
			});
			REMOVE_AT({
				data : items,
				key : key
			});
			REMOVE_AT({
				data : removeItemHandlers,
				key : key
			});
		};

		self.addRemoveItemHandler = addRemoveItemHandler = function(key, removeItemHandler) {
			//REQUIRED: key
			//REQUIRED: removeItemHandler

			if (removeItemHandlers[key] === undefined) {
				removeItemHandlers[key] = [];
			}

			removeItemHandlers[key].push(removeItemHandler);
		};

		self.removeAllItems = removeAllItems = function() {

			EACH(items, function(item, key) {

				var
				// handlers
				handlers = removeItemHandlers[key];

				item.remove();

				if (handlers !== undefined) {
					EACH(handlers, function(handler) {
						handler();
					});
				}
			});

			items = {};
			itemStack = [];
			removeItemHandlers = {};
		};

		self.show = show = function() {
			ul.show();
		};

		self.hide = hide = function() {
			ul.hide();
		};

		self.checkIsShow = checkIsShow = function() {
			return ul.checkIsShow();
		};
	}
});
