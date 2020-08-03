package br.edu.utfpr.pb.aula3.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.utfpr.pb.aula3.model.Genero;
import br.edu.utfpr.pb.aula3.service.CrudService;
import br.edu.utfpr.pb.aula3.service.GeneroService;

@RestController
@RequestMapping("genero")
public class GeneroController extends CrudController<Genero, Integer> {

	@Autowired
	private GeneroService generoService;
	
	@Override
	@Valid
	protected CrudService<Genero, Integer> getService() {
		return generoService;
	}
	
}
	/*
	@Autowired
	private GeneroService generoService;
	
	@GetMapping
	@ResponseBody
	public List<Genero> findAll(){
		return generoService.findAll();
	}
	
	@GetMapping("{id}")
	public Genero findOne(@PathVariable Integer id) {
		return generoService.findOne(id);
	}
	
	@PostMapping
	public Genero save(@RequestBody @Valid Genero genero) {
		return generoService.save(genero);
	}

	@PutMapping
	public Genero update(@RequestBody @Valid Genero genero) {
		return generoService.save(genero);
	}
	
	@DeleteMapping("{id}")
	public void delete(@PathVariable Integer id) {
		generoService.delete(id);
	} 
	
	@GetMapping("count")
	public long count() {
		return generoService.count();
	}
}*/
