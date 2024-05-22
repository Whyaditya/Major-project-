package com.propertypal.backend.service;

import org.springframework.data.domain.Page;
import com.propertypal.backend.model.Flat;


public interface FlatService {
    Flat saveFlat(Flat flat);
    Page<Flat> getFlatsByTypeAndCity(String type, String city, int page, int size);
   
}