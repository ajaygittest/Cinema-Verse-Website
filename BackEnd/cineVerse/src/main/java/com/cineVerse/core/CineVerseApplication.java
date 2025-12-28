package com.cineVerse.core;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.persistence.autoconfigure.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = {"com.cineVerse.controller", "com.cineVerse.service", "com.cineVerse.core"})
@EntityScan(basePackages = "com.cineVerse.Entity")
@EnableJpaRepositories(basePackages = "com.cineVerse.repository")
public class CineVerseApplication {

	public static void main(String[] args) {
		SpringApplication.run(CineVerseApplication.class, args);
	}

}
