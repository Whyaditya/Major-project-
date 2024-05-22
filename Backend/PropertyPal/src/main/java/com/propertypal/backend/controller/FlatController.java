package com.propertypal.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.propertypal.backend.model.Flat;
import com.propertypal.backend.service.FlatService;

@RestController
@RequestMapping("/api/flats")
public class FlatController {

    @Autowired
    private FlatService flatService;

    @PostMapping("/add")
    public ResponseEntity<Flat> addFlat(@RequestBody Flat flat) {
        Flat savedFlat = flatService.saveFlat(flat);
        return ResponseEntity.ok(savedFlat);
    }

    @GetMapping("/rent")
    public ResponseEntity<Page<Flat>> getRentFlats(
            @RequestParam(value = "page", defaultValue = "0") int page,
            @RequestParam(value = "size", defaultValue = "10") int size,
            @RequestParam(value = "city") String city) {
        return ResponseEntity.ok(flatService.getFlatsByTypeAndCity("rent", city, page, size));
    }

    @GetMapping("/sell")
    public ResponseEntity<Page<Flat>> getSellFlats(
            @RequestParam(value = "page", defaultValue = "0") int page,
            @RequestParam(value = "size", defaultValue = "10") int size,
            @RequestParam(value = "city") String city) {
        return ResponseEntity.ok(flatService.getFlatsByTypeAndCity("sell", city, page, size));
    }
}