package com.klozevitz.ContactList.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DeleteController {
    @GetMapping("/delete")
    public boolean deleteContact(@RequestParam int id) {
        return AddFirstContactController.deleteContact(id);
    }
}
