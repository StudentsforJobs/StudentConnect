package com.studentconnect.demo.backend.repository;

import com.studentconnect.demo.backend.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Integer> {
}
