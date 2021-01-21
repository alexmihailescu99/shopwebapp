package com.alexm.backend.dao;

import com.alexm.backend.entity.User;

public interface UserDAO {
    public User findByName(String name);
    public void add(User user);
}
