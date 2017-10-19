package com.studentconnect.demo.backend.service;

import com.studentconnect.demo.backend.model.Club;
import com.studentconnect.demo.backend.repository.ClubRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ClubServiceImpl implements ClubService {
    @Autowired
    private ClubRepository clubRepository;

    @Override
    @Transactional
    public Club add(Club club) {
        return clubRepository.save(club);
    }

    @Override
    @Transactional
    public void update(Club club) {
        clubRepository.save(club);
    }

    @Override
    public Club getById(int id) {
        return clubRepository.findOne(id);
    }

    @Override
    public List<Club> findAll() {
        return clubRepository.findAll();
    }

    @Override
    public void delete(int id) {
        clubRepository.delete(id);
    }
}
