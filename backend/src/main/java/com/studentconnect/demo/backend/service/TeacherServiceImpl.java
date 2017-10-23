package com.studentconnect.demo.backend.service;

import com.studentconnect.demo.backend.model.Teacher;
<<<<<<< HEAD
=======
// <<<<<<< master
// import com.studentconnect.demo.backend.repository.TeacherRepository;
// =======
// >>>>>>> master
>>>>>>> dc52104bcf494cf59a5e251be0f46a8e12cb54c6
import com.studentconnect.demo.backend.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TeacherServiceImpl implements TeacherService {
    @Autowired
    private TeacherRepository teacherRepository;

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

