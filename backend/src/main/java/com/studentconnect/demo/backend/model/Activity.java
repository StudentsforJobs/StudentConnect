package com.studentconnect.demo.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "activities")
public class Activity {
    private int id;
    private String name;
    private Set<Student> students;

    @JsonIgnore
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable (name = "students_activities",
    joinColumns = @JoinColumn(name = "student_id", referencedColumnName = "id"),
    inverseJoinColumns = @JoinColumn(name = "activity_id", referencedColumnName = "id"))
   public Set<Student> getStudents() { return students;}

    public void setStudents(Set<Student> students) {
        this.students = students;
    }

    public Activity() {
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

        Activity activity = (Activity) o;
        
        return id == activity.id;
    }

    @Override
    public int hashCode() { return id;}

    @Override
    public String toString() {
        return "Activity{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", students=" + students +
                '}';
    }
}

