/**
 * @file Emmet grammar for tree-sitter
 * @author skewb1k
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
	name: "emmet",

	extras: _ => [],

	rules: {
		snippet: $ => $._node,

		_node: $ =>
			choice($.tag, $.siblings, $.children, $.group, $.multiplication),

		multiplication: $ => prec.right(3, seq($._node, "*", /\d+/)),

		children: $ => prec.left(1, seq($._node, ">", $._node)),

		siblings: $ => prec.left(2, seq($._node, "+", $._node)),

		group: $ => seq("(", $._node, ")"),

		_identifier: _ => /\p{XID_Start}[\p{XID_Continue}$-]*/u,

		tag: $ =>
			seq(
				choice($.name, seq(optional($.name), repeat1(choice($.id, $.class)))),
				optional($.text),
				optional($.property),
			),

		name: $ => $._identifier,

		property: $ => seq(":", optional($._identifier)),

		class: $ => seq(".", optional($._identifier)),

		id: $ => seq("#", optional($._identifier)),

		text: _ => seq("{", /[^}]+/, "}"),
	},
});
