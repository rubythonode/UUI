/**
 * Table class
 */
UUI.TABLE = CLASS({

	preset : function() {'use strict';
		return NODE;
	},

	init : function(cls, inner, self, params) {'use strict';
		//OPTIONAL: params
		//OPTIONAL: params.childs
		//OPTIONAL: params.style
		//OPTIONAL: params.trs

		var
		// childs
		childs = params === undefined ? undefined : params.childs,

		// style
		style = params === undefined ? undefined : params.style,

		// trs
		trs = params === undefined ? undefined : params.trs,

		// tr stack
		trStack = [],

		// remove tr handlers
		removeTRHandlers = {},

		// table
		table,

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

		// add style.
		addStyle,

		// add tr.
		addTR,

		// remove tr.
		removeTR,

		// add remove tr handler.
		addRemoveTRHandler,

		// remove all trs.
		removeAllTRs,

		// show.
		show,

		// hide.
		hide,

		// check is show.
		checkIsShow;

		if (trs === undefined) {
			trs = {};
		}

		table = TABLE();

		self.getDom = getDom = function() {
			return table;
		};

		self.append = append = function(node) {
			//REQUIRED: node

			table.append(node);
		};

		if (childs !== undefined) {
			EACH(childs, function(child, i) {
				append(child);
			});
		}

		self.appendTo = appendTo = function(node) {
			//REQUIRED: node

			node.append(table);

			return self;
		};

		self.prepend = prepend = function(node) {
			//REQUIRED: node

			table.prepend(node);
		};

		self.prependTo = prependTo = function(node) {
			//REQUIRED: node

			node.prepend(table);

			return self;
		};

		self.after = after = function(node) {
			//REQUIRED: node

			table.after(node);
		};

		self.insertAfter = insertAfter = function(node) {
			//REQUIRED: node

			node.after(table);

			return self;
		};

		self.before = before = function(node) {
			//REQUIRED: node

			table.before(node);
		};

		self.insertBefore = insertBefore = function(node) {
			//REQUIRED: node

			node.before(table);

			return self;
		};

		self.remove = remove = function() {
			table.remove();
		};

		self.removeAllChilds = removeAllChilds = function() {
			table.removeAllChilds();
		};

		self.getParent = getParent = function() {
			return table.getParent();
		};

		self.setParent = setParent = function(parent) {
			//REQUIRED: parent

			table.setParent(parent);
		};

		self.getChilds = getChilds = function() {
			return table.getChilds();
		};

		self.addStyle = addStyle = function(style) {
			//REQUIRED: style

			table.addStyle(style);
		};

		if (style !== undefined) {
			addStyle(style);
		}

		self.addTR = addTR = function(params) {
			//REQUIRED: params
			//REQUIRED: params.key
			//REQUIRED: params.tr
			//OPTIONAL: params.isFirst

			var
			// key
			key = params.key,

			// tr
			tr = params.tr,

			// is first
			isFirst = params.isFirst;

			if (trs[key] !== undefined) {

				tr.insertBefore(trs[key]);

				trStack[FIND_KEY({
					data : trStack,
					value : trs[key]
				})] = tr;

				trs[key].remove();

			} else if (isFirst === true && trStack.length > 0) {
				tr.insertBefore(trStack[0]);
				trStack.unshift(tr);
			} else {
				table.append(tr);
				trStack.push(tr);
			}

			trs[key] = tr;
		};

		EACH(trs, function(tr, key) {
			trStack.push(tr);

			table.append(tr);
		});

		self.removeTR = removeTR = function(key) {
			//REQUIRED: key

			var
			// tr
			tr = trs[key],

			// handlers
			handlers = removeTRHandlers[key];

			if (tr !== undefined) {
				tr.remove();
			}

			if (handlers !== undefined) {
				EACH(handlers, function(handler) {
					handler();
				});
			}

			REMOVE({
				data : trStack,
				value : tr
			});
			REMOVE_AT({
				data : trs,
				key : key
			});
			REMOVE_AT({
				data : removeTRHandlers,
				key : key
			});
		};

		self.addRemoveTRHandler = addRemoveTRHandler = function(key, removeTRHandler) {
			//REQUIRED: key
			//REQUIRED: removeTRHandler

			if (removeTRHandlers[key] === undefined) {
				removeTRHandlers[key] = [];
			}

			removeTRHandlers[key].push(removeTRHandler);
		};

		self.removeAllTRs = removeAllTRs = function() {

			EACH(trs, function(tr, key) {

				var
				// handlers
				handlers = removeTRHandlers[key];

				tr.remove();

				if (handlers !== undefined) {
					EACH(handlers, function(handler) {
						handler();
					});
				}
			});

			trs = {};
			trStack = [];
			removeTRHandlers = {};
		};

		self.show = show = function() {
			table.show();
		};

		self.hide = hide = function() {
			table.hide();
		};

		self.checkIsShow = checkIsShow = function() {
			return table.checkIsShow();
		};
	}
});
