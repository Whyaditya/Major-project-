package com.propertypal.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.propertypal.backend.model.Flat;
import com.propertypal.backend.model.User;
import com.propertypal.backend.repository.FlatRepository;

@Service
public class FlatServiceImpl implements FlatService {

    @Autowired
    private FlatRepository flatRepository;

    @Override
    public Flat saveFlat(Flat flat) {
        return flatRepository.save(flat);
    }

    @Override
    public Page<Flat> getFlatsByTypeAndCity(String type, String city, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return flatRepository.findByTypeAndCity(type, city, pageable);
    }
    
    @Override
    public List<Flat> getAllFlat() {
        return flatRepository.findAll();
    }
    
    @Override
    public void deleteFlatByFlatId(Long flatId) {
        Flat flat = flatRepository.findByFlatId(flatId);
        if (flat != null) {
            flatRepository.delete(flat);
        }
    }
    
    
}


