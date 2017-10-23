package com.studentconnect.demo.backend.service;

import com.studentconnect.demo.backend.model.Activity;
import com.studentconnect.demo.backend.model.Subject;
import com.studentconnect.demo.backend.model.Club;
import com.studentconnect.demo.backend.model.Student;

import java.util.List;

public interface StudentService {
    Student add (Student student);
    void update (Student student);
    Student getById (int id);
    List<Student> findAll ();
    void delete (int id);

    Club addClub(Club club);
    void deleteClub(int studId, int clubId);
    List<Club> findAllClubs();

    Activity addActivity(Activity activity);
    void deleteActivity(int studId, int actId);
    List<Activity> findAllActivities();

    Subject addSubject (Subject subject);
    void deleteSubject (int id);
    List<Subject> findAllSubjects();

    void addStudentToClass(int studId, int classId);
    void addStudentToClub(int studId, int clubId);
}


