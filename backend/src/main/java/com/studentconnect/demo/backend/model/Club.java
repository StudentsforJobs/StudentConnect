package com.studentconnect.demo.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "clubs")
public class Club {
    private int id;
    private String name;

    @JsonIgnore
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "students_clubs",
       joinColumns = @JoinColumn(name = "student_id"),
       inverseJoinColumns = @JoinColumn(name = "club_id"))
    private List<Student> studs = new ArrayList<>();

    public List<Student> getStudents() {
        return studs;
    }

    public void setStudents(List<Student> students) {
        this.studs = students;
    }

    public Club() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Club club = (Club) o;

        return id == club.id;
    }

    @Override
    public int hashCode() {
        return id;
    }

    @Override
    public String toString() {
        return "Club{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", students=" + studs +
                '}';
    }
}
