package com.studentconnect.demo.backend.service;

import com.studentconnect.demo.backend.model.*;

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

    Post addPost (Post post);
    void deletePost (int id);
    List<Post> findAllPosts();

    void addStudentToClass(int studId, int subjectId);
    void addStudentToClub(int studId, int clubId);
    void addStudentToActivity(int studId, int activityId);


}


