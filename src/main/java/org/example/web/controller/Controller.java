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
public class Controller { // 类名首字母大写，符合 Java 规范
    Random random =  new Random();

    // 注入 UserRepository，用于操作数据库（Spring 自动生成实现类）
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private yiyan_get yiyan_get;
    
    // 新增接口：查询 11 表所有数据
    @GetMapping("/article/all")
    public List<BlogArticle> getAllUsers() {
        return userRepository.findAll(); // JPA 内置方法，查询所有记录
    }
    @GetMapping("/article/{id}")
    public Optional<BlogArticle> getaeeticle(@PathVariable Long id) {
        return userRepository.findById(id); // JPA 内置方法，查询所有记录
    }

    @GetMapping("/api/yiyan")
    public Optional<yiyan_json> getyiyan()  {
        long id_mix = 1;
        long id_max = yiyan_get.findMaxId();

        long id = random.nextLong(id_mix, id_max);
        return yiyan_get.findById(id);
    }
}