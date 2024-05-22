package com.propertypal.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.propertypal.backend.model.Flat;
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
}


