package com.klozevitz.ContactList.controllers;

import com.klozevitz.ContactList.entities.Contact;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UpdateController {
    @GetMapping("/update")
    public String updateContact(@RequestParam int id, @RequestParam String name,
                                @RequestParam String phone, @RequestParam String email,
                                @RequestParam String blogLink, @RequestParam String comment) {
        Contact contact = new Contact(name, phone, email, blogLink, comment);
        contact.setId(id);
        AddFirstContactController.updateContact(contact);
        Contact.print(AddFirstContactController.getContactList());
        return "contact updated";
    }
}
