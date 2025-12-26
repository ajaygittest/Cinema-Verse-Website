package com.cineVerse.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "cineVerse")
public class cineVerse {
	
	@Id
	private int id;
	
	private String title;
	
	private int rating;
	
	private String genre;
	
	private String synopsis;
	
	private byte[] image;

}
