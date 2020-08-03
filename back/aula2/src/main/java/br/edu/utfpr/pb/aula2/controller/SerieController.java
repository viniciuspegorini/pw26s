package br.edu.utfpr.pb.aula2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.utfpr.pb.aula2.model.Serie;
import br.edu.utfpr.pb.aula2.service.CrudService;
import br.edu.utfpr.pb.aula2.service.SerieService;

@RestController
@RequestMapping("serie")
public class SerieController extends CrudController<Serie, Long>{

	@Autowired
	private SerieService serieService;
	
	@Override
	protected CrudService<Serie, Long> getService() {
		return serieService;
	}
}
