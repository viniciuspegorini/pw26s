package br.edu.utfpr.pb.pw26s.server.controller;

import br.edu.utfpr.pb.pw26s.server.model.Categoria;
import br.edu.utfpr.pb.pw26s.server.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("categoria")
public class CategoriaController {
	
	@Autowired
	private CategoriaService categoriaService;
	
	@GetMapping // https://localhost/categoria
	public List<Categoria> findAll() {
		return categoriaService.findAll();
	}

	@GetMapping("page") // https://localhost/categoria?page=1&size=10&order=descricao&asc=true
	public Page<Categoria> findAll(@RequestParam int page,
						   @RequestParam int size,
						   @RequestParam(required = false) String order,
						   @RequestParam(required = false) Boolean asc) {
		
		PageRequest pageRequest = PageRequest.of(page, size);
		if (order != null && asc != null) {
			pageRequest = PageRequest.of(page, size, 
					asc ? Sort.Direction.ASC : Sort.Direction.DESC, order);
		}
		return categoriaService.findAll(pageRequest);
	}
	
	@GetMapping("{id}") // https://localhost/categoria/1
	public Categoria findOne(@PathVariable Integer id) {
		return categoriaService.findOne(id);
	}
	
	@PostMapping
	public Categoria save(@RequestBody @Valid Categoria entity) {
		return categoriaService.save(entity);
	}
	
	@GetMapping("exists/{id}")
	public boolean exists(@PathVariable Integer id) {
		return categoriaService.exists(id);
	}
	
	@GetMapping("count")
	public long count() {
		return categoriaService.count();
	}
	
	@DeleteMapping("{id}")
	public void delete(@PathVariable Integer id) {
		categoriaService.delete(id);
	}

}
