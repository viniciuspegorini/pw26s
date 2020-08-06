package br.edu.utfpr.pb.pw26s.aula1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.utfpr.pb.pw26s.aula1.model.Produtora;
import br.edu.utfpr.pb.pw26s.aula1.repository.ProdutoraRepository;

@RestController
@RequestMapping("produtora")
public class ProdutoraController {

	@Autowired
	private ProdutoraRepository produtoraRepository;
	
	@GetMapping
	public List<Produtora> findAll() {
		return produtoraRepository.findAll();
	}
	
	@GetMapping("1")
	public Produtora findOne() {
		return produtoraRepository.findById(1L).orElse(null);
	}
}
