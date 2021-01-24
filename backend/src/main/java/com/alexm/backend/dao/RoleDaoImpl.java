package com.alexm.backend.dao;

import com.alexm.backend.entity.Role;
import com.alexm.backend.entity.User;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.transaction.Transactional;
import java.util.List;

@Repository
public class RoleDaoImpl implements RoleDAO {
    @Autowired
    private EntityManager entityManager;

    @Override
    @Transactional
    public Role findByName(String name) {
        Session currSession = entityManager.unwrap(Session.class);
        Query query = currSession.createQuery("from Role r where r.name=:name");
        query.setParameter("name", name);
        List<Role> list = query.getResultList();
        return (!list.isEmpty()) ? list.get(0) : null;
    }
}
