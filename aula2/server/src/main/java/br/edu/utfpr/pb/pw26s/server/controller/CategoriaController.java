package br.edu.utfpr.pb.pw26s.server.controller;

import br.edu.utfpr.pb.pw26s.server.model.Categoria;
import br.edu.utfpr.pb.pw26s.server.service.CategoriaService;
import br.edu.utfpr.pb.pw26s.server.service.CrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("categoria")
public class CategoriaController extends CrudController<Categoria, Integer> {

	@Autowired
	private CategoriaService categoriaService;
	
	@Override
	@Valid
	protected CrudService<Categoria, Integer> getService() {
		return categoriaService;
	}
	
}
