import XCTest
import SwiftTreeSitter
import TreeSitterEmmet

final class TreeSitterEmmetTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_emmet())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Emmet grammar")
    }
}
