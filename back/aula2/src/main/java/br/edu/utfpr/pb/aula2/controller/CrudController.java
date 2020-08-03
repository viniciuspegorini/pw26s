package br.edu.utfpr.pb.aula2.controller;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import br.edu.utfpr.pb.aula2.service.CrudService;

public abstract class CrudController <T, ID extends Serializable> {
	
	protected abstract CrudService<T, ID> getService();
	
	@GetMapping
	public List<T> findAll() {
		return getService().findAll();
	}
	
	@GetMapping("{id}")
	public T findOne(@PathVariable ID id) {
		return getService().findOne(id);
	}
	
	@GetMapping("exists/{id}")
	public boolean exists(@PathVariable ID id) {
		return getService().exists(id);
	}
	
	@GetMapping("count")
	public long count() {
		return getService().count();
	}
	
	@DeleteMapping("{id}")
	public void delete(@PathVariable ID id) {
		getService().delete(id);
	}
	
	@GetMapping("page")  // /page?page=1&size=5
	public Page<T> findAllPaged(@RequestParam int page,
								@RequestParam int size,
								@RequestParam(required = false) String order,
								@RequestParam(required = false) Boolean asc){
		PageRequest pageRequest = PageRequest.of(page, size);
		if (order != null && asc != null) {
			pageRequest = PageRequest.of(page, size, asc ? Sort.Direction.ASC: Sort.Direction.DESC, order);
		}
		return getService().findAll(pageRequest);
	}
	
	
	
	
}
