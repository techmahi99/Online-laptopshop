package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Check;

@Repository
public interface CheckRepo extends JpaRepository<Check,String> {

}
