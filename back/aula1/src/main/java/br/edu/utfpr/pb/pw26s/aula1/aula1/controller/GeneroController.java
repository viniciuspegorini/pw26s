package br.edu.utfpr.pb.pw26s.aula1.aula1.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.utfpr.pb.pw26s.aula1.aula1.model.Genero;
import br.edu.utfpr.pb.pw26s.aula1.aula1.repository.GeneroRepository;

@RestController
@RequestMapping("genero")
public class GeneroController {

	@Autowired
	private GeneroRepository generoRepository;
	
	@GetMapping
	public List<Genero> findAll() {
		return generoRepository.findAll();
	}
	// /genero/1
	@GetMapping("{id}")
	public Genero findOne(@PathVariable Integer id) {
		return generoRepository.findById(id).orElse(null);
	}
	
	@PostMapping
	public Genero save(@RequestBody @Valid Genero genero) {
		return generoRepository.save(genero);
	}
	
	@PutMapping
	public Genero update(@RequestBody @Valid Genero genero) {
		return generoRepository.save(genero);
	}
	
	@DeleteMapping("{id}")
	public void delete (@PathVariable Integer id) {
		generoRepository.deleteById(id);
	}
	
}



