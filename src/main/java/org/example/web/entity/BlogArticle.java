package org.example.web.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "blog_article") // 对应数据库表名
public class BlogArticle { // 类名与表名对应，更符合语义

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 主键自增（对应 AUTO_INCREMENT）
    private Long id; // 表中是 bigint，用 Long 而非 int

    @Column(nullable = false, length = 255) // 非空，长度 255（对应表结构）
    private String title;

    @Column(nullable = false, columnDefinition = "LONGTEXT") // 非空，长文本类型
    private String content;

//    @Column(name = "cover_image", length = 512) // 对应表中 cover_image 字段
//    private String coverImage; // 驼峰命名自动映射下划线字段
//
//    @Column(name = "view_count", nullable = false)
//    private Integer viewCount = 0; // 默认值 0
//
//    @Column(name = "like_count", nullable = false)
//    private Integer likeCount = 0;
//
//    @Column(name = "comment_count", nullable = false)
//    private Integer commentCount = 0;
//
//    @Column(nullable = false)
//    private Byte status = 1; // 状态：0-草稿，1-已发布，2-下架（默认已发布）
//
//    @Column(name = "is_top", nullable = false)
//    private Boolean isTop = false; // 是否置顶：0-否（默认），1-是

    @Column(name = "create_time", nullable = false, updatable = false)
    private LocalDateTime createTime; // 创建时间（不允许更新）
    //
//    @Column(name = "update_time", nullable = false)
//    private LocalDateTime updateTime; // 更新时间（自动更新）
    @Column(name = "category", nullable = false)
    private String category;

    @Column(name = "categoryText", nullable = false)
    private String categoryText;

    // Lombok 的 @Data 已生成 getter/setter/toString 等，无需手动编写
}