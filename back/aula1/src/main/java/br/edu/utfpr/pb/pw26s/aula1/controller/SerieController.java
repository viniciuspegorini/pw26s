package br.edu.utfpr.pb.pw26s.aula1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.utfpr.pb.pw26s.aula1.model.Serie;
import br.edu.utfpr.pb.pw26s.aula1.repository.SerieRepository;

@RestController
@RequestMapping("serie")
public class SerieController {
	
	@Autowired
	private SerieRepository serieRepository;

	@GetMapping
	public List<Serie> findAll() {
		return serieRepository.findAll();
	}
	
	@GetMapping("{id}")
	public Serie findOne(@PathVariable Long id) {
		return serieRepository.findById(id).orElse(null);
	}
	
	@PostMapping
	public Serie save(@RequestBody Serie serie) {
		return serieRepository.save(serie);
	}
	
	@PutMapping
	public Serie update(@RequestBody Serie serie) {
		return serieRepository.save(serie);
	}
	
	@DeleteMapping("{id}")
	public void delete(@PathVariable Long id) {
		serieRepository.deleteById(id);
	}
	
}
