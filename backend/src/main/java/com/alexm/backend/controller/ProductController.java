package com.alexm.backend.controller;

import com.alexm.backend.dao.ProductDAO;
import com.alexm.backend.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.*;
import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {
    @Autowired
    private ProductDAO productDAO;

    @GetMapping("/")
    // Enable CORS on port 3000
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<Product>> showAll() {
        return new ResponseEntity<>(productDAO.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{name}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<Product>> showByName(@PathVariable String name) {
        return new ResponseEntity<>(productDAO.findByName(name), HttpStatus.OK);
    }

    @PostMapping("/add")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<String> add(String name, String title,
                                      String description, int price) {
        productDAO.add(new Product(name, title, description, price));
        return new ResponseEntity<>("Successfully added " + name, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{name}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<String> delete(@PathVariable String name) {
        List<Product> products = productDAO.findByName(name);
        if (products.isEmpty()) return new ResponseEntity<>("No user found to delete",
                HttpStatus.NOT_FOUND);
        productDAO.delete(products.get(0));
        return new ResponseEntity<>("Sucessfully deleted " + name, HttpStatus.OK);
    }
}
