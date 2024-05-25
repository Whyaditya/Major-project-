package com.propertypal.backend.repository;


import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.propertypal.backend.model.Bungalow;


public interface BungalowRepository extends JpaRepository<Bungalow, Long>{
	Page<Bungalow> findByTypeAndCity(String type, String city, Pageable pageable);
	Bungalow findByBungalowId(Long bungalowId);

}