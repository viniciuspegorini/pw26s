package br.edu.utfpr.pb.aula2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.utfpr.pb.aula2.model.Genero;
import br.edu.utfpr.pb.aula2.service.CrudService;
import br.edu.utfpr.pb.aula2.service.GeneroService;

@RestController
@RequestMapping("genero")
public class GeneroController extends CrudController<Genero, Integer>{

	@Autowired
	private GeneroService generoService;
	
	@Override
	protected CrudService<Genero, Integer> getService() {
		return generoService;
	}
}
