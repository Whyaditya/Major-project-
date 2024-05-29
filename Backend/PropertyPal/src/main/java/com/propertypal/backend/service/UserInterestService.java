package com.propertypal.backend.service;
import com.propertypal.backend.model.UserInterest;

import java.util.List;

public interface UserInterestService {
	UserInterest addInterest(Long userId, Long flatId, Long bungalowId);
    List<UserInterest> getUserInterests(Long userId);
    void deleteInterest(Long id);
    Long isPropertyInterestedByUser(Long userId, Long flatId, Long bungalowId);
}