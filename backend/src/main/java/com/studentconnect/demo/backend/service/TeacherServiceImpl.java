package com.studentconnect.demo.backend.service;

import com.studentconnect.demo.backend.model.Teacher;
import com.studentconnect.demo.backend.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TeacherServiceImpl implements TeacherService {
    @Autowired
    private TeacherRepository teacherRepository;   //need to build teacherRepo

    @Override
    @Transactional
    public Teacher add(Teacher teacher  ) {
        return teacherRepository.save(teacher);
    }

    @Override
    @Transactional
    public void update(Teacher teacher) {
        teacherRepository.save(teacher);
    }

    @Override
    public Teacher getById(int id) {
        return teacherRepository.findOne(id);
    }

    @Override
    public List<Teacher> findAll() {
        return teacherRepository.findAll();
    }

    @Override
    public void delete(int id) {
        teacherRepository.delete(id);
    }
}

