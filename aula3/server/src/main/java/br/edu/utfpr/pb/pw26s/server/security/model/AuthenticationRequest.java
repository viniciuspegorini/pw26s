package br.edu.utfpr.pb.pw26s.server.security.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthenticationRequest {
	private String username;
	
	private String password;
	
	// {"username" : "admin", "password" : "123"}
}
