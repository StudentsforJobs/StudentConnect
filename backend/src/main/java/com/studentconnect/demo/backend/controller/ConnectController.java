package com.studentconnect.demo.backend.controller;

import com.studentconnect.demo.backend.model.Club;
import com.studentconnect.demo.backend.model.Student;
import com.studentconnect.demo.backend.service.ClubService;
import com.studentconnect.demo.backend.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
public class ConnectController {
    @Autowired
    StudentService studentService;

    @Autowired
    ClubService clubService;

    @RequestMapping(path = "/", method = RequestMethod.GET)
    public List<Student> getItems() {
        return studentService.findAll();
    }

    @RequestMapping(path = "/", method = RequestMethod.POST)
    public void addItem(@RequestBody Student newStudent) {
        studentService.add(newStudent);
    }

    @RequestMapping(path = "/club", method = RequestMethod.GET)
    public List<Club> getClubs() {
        return clubService.findAll();
    }

    @RequestMapping(path = "/club", method = RequestMethod.POST)
    public void addClub(@RequestBody Club newClub) {
        clubService.add(newClub);
    }
}