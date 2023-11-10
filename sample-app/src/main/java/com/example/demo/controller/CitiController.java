package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.CitiDetailsDTO;
import com.example.demo.service.CitiService;

@RestController
public class CitiController {

	@Autowired
	private CitiService citiService;

	@GetMapping("/getCitiList")
	public ResponseEntity<List<CitiDetailsDTO>> getCitiList() throws Exception {
		return new ResponseEntity<List<CitiDetailsDTO>>(citiService.getCItiList(), HttpStatus.OK);
	}

}
