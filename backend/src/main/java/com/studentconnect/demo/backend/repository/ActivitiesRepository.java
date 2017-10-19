package com.studentconnect.demo.backend.repository;

import com.studentconnect.demo.backend.model.Activity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActivitiesRepository extends JpaRepository<Activity, Integer> {
}
