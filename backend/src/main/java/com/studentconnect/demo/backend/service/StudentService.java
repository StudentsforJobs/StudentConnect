package com.studentconnect.demo.backend.service;

import com.studentconnect.demo.backend.model.Activity;
import com.studentconnect.demo.backend.model.Class;
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

    Class addClass (Class newClass);
    void deleteClass (int id);
    List<Class> findAllClasses();
}
