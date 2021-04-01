package br.edu.utfpr.pb.pw26s.server.controller;

import java.security.Principal;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PrincipalController {

	@GetMapping("user-info")
	public Principal principal(Principal principal) {
		return principal;
	}

}
