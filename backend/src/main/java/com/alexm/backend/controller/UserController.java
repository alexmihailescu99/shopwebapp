package com.alexm.backend.controller;

import com.alexm.backend.dao.UserDAO;
import com.alexm.backend.entity.Product;
import com.alexm.backend.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserDAO userDAO;
    @Autowired
   private BCryptPasswordEncoder bCryptPasswordEncoder;
    @GetMapping("/logout")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<String> logout(@CurrentSecurityContext(expression="authentication.name") String username) {
        System.out.println(username);
        SecurityContextHolder.getContext().setAuthentication(null);
        return new ResponseEntity<>("See you later", HttpStatus.OK);
    }

    @PostMapping("/register")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<String> signUp(@RequestBody User user) {
        // Encrypt the password
        User checkIfExists = userDAO.findByName(user.getUsername());
        System.out.println(user);
        if (checkIfExists != null) {
            return new ResponseEntity<>("User already exists", HttpStatus.BAD_REQUEST);
        }
        userDAO.add(new User(user.getUsername(), bCryptPasswordEncoder.encode(user.getPassword()), user.getEmail()));
        return new ResponseEntity<>("User added", HttpStatus.OK);
    }

    @GetMapping("/{name}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<User> showUser(@PathVariable String name) {
        User user = userDAO.findByName(name);
        if (user == null) return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        // Again, probably bad practice, but we don't need the user pass in this case
        user.setPassword("null");
        // There's probably a better way of doing this

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping("/login")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<String> login() {
        System.out.println("SOMEONE IS TRYING TO LOGIN");
        return new ResponseEntity<>("Hi from login", HttpStatus.OK);
    }
}
