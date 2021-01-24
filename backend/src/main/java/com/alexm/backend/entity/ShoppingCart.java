package com.alexm.backend.entity;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "shopping_cart")
public class ShoppingCart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "owner")
    private String owner;

    Collection<Product> products;
}
