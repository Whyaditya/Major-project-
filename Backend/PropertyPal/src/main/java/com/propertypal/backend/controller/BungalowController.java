package com.propertypal.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.propertypal.backend.model.Bungalow;
import com.propertypal.backend.service.BungalowService;

@RestController
@CrossOrigin("http://localhost:5173")
@RequestMapping("/api") 
public class BungalowController {
    
    @Autowired
    private BungalowService bungalowService;
    
    @GetMapping("/search")
    public List<Bungalow> searchBungalows(@RequestParam String location, @RequestParam String type){
        return bungalowService.findBungalowsByLocationAndType(location, type);
    }
    
    @GetMapping("/bungalows/sell")
    public List<Bungalow> getSellBungalows() {
        return bungalowService.findBungalowsByTypeLimited("Sell");
    }
    
    @GetMapping("/bungalows/rent")
    public List<Bungalow> getRentBungalows() {
        return bungalowService.findBungalowsByTypeLimited("Rent");
    }
    
    @PostMapping("/register")
    public Bungalow registerBungalow(@RequestBody Bungalow bungalow) {
        return bungalowService.registerBungalow(bungalow);
    }
}