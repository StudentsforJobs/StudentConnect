package com.studentconnect.demo.backend.controller;

import com.studentconnect.demo.backend.model.Activity;
import com.studentconnect.demo.backend.model.Club;
import com.studentconnect.demo.backend.model.Student;
import com.studentconnect.demo.backend.model.Teacher;
import com.studentconnect.demo.backend.service.StudentService;
import com.studentconnect.demo.backend.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
public class ConnectController {
    @Autowired
    StudentService studentService;

    @Autowired
    TeacherService teacherService;

    @RequestMapping(path = "/", method = RequestMethod.GET)
    public List<Student> getStudents() {
        return studentService.findAll();
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

    /*
    @RequestMapping(path = "/club", method = RequestMethod.POST)
    public void addClub(@RequestParam int studId, @RequestBody String name) {
        studentService.addClub(studId, name);
    }
    */

    @RequestMapping(path = "/club", method = RequestMethod.DELETE)
    public void deleteClub(@RequestParam int studId, @RequestBody int clubId) {
        studentService.deleteClub(studId, clubId);
    }

    @RequestMapping(path = "/activities", method = RequestMethod.GET)
    public List<Activity> getActivities() {
        return studentService.findAllActivities();
    }

    /*
    @RequestMapping(path = "/activities", method = RequestMethod.POST)
    public void addActivity(@RequestParam int studId, @RequestBody String name) {
        studentService.addActivity(studId, name);
    }
    */

    @RequestMapping(path = "/activities", method = RequestMethod.DELETE)
    public void deleteActivity(@RequestParam int studId, @RequestBody int actId) {
        studentService.deleteActivity(studId, actId);
    }

    @RequestMapping(path = "/teacher", method = RequestMethod.GET)
    public List<Teacher> getTeachers() {
        return teacherService.findAll();
    }

    @RequestMapping(path = "/teacher", method = RequestMethod.POST)
    public void addTeacher(@RequestBody Teacher newTeacher) {
        teacherService.add(newTeacher);
    }

    @RequestMapping(path = "/teacher", method = RequestMethod.DELETE)
    public void deleteTeacher(@RequestBody int id) {
        teacherService.delete(id);
    }
}