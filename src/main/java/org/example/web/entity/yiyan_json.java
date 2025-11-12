package org.example.web.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "yiyan") // 对应数据库表名
public class yiyan_json {
    @Id
    private Long id;

    @Column(name = "article")
    private String article;

    @Column(name = "who")
    private String who;

}