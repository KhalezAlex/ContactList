package com.klozevitz.ContactList.controllers;

import com.klozevitz.ContactList.entities.Contact;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AddController {
    @GetMapping("/add")
        public boolean addContact(@RequestParam String name, @RequestParam String phone,
                @RequestParam String email, @RequestParam String blogLink,
                @RequestParam String comment) {
        AddFirstContactController.addContact(new Contact(name ,phone, email, blogLink, comment));
        Contact.print(AddFirstContactController.getContactList());
        return true;
    }
}
