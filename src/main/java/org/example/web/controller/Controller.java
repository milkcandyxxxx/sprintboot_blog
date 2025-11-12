package org.example.web.controller;

import org.example.web.Repository.yiyan_get;
import org.example.web.entity.BlogArticle;
import org.example.web.entity.yiyan_json;
import org.example.web.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;
import java.util.Optional;
import java.util.Random;

@RestController
public class Controller {
    Random random = new Random();


    @Autowired
    private UserRepository userRepository;
    @Autowired
    private yiyan_get yiyan_get;


    @GetMapping("/article/all")
    public List<BlogArticle> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/article/{id}")
    public Optional<BlogArticle> getaticle(@PathVariable Long id) {


        return userRepository.findById(id).map(article -> {
                    String content_markdown = article.getContent();
                    String content_html = markdown_render.getMarkdown(content_markdown);
                    article.setContent(content_html);
                    return article;
                }
        );
    }

    @GetMapping("/api/yiyan")
    public Optional<yiyan_json> getyiyan() {
        long id_mix = 1;
        long id_max = yiyan_get.findMaxId();

        long id = random.nextLong(id_mix, id_max);
        return yiyan_get.findById(id);
    }
}