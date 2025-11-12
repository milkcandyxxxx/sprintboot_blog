package org.example.web.controller;
import org.commonmark.node.Node;
import org.commonmark.parser.Parser;
import org.commonmark.renderer.html.HtmlRenderer;

public class markdown_render {
    public static String getMarkdown(String markdown) {
        Parser parser = Parser.builder().build();
        Node node_number = parser.parse(markdown);
        HtmlRenderer HTML_render = HtmlRenderer.builder().build();
        return HTML_render.render(node_number);
    }
}
