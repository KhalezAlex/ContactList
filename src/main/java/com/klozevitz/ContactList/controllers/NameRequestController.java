package com.klozevitz.ContactList.controllers;

import com.klozevitz.ContactList.entities.Contact;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;

@RestController
public class NameRequestController {
    @GetMapping("/nameRequest")
    public LinkedList<Contact> request(@RequestParam String name) {
        return AddFirstContactController.getSelectByName(name);
    }
}
