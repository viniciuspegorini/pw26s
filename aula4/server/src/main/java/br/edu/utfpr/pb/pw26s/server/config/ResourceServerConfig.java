package br.edu.utfpr.pb.pw26s.server.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;

@Configuration
@EnableResourceServer
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
public class ResourceServerConfig extends ResourceServerConfigurerAdapter{

	@Override
	public void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
				.antMatchers("/categoria/**").permitAll() //hasAnyRole("ADMIN", "USER")
				.antMatchers("/produto/**").permitAll() //.hasAnyRole("ADMIN", "USER")
				.antMatchers("/marca/**").permitAll() //.hasAnyRole("ADMIN")
				.anyRequest().authenticated();
	}
	
}
