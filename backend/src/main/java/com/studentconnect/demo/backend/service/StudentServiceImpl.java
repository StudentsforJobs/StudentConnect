package com.studentconnect.demo.backend.service;

import com.studentconnect.demo.backend.model.*;
import com.studentconnect.demo.backend.repository.*;
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
    private SubjectRepository subjectRepository;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private TeacherRepository teacherRepository;

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
    public Subject addSubject(Subject subject) {
        return subjectRepository.save(subject);
    }

    @Override
    public void deleteSubject(int id) {
        subjectRepository.delete(id);
    }

    @Override
    public List<Subject> findAllSubjects() {
        return subjectRepository.findAll();
    }

    @Override
    public void addStudentToClass(int studId, int subjectId) {
        Student student = studentRepository.findOne(studId);
        Subject subject = subjectRepository.findOne(subjectId);
        System.out.println("Student to add: " + student);
        System.out.println("Subject to add: " + subject);
        student.getSubjects().add(subject);
        subject.getStudents().add(student);
        System.out.println("Student before save: " + student);
        System.out.println("Subject before save: " + subject);
        studentRepository.save(student);
        subjectRepository.save(subject);
    }

    @Override
    public void addStudentToClub(int studId, int clubId) {
        Student student = studentRepository.findOne(studId);
        Club club = clubRepository.findOne(clubId);
        student.getClubs().add(club);
        club.getStudents().add(student);
        studentRepository.save(student);
        clubRepository.save(club);
    }

    private Student getStudent(int id) {
        Student student = studentRepository.findOne(id);
        student.getClubs().size();
        return student;
    }

    @Override
    public void addStudentToActivity(int studId, int activityId) {
        Student student = studentRepository.findOne(studId);
        Activity activity = activitiesRepository.findOne(activityId);
        student.getActivities().add(activity);
        activity.getStudents().add(student);
        studentRepository.save(student);
        activitiesRepository.save(activity);
    }

    @Override
    public Post addPost(Post post) {
        return postRepository.save(post);
    }

    @Override
    public void deletePost(int id) {
        postRepository.delete(id);
    }

    @Override
    public List<Post> findAllPosts() {
        return postRepository.findAll();
    }

    @Override
    public Teacher addTeacher(Teacher teacher) {
        return teacherRepository.save(teacher);
    }

    @Override
    public void deleteTeacher(int id) {
        teacherRepository.delete(id);
    }

    @Override
    public List<Teacher> findAllTeachers() {
        return teacherRepository.findAll();
    }
}
