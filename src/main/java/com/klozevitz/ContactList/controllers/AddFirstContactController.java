package com.klozevitz.ContactList.controllers;

import com.klozevitz.ContactList.entities.Contact;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import java.util.LinkedList;

@Controller
public class AddFirstContactController {
    private static final LinkedList<Contact> contactList = new LinkedList<>();

    public static LinkedList<Contact> getContactList() {
        return contactList;
    }

    private static int getNextId() {
        if (contactList.isEmpty()) return 0;
        else return contactList.getLast().getId() + 1;
    }

    public static void addContact(Contact contact) {
        contact.setId(getNextId());
        contactList.add(contact);
    }
    @GetMapping("/addContact")
    public String addContact(@RequestParam String name, @RequestParam String phone,
                             @RequestParam String email, @RequestParam String blogLink,
                             @RequestParam String comment, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("phone", phone);
        model.addAttribute("email", email);
        model.addAttribute("blogLink", blogLink);
        model.addAttribute("comment", comment);
        Contact contact = new Contact(name, phone, email, blogLink, comment);
        addContact(contact);
        model.addAttribute("listSize", contactList.size());
        Contact.print(contactList);
        return "addContact";
    }

    public static int[] getIds() {
        int[] ids = new int[contactList.size()];
        for (int i = 0; i < ids.length; i++)
            ids[i] = contactList.get(i).getId();
        return ids;
    }

    public static Contact getContactById(int id) {
        return contactList.get(getContactIdByEntityId(id));
    }

    private static int getContactIdByEntityId(int id) {
        for (int i = 0; i < contactList.size(); i++) {
            if (contactList.get(i).getId() == id)
                return i;
        }
        return -1;
    }

    public static void updateContact(Contact contact) {
        int contactListId = getContactIdByEntityId(contact.getId());
        if (contactListId == -1)
            return;
        contactList.get(contactListId).setName(contact.getName());
        contactList.get(contactListId).setPhone(contact.getPhone());
        contactList.get(contactListId).setEmail(contact.getEmail());
        contactList.get(contactListId).setBlogLink(contact.getBlogLink());
        contactList.get(contactListId).setComment(contact.getComment());
    }


    private static boolean idValid(int id) {
        for (Contact c: contactList)
            if (c.getId() == id) return true;
        return false;
    }
    public static boolean deleteContact(int id) {
        if (!idValid(id)) return false;
        contactList.remove(getContactIdByEntityId(id));
        return true;
    }
}
