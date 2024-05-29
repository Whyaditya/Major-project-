package com.propertypal.backend.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.propertypal.backend.model.Flat;

@Repository
public interface FlatRepository extends JpaRepository<Flat, Long> {
	Page<Flat> findByTypeAndCity(String type, String city, Pageable pageable);
	Flat findByFlatId(Long flatId);
	List<Flat> findAllByFlatIdIn(List<Long> flatIds);
}
