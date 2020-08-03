package br.edu.utfpr.pb.aula2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.utfpr.pb.aula2.model.Produtora;
import br.edu.utfpr.pb.aula2.service.CrudService;
import br.edu.utfpr.pb.aula2.service.ProdutoraService;

@RestController
@RequestMapping("produtora")
public class ProdutoraController extends CrudController<Produtora, Integer>{

	@Autowired
	private ProdutoraService produtoraService;
	
	@Override
	protected CrudService<Produtora, Integer> getService() {
		return produtoraService;
	}
}
