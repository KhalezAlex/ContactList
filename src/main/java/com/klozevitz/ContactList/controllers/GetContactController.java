package com.klozevitz.ContactList.controllers;

import com.klozevitz.ContactList.entities.Contact;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

@RestController
public class GetContactController {
    @GetMapping("/getIds")
    public Map<String, int[]> getIds() {
        Map<String, int[]> map = new HashMap<>();
        map.put("ids", AddFirstContactController.getIds());
        return map;
    }

    @GetMapping("/getContact")
    public Contact getContactById(@RequestParam int contactId) {
        return AddFirstContactController.getContactById(contactId);
    }
}
