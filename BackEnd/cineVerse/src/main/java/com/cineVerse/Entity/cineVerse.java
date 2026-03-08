package com.cineVerse.Entity;

import org.springframework.web.multipart.MultipartFile;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "cineverse")
public class cineVerse {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	private String title;
	
	private String rating;
	
	private String genre;
	
	private String synopsis;
	
	private String language;
	
	@Column(name = "image_type")
	  private String imageType;
	

    @Lob
    @Column(columnDefinition = "LONGBLOB")
	private byte[] image;
    
    @Transient
    private MultipartFile imageFile;

}
