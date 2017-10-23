package com.studentconnect.demo.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.studentconnect.demo.backend.model.Class;

public interface ClassRepository extends JpaRepository<Class, Integer> {
}
