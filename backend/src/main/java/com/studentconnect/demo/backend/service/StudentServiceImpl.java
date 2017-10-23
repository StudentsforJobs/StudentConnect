package com.studentconnect.demo.backend.service;

import com.studentconnect.demo.backend.model.Activity;
import com.studentconnect.demo.backend.model.Class;
import com.studentconnect.demo.backend.model.Club;
import com.studentconnect.demo.backend.model.Student;
import com.studentconnect.demo.backend.repository.ActivitiesRepository;
import com.studentconnect.demo.backend.repository.ClassRepository;
import com.studentconnect.demo.backend.repository.ClubRepository;
import com.studentconnect.demo.backend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class StudentServiceImpl implements StudentService {
    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private ClubRepository clubRepository;

    @Autowired
    private ActivitiesRepository activitiesRepository;

    @Autowired
    private ClassRepository classRepository;

    @Override
    @Transactional
    public Student add(Student student) {
        return studentRepository.save(student);
    }

    @Override
    @Transactional
    public void update(Student student) {
        studentRepository.save(student);
    }

    @Override
    public Student getById(int id) {
        return studentRepository.findOne(id);
    }

    @Override
    public List<Student> findAll() {
        return studentRepository.findAll();
    }

    @Override
    public void delete(int id) {
        Student student = this.getById(id);
        clubRepository.delete(student.getClubs());
        activitiesRepository.delete(student.getActivities());
        studentRepository.delete(id);
    }

    @Override
    public List<Club> findAllClubs() {
        return clubRepository.findAll();
    }

    @Override
    public Club addClub(Club club) {
        return clubRepository.save(club);
    }

    @Override
    public void deleteClub(int studId, int clubId) {
        Club club = clubRepository.findOne(clubId);
        clubRepository.delete(clubId);
        Student student = studentRepository.findOne(studId);
        student.getClubs().remove(club);
        studentRepository.save(student);
    }

    @Override
    public List<Activity> findAllActivities() {
        return activitiesRepository.findAll();
    }

    @Override
    public Activity addActivity(Activity activity) {
        return activitiesRepository.save(activity);
    }

    @Override
    public void deleteActivity(int studId, int actId) {
        Activity activity = activitiesRepository.findOne(actId);
        activitiesRepository.delete(actId);
        Student student = studentRepository.findOne(studId);
        student.getActivities().remove(activity);
        studentRepository.save(student);
    }

    @Override
    public Class addClass(Class newClass) {
        return classRepository.save(newClass);
    }

    @Override
    public void deleteClass(int id) {
        classRepository.delete(id);
    }

    @Override
    public List<Class> findAllClasses() {
        return classRepository.findAll();
    }

    private Student getStudent(int id) {
        Student student = studentRepository.findOne(id);
        student.getClubs().size();
        return student;
    }
}
