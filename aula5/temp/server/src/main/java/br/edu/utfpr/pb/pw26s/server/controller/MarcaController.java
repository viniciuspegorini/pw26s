package br.edu.utfpr.pb.pw26s.server.controller;

import br.edu.utfpr.pb.pw26s.server.model.Marca;
import br.edu.utfpr.pb.pw26s.server.service.MarcaService;
import br.edu.utfpr.pb.pw26s.server.service.CrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("marca")
public class MarcaController extends CrudController<Marca, Integer> {

	@Autowired
	private MarcaService marcaService;
	
	@Override
	@Valid
	protected CrudService<Marca, Integer> getService() {
		return marcaService;
	}
	
}
