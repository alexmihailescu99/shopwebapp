package com.alexm.backend.dao;

import com.alexm.backend.entity.User;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.transaction.Transactional;
import java.util.List;

@Repository
public class UserDAOImpl implements UserDAO {
    @Autowired
    private EntityManager entityManager;

    @Override
    @Transactional
    public User findByName(String name) {
        Session currSession = entityManager.unwrap(Session.class);
        Query query = currSession.createQuery("from User u where u.username=:name");
        query.setParameter("name", name);
        List<User> list = query.getResultList();
        return (!list.isEmpty()) ? list.get(0) : null;
    }

    @Override
    @Transactional
    public void add(User user) {
        Session currSession = entityManager.unwrap(Session.class);
        currSession.saveOrUpdate(user);
    }
}
