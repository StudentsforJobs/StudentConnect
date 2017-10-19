package com.studentconnect.demo.backend.service;

import com.studentconnect.demo.backend.model.Club;

import java.util.List;

public interface ClubService {
    Club add (Club club);
    void update (Club club);
    Club getById (int id);
    List<Club> findAll ();
    void delete (int id);
}
