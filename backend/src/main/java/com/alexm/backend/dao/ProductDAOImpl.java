package com.alexm.backend.dao;

import com.alexm.backend.entity.Product;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.transaction.Transactional;
import java.util.List;

@Repository
public class ProductDAOImpl implements ProductDAO {
    @Autowired
    private EntityManager entityManager;

    @Override
    @Transactional
    public List<Product> findAll() {
        Session currSession = entityManager.unwrap(Session.class);
        return currSession.createQuery("from Product").getResultList();
    }

    @Override
    @Transactional
    public List<Product> findByName(String name) {
        Session currSession = entityManager.unwrap(Session.class);
        Query query = currSession.createQuery("from Product p where p.name=:name");
        query.setParameter("name", name);
        return query.getResultList();
    }

    @Override
    @Transactional
    public void add(Product product) {
        Session currSession = entityManager.unwrap(Session.class);
        currSession.saveOrUpdate(product);
    }

    @Override
    @Transactional
    public void delete(Product product) {
        Session currSession = entityManager.unwrap(Session.class);
        currSession.delete(product);
    }
}