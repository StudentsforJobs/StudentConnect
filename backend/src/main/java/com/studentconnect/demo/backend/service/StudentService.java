package com.studentconnect.demo.backend.service;

import com.studentconnect.demo.backend.model.Activity;
import com.studentconnect.demo.backend.model.Club;
import com.studentconnect.demo.backend.model.Student;
import java.util.List;

public interface StudentService {
    Student add (Student student);
    void update (Student student);
    Student getById (int id);
    List<Student> findAll ();
    void delete (int id);

    //Student addClub(int id, String name);
    void deleteClub(int studId, int clubId);
    List<Club> findAllClubs();

    Student addActivity(int id, String name);
    void deleteActivity(int studId, int actId);
    List<Activity> findAllActivities();
}
