package com.studentconnect.demo.backend.model;

import javax.persistence.*;

@Entity
@Table (name = "teachers")   //needs table for teachers to keep track of teachers/students
public class Teacher {
    private int id;
    private String firstName;
    private String lastName;
    private String userName;
    private String password;


    //pojo below
    public Teacher() {
    }


    //getters and setters below

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    public int getId() { return id;}

    public void setId(int id) {
        this.id = id;
    }

    @Column(name = "firstname")
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    @Column(name = "lastname")
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }




//
//  possibly need a function for auth password for teachers
//

    @Override
    public String toString() {
        return "Teacher{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}





