package com.propertypal.backend.repository;


import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import com.propertypal.backend.model.Bungalow;

public interface BungalowRepository extends JpaRepository<Bungalow, Long>{
	List<Bungalow> findByLocationAndType(String location, String type);
	List<Bungalow> findByType(String type, PageRequest pageRequest);

	

}