package br.edu.utfpr.pb.pw26s.server.service.impl;

import br.edu.utfpr.pb.pw26s.server.model.Marca;
import br.edu.utfpr.pb.pw26s.server.repository.MarcaRepository;
import br.edu.utfpr.pb.pw26s.server.service.MarcaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class MarcaServiceImpl extends CrudServiceImpl<Marca, Integer>
		implements MarcaService{

	@Autowired
	private MarcaRepository marcaRepository;
	
	@Override
	protected JpaRepository<Marca, Integer> getRepository() {
		return marcaRepository;
	}

}
