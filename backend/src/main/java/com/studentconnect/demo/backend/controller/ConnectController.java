package com.studentconnect.demo.backend.controller;

import com.studentconnect.demo.backend.model.*;
import com.studentconnect.demo.backend.service.StudentService;
import org.hibernate.boot.jaxb.SourceType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
public class ConnectController {
    @Autowired
    StudentService studentService;

    @RequestMapping(path = "/student", method = RequestMethod.GET)
    public List<Student> getStudents() {
        return studentService.findAll();
    }

    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public Student logIn(@RequestBody Credentials user) {
        Student current = new Student();
        System.out.println(user.getUsername());
        System.out.println(user.getPassword());
        List<Student> students = studentService.findAll();
        for (Student student : students) {
            if (student.getUserName().equals(user.getUsername())) {
                if(student.getPassword().equals(user.getPassword())) {
                    current = student;
                }
            }
        }
        return current;
    }

    @RequestMapping(path = "/", method = RequestMethod.POST)
    public void addStudent(@RequestBody Student newStudent) {
        studentService.add(newStudent);
    }

    @RequestMapping(path = "/", method = RequestMethod.DELETE)
    public void deleteStudent(@RequestBody int id) {
        studentService.delete(id);
    }

    @RequestMapping(path = "/club", method = RequestMethod.GET)
    public List<Club> getClubs() {
        return studentService.findAllClubs();
    }

    @RequestMapping(path = "/club", method = RequestMethod.POST)
    public void addClub(@RequestBody Club newClub) {
        studentService.addClub(newClub);
    }

    @RequestMapping(path = "/club", method = RequestMethod.DELETE)
    public void deleteClub(@RequestParam int studId, @RequestBody int clubId) {
        studentService.deleteClub(studId, clubId);
    }

    @RequestMapping(path = "/activities", method = RequestMethod.GET)
    public List<Activity> getActivities() {
        return studentService.findAllActivities();
    }

    @RequestMapping(path = "/activities", method = RequestMethod.POST)
    public void addActivity(@RequestBody Activity activity) {
        studentService.addActivity(activity);
    }

    @RequestMapping(path = "/activities", method = RequestMethod.DELETE)
    public void deleteActivity(@RequestParam int studId, @RequestBody int actId) {
        studentService.deleteActivity(studId, actId);
    }

    @RequestMapping(path = "/teacher", method = RequestMethod.GET)
    public List<Teacher> getTeachers() {
        return studentService.findAllTeachers();
    }

    @RequestMapping(path = "/teacher", method = RequestMethod.POST)
    public void addTeacher(@RequestBody Teacher newTeacher) {
        studentService.addTeacher(newTeacher);
    }

    @RequestMapping(path = "/teacher", method = RequestMethod.DELETE)
    public void deleteTeacher(@RequestBody int id) {
        studentService.deleteTeacher(id);
    }

    @RequestMapping(path = "/subject", method = RequestMethod.GET)
    public List<Subject> getSubjects() {
        return studentService.findAllSubjects();
    }

    @RequestMapping(path = "/subject", method = RequestMethod.POST)
    public void addSubject(@RequestBody Subject subject) {
        studentService.addSubject(subject);
    }

    @RequestMapping(path = "/subject", method = RequestMethod.DELETE)
    public void deleteSubject(@RequestBody int id) {
        studentService.deleteSubject(id);
    }

    @RequestMapping(path = "/post", method = RequestMethod.GET)
    public List<Post> getAllPosts() {
        return studentService.findAllPosts();
    }

    @RequestMapping(path = "/studentToSubject", method = RequestMethod.PATCH)
    public void addStudentToClass(@RequestParam int studId, @RequestParam int subjectId) {
        studentService.addStudentToClass(studId, subjectId);
    }

    @RequestMapping(path = "/studentToClub", method = RequestMethod.PATCH)
    public void addStudentToClub(@RequestParam int studId, @RequestParam int clubId) {
        studentService.addStudentToClub(studId, clubId);
    }

    @RequestMapping(path = "/StudentToActivity", method = RequestMethod.PATCH)
    public void addStudentToActivity(@RequestParam int studId, @RequestParam int activityId){
            studentService.addStudentToActivity(studId, activityId);
    }

}
