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

    @GetMapping("/rent/{city}/{pageno}/{size}")
    public ResponseEntity<Page<Flat>> getRentFlats(
            @PathVariable String city,
            @PathVariable int pageno,
            @PathVariable int size) {
        return ResponseEntity.ok(flatService.getFlatsByTypeAndCity("rent", city, pageno, size));
    }

    @GetMapping("/sell/{city}/{pageno}/{size}")
    public ResponseEntity<Page<Flat>> getSellFlats(
            @PathVariable String city,
            @PathVariable int pageno,
            @PathVariable int size) {
        return ResponseEntity.ok(flatService.getFlatsByTypeAndCity("sell", city, pageno, size));
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Flat> getFlatById(@PathVariable Long id) {
        Flat flat = flatService.getFlatById(id);
        return ResponseEntity.ok(flat);
    }
}
