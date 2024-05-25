package com.propertypal.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.propertypal.backend.model.Bungalow;
import com.propertypal.backend.repository.BungalowRepository;

@Service
public class BungalowService {
	
	@Autowired
	private BungalowRepository bungalowRepository;
	
	public Bungalow registerBungalow(Bungalow bungalow) {
		return bungalowRepository.save(bungalow);
	}
	
	public List<Bungalow> findBungalowsByLocationAndType(String location, String type){
		return bungalowRepository.findByLocationAndType(location, type);
		
	}
	public List<Bungalow> findBungalowsByTypeLimited(String type) {
        return bungalowRepository.findByType(type, PageRequest.of(0, 10));
    }
		
	

}