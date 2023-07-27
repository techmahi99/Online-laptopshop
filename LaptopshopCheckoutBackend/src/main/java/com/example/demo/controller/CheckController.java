package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Check;
import com.example.demo.repo.CheckRepo;


@RestController
@CrossOrigin("http://localhost:4200")
public class CheckController {
	@Autowired
	private CheckRepo repo;
	
	@PostMapping("/check")
	public ResponseEntity<Check> Checkout(@RequestBody Check check)
	{
		System.out.println("Controlled is called");
		return ResponseEntity.ok(repo.save(check));
	}

}
