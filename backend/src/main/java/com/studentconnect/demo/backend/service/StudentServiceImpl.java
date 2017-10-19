package com.studentconnect.demo.backend.service;

import com.studentconnect.demo.backend.model.Activity;
import com.studentconnect.demo.backend.model.Club;
import com.studentconnect.demo.backend.model.Student;
import com.studentconnect.demo.backend.repository.ActivitiesRepository;
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

    @Override
    @Transactional
    public Student add(Student student) {
        System.out.println("Student being added: " + student);
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
        studentRepository.delete(id);
    }

    @Override
    public List<Club> findAllClubs() {
        return clubRepository.findAll();
    }

    @Override
    public Student addClub(int id, String name) {
        Student student = studentRepository.findOne(id);
        Club club = new Club();
        club.setName(name);
        club.setStudent(student);
        clubRepository.save(club);
        student = studentRepository.findOne(club.getStudent().getId());
        student.getClubs().add(club);
        studentRepository.save(student);
        return getStudent(club.getStudent().getId());
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
    public Student addActivity(int id, String name) {
        Student student = studentRepository.findOne(id);
        Activity activity = new Activity();
        activity.setName(name);
        activity.setStudent(student);
        activitiesRepository.save(activity);
        student = studentRepository.findOne(activity.getStudent().getId());
        student.getActivities().add(activity);
        studentRepository.save(student);
        return getStudent(activity.getStudent().getId());
    }

    @Override
    public void deleteActivity(int studId, int actId) {
        Activity activity = activitiesRepository.findOne(actId);
        activitiesRepository.delete(actId);
        Student student = studentRepository.findOne(studId);
        student.getActivities().remove(activity);
        studentRepository.save(student);
    }

    private Student getStudent(int id) {
        Student student = studentRepository.findOne(id);
        student.getClubs().size();
        return student;
    }
}
