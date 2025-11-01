package tree_sitter_emmet_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_emmet "github.com/tree-sitter/tree-sitter-emmet/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_emmet.Language())
	if language == nil {
		t.Errorf("Error loading Emmet grammar")
	}
}
