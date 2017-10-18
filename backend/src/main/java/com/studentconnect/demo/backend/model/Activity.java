package com.studentconnect.demo.backend.model;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "activities")
public class Activity {
    private int id;
    private String name;


}
