package com.studentconnect.demo.backend.repository;

import com.studentconnect.demo.backend.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Integer> {
}
