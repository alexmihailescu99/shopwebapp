package com.alexm.backend.dao;

import com.alexm.backend.entity.Role;

public interface RoleDAO {
    public Role findByName(String name);
}
