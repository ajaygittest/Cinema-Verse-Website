package com.cineVerse.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cineVerse.Entity.cineVerse;
import com.cineVerse.repository.CineVerseRepo;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/cine")
@RequiredArgsConstructor
public class CineVerseController {
	
	
	private final CineVerseRepo repo;
	
	@GetMapping("/movies")
	public List<cineVerse> getMovies() {
		
		return repo.findAll();
		
	}
	
	@PostMapping("/insert")
	public void saveMovie(@ModelAttribute cineVerse verse) throws IOException {

	    if (verse.getImageFile() != null) {
	        verse.setImage(verse.getImageFile().getBytes());
	        verse.setImageType(verse.getImageFile().getContentType());
	    }

	   repo.save(verse);
	}

}
