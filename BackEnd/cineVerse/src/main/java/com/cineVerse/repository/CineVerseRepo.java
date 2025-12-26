package com.cineVerse.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cineVerse.Entity.cineVerse;

@Repository
public interface CineVerseRepo extends JpaRepository<cineVerse, Integer> {

}
