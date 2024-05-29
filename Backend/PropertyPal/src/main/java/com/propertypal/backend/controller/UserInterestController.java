package com.propertypal.backend.controller;

import com.propertypal.backend.model.Bungalow;
import com.propertypal.backend.model.Flat;
import com.propertypal.backend.model.UserInterest;
import com.propertypal.backend.repository.BungalowRepository;
import com.propertypal.backend.repository.FlatRepository;
import com.propertypal.backend.service.UserInterestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/user-interests")
public class UserInterestController {

    @Autowired
    private UserInterestService userInterestService;
    
    @Autowired
    private FlatRepository flatRepository;

    @Autowired
    private BungalowRepository bungalowRepository;


    @PostMapping("/add")
    public ResponseEntity<UserInterest> addInterest(@RequestParam Long userId, @RequestParam(required = false) Long flatId, @RequestParam(required = false) Long bungalowId) {
        UserInterest userInterest = userInterestService.addInterest(userId, flatId, bungalowId);
        return ResponseEntity.ok(userInterest);
    }

    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteInterest(@PathVariable Long id) {
        userInterestService.deleteInterest(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/find/{userId}")
    public ResponseEntity<Long> isPropertyInterestedByUser(@PathVariable Long userId, @RequestParam(required = false) Long flatId, @RequestParam(required = false) Long bungalowId) {
        Long userInterestId = userInterestService.isPropertyInterestedByUser(userId, flatId, bungalowId);
        return ResponseEntity.ok(userInterestId);
    }
    
    @GetMapping("/{userId}")
    public ResponseEntity<List<Object>> getUserInterests(@PathVariable Long userId) {
        List<UserInterest> userInterests = userInterestService.getUserInterests(userId);

        List<Long> flatIds = userInterests.stream()
                .map(UserInterest::getFlat)
                .filter(flat -> flat != null)
                .map(Flat::getFlatId)
                .collect(Collectors.toList());

        List<Long> bungalowIds = userInterests.stream()
                .map(UserInterest::getBungalow)
                .filter(bungalow -> bungalow != null)
                .map(Bungalow::getBungalowId)
                .collect(Collectors.toList());

        List<Flat> flats = flatRepository.findAllByFlatIdIn(flatIds);
        List<Bungalow> bungalows = bungalowRepository.findAllByBungalowIdIn(bungalowIds);

        List<Object> properties = flats.stream()
                .map(flat -> (Object) flat)
                .collect(Collectors.toList());
        properties.addAll(bungalows.stream()
                .map(bungalow -> (Object) bungalow)
                .collect(Collectors.toList()));

        return ResponseEntity.ok(properties);
    }

}
