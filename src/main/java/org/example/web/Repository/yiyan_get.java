package org.example.web.Repository;

import org.example.web.entity.yiyan_json;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface yiyan_get extends JpaRepository<yiyan_json, Long> {
    // 根据用户名查询（精确匹配）
    @Query(value = "SELECT MAX(id) FROM yiyan", nativeQuery = true)
    Long findMaxId();

}
