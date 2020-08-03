package br.edu.utfpr.pb.aula3.model;

import java.math.BigDecimal;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "serie")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = {"id"})
@ToString
public class Serie {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "nome", length = 254, nullable = false)
	private String nome;
	
	@Column(name = "resumo", length = 1024, nullable = false)
	private String resumo;

	@Column(name = "data_estreia", nullable = false)
	private LocalDate dataEstreia;

	@Column(name = "data_encerramento", nullable = true)
	private LocalDate dataEncerramento;
	
	@Column(nullable = false)
	private BigDecimal nota;
	
	@ManyToOne
	@JoinColumn(name = "produtora_id", 
			referencedColumnName = "id")
	private Produtora produtora;
	
	@ManyToOne
	@JoinColumn(name = "genero_id", 
			referencedColumnName = "id")
	private Genero genero;
	
	@Column(name = "imagem", length = 1024, nullable = true)
	private String imagem;
}

