package com.studentconnect.demo.backend.service;

import com.studentconnect.demo.backend.model.Student;
import java.util.List;

public interface StudentService {
    Student add (Student student);
    void update (Student student);
    Student getById (int id);
    List<Student> findAll ();
    void delete (int id);
}
