package com.alexm.backend.dao;

import com.alexm.backend.entity.Product;

import java.util.List;

public interface ProductDAO {
    public List<Product> findAll();
    public Product findByName(String name);
    public void add(Product product);
    public void update(Product product);
    public void delete(Product product);
}
