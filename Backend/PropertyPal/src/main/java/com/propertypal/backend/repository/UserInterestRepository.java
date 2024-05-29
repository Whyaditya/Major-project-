package com.propertypal.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.propertypal.backend.model.UserInterest;

@Repository
public interface UserInterestRepository extends JpaRepository<UserInterest, Long> {
	 List<UserInterest> findByUserId(Long userId);
	 @Query("SELECT ui.id FROM UserInterest ui WHERE ui.user.id = :userId AND ui.flat.flatId = :flatId")
	    Long findIdByUserIdAndFlatId(@Param("userId") Long userId, @Param("flatId") Long flatId);

	    @Query("SELECT ui.id FROM UserInterest ui WHERE ui.user.id = :userId AND ui.bungalow.bungalowId = :bungalowId")
	    Long findIdByUserIdAndBungalowId(@Param("userId") Long userId, @Param("bungalowId") Long bungalowId);
}