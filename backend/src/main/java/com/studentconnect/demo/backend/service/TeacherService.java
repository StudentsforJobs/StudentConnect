package com.studentconnect.demo.backend.service;
import com.studentconnect.demo.backend.model.Teacher;

import java.util.List;

public interface TeacherService {
        Teacher add (Teacher teacher);
        void update (Teacher teacher);
        Teacher getById (int id);
        List<Teacher> findAll ();
        void delete (int id);
    }

