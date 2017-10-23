package com.studentconnect.demo.backend.service;

import com.studentconnect.demo.backend.model.Activity;

import java.util.List;

public interface ActivityService {
    Activity add (Activity activity);
    void update (Activity activity);
    Activity getById (int id);
    List<Activity> findAll ();
    void delete (int id);
}
