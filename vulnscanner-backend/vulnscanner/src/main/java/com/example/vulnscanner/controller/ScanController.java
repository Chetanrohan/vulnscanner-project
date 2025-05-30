package com.example.vulnscanner.controller;

import com.example.vulnscanner.model.DependencyVulnerability;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/scan")
@CrossOrigin(origins = "http://localhost:3000")  // allows React frontend
public class ScanController {

    @GetMapping
    public List<DependencyVulnerability> scanDependencies() {
        // Dummy data — later you can connect real scanners
        return List.of(
                new DependencyVulnerability("log4j-core", "2.14.1", "CVE-2021-44228", 10.0),
                new DependencyVulnerability("commons-io", "2.6", "None", 0.0)
        );
    }
}
