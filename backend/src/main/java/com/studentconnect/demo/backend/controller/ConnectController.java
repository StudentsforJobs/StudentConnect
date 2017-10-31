package com.studentconnect.demo.backend.controller;

import com.studentconnect.demo.backend.model.*;
import com.studentconnect.demo.backend.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.sql.Timestamp;

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
    public ResponseEntity logIn(@RequestBody Credentials user) {
        Student current = new Student();
        List<Student> students = studentService.findAll();
        for (Student student : students) {
            if (student.getUserName().equals(user.getUsername())) {
                if(student.getPassword().equals(user.getPassword())) {
                    current = student;
                    return ResponseEntity.ok(current);
                } else {
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
                }
            }
        }
        return null;
    }

    @RequestMapping(path = "/home/{studentId}", method = RequestMethod.GET)
    public List<Post> getStudentPosts(@PathVariable("studentId") int id) {
        Student current = studentService.getById(id);
        List<Post> studentPosts = studentService.getPostsByStudent(current);
        List<Post> temp = studentService.sortPosts(studentPosts);
        studentPosts = temp;
        return studentPosts;
    }

    @RequestMapping(path = "/home/{studentId}", method = RequestMethod.POST)
    public List<Post> addAndGet(@PathVariable("studentId") int id, @RequestBody Post newPost) {
        long now = System.currentTimeMillis();
        Timestamp currentTime = new Timestamp(now);
        newPost.setTimeStamp(currentTime);
        studentService.addPost(newPost);
        Student current = studentService.getById(id);
        List<Post> studentPosts = studentService.getPostsByStudent(current);
        List<Post> temp = studentService.sortPosts(studentPosts);
        studentPosts = temp;
        return studentPosts;
    }

    //routes below used for postman changes to database
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

    @RequestMapping(path = "/activities", method = RequestMethod.GET)
    public List<Activity> getActivities() {
        return studentService.findAllActivities();
    }

    @RequestMapping(path = "/teacher", method = RequestMethod.GET)
    public List<Teacher> getTeachers() {
        return studentService.findAllTeachers();
    }

    @RequestMapping(path = "/subject", method = RequestMethod.GET)
    public List<Subject> getSubjects() {
        return studentService.findAllSubjects();
    }

    @RequestMapping(path = "/post", method = RequestMethod.GET)
    public List<Post> getAllPosts() {
        return studentService.findAllPosts();
    }

}
