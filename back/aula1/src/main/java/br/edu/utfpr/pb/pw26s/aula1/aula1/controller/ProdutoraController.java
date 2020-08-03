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

import br.edu.utfpr.pb.pw26s.aula1.aula1.model.Produtora;
import br.edu.utfpr.pb.pw26s.aula1.aula1.repository.ProdutoraRepository;

@RestController
@RequestMapping("produtora")
public class ProdutoraController {

	@Autowired
	private ProdutoraRepository produtoraRepository;
	
	@GetMapping
	public List<Produtora> findAll() {
		return produtoraRepository.findAll();
	}
	// /produtora/1
	@GetMapping("{id}")
	public Produtora findOne(@PathVariable Integer id) {
		return produtoraRepository.findById(id).orElse(null);
	}
	
	@PostMapping
	public Produtora save(@RequestBody @Valid Produtora produtora) {
		return produtoraRepository.save(produtora);
	}
	
	@PutMapping
	public Produtora update(@RequestBody @Valid Produtora produtora) {
		return produtoraRepository.save(produtora);
	}
	
	@DeleteMapping("{id}")
	public void delete (@PathVariable Integer id) {
		produtoraRepository.deleteById(id);
	}
	
}



