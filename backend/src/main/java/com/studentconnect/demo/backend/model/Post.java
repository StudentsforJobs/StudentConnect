package com.studentconnect.demo.backend.model;

import javax.persistence.*;

@Entity
@Table(name = "posts")
public class Post {
    private int id;
    private int studentId;
    private int teacherId;
    private String content;
    private int subjectId;

    public Post() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getStudId() {
        return studentId;
    }

    public void setStudId(int studId) {
        this.studentId = studId;
    }

    public int getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(int teacherId) {
        this.teacherId = teacherId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(int subjectId) {
        this.subjectId = subjectId;
    }

    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", studentId=" + studentId +
                ", teacherId=" + teacherId +
                ", content='" + content + '\'' +
                ", subjectId=" + subjectId +
                '}';
    }
}
