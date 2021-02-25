package br.edu.utfpr.pb.pw26s.server.controller;

import br.edu.utfpr.pb.pw26s.server.model.Produto;
import br.edu.utfpr.pb.pw26s.server.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("produto")
public class ProdutoController {
	
	@Autowired
	private ProdutoService produtoService;
	
	@GetMapping
	public List<Produto> findAll() {
		return produtoService.findAll();
	}

	@GetMapping("page")
	public Page<Produto> findAll(@RequestParam int page,
						   @RequestParam int size,
						   @RequestParam(required = false) String order,
						   @RequestParam(required = false) Boolean asc) {
		
		PageRequest pageRequest = PageRequest.of(page, size);
		if (order != null && asc != null) {
			pageRequest = PageRequest.of(page, size, 
					asc ? Sort.Direction.ASC : Sort.Direction.DESC, order);
		}
		return produtoService.findAll(pageRequest);
	}
	
	@GetMapping("{id}")
	public Produto findOne(@PathVariable Long id) {
		return produtoService.findOne(id);
	}
	
	@PostMapping
	public Produto save(@RequestBody @Valid Produto entity) {
		return produtoService.save(entity);
	}
	
	@GetMapping("exists/{id}")
	public boolean exists(@PathVariable Long id) {
		return produtoService.exists(id);
	}
	
	@GetMapping("count")
	public long count() {
		return produtoService.count();
	}
	
	@DeleteMapping("{id}")
	public void delete(@PathVariable Long id) {
		produtoService.delete(id);
	}

}
