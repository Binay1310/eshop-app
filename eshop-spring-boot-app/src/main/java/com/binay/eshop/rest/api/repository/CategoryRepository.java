package com.binay.eshop.rest.api.repository;

import com.binay.eshop.rest.api.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
