package br.edu.utfpr.pb.aula3.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import br.edu.utfpr.pb.aula3.model.Genero;
import br.edu.utfpr.pb.aula3.repository.GeneroRepository;
import br.edu.utfpr.pb.aula3.service.GeneroService;

@Service
public class GeneroServiceImpl 
		extends CrudServiceImpl<Genero, Integer>
		implements GeneroService{

	@Autowired
	private GeneroRepository generoRepository;
	
	@Override
	protected JpaRepository<Genero, Integer> getRepository() {
		return generoRepository;
	}

}
