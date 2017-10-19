package com.studentconnect.demo.backend.repository;

import com.studentconnect.demo.backend.model.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepository extends JpaRepository<Teacher, Integer> {
}
