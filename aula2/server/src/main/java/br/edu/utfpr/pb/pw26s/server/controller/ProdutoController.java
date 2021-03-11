package br.edu.utfpr.pb.pw26s.server.controller;

import br.edu.utfpr.pb.pw26s.server.model.Produto;
import br.edu.utfpr.pb.pw26s.server.service.CrudService;
import br.edu.utfpr.pb.pw26s.server.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("produto")
public class ProdutoController extends CrudController<Produto, Long> {

	@Autowired
	private ProdutoService produtoService;
	
	@Override
	@Valid
	protected CrudService<Produto, Long> getService() {
		return produtoService;
	}
	
}
