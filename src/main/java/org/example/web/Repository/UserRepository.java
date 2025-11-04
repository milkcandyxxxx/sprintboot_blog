// 包路径建议：org.example.web.repository（专门放 Repository 接口）
package org.example.web.Repository;

import org.example.web.entity.BlogArticle;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

// 继承 JpaRepository<实体类, 主键类型>
public interface UserRepository extends JpaRepository<BlogArticle, Long> {
    // 根据用户名查询（精确匹配）
}