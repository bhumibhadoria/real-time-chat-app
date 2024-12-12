package com.chat.app.chatroomapp.models;

public class Message {

    private String name;
    private String content;

//constructor created
    public Message(String name, String content) {
        this.name = name;
        this.content = content;
    }
//getters and setters created
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
