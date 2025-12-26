package com.cineVerse.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cineVerse.Entity.cineVerse;
import com.cineVerse.repository.CineVerseRepo;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/cine")
@AllArgsConstructor
public class CineVerseController {
	
	
	private final CineVerseRepo repo;
	
	@GetMapping("/movies")
	public List<cineVerse> getMovies() {
		
		return repo.findAll();
		
	}

}
