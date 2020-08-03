package br.edu.utfpr.pb.aula4.security.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import br.edu.utfpr.pb.aula4.security.filter.AuthenticationTokenFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
@EnableTransactionManagement
public class WebSecurityConfiguration 
					extends WebSecurityConfigurerAdapter{
	
	@Autowired
	private UserDetailsService userDetailsService;
	@Autowired
	private AuthenticationEntryPoint authenticationEntryPoint;
	
	@Autowired
	public void configureAuthentication(
			AuthenticationManagerBuilder 
				authenticationManagerBuilder) throws Exception {
		authenticationManagerBuilder
				.userDetailsService(userDetailsService)
					.passwordEncoder(
						new BCryptPasswordEncoder()	);
	}
		
	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() 
			throws Exception {
		return super.authenticationManagerBean();
	}
	
	@Bean
	public AuthenticationTokenFilter 
				authenticationTokenFilterBean() throws Exception {
		AuthenticationTokenFilter authenticationTokenFilter = 
				new AuthenticationTokenFilter();
		authenticationTokenFilter.setAuthenticationManager(
				super.authenticationManagerBean()
				);
		return authenticationTokenFilter;
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable()
			.exceptionHandling()
				.authenticationEntryPoint(authenticationEntryPoint)
			.and()
			.sessionManagement()
				.sessionCreationPolicy(
						SessionCreationPolicy.STATELESS)
			.and()
			.authorizeRequests()
				.antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
				.antMatchers("/auth/**").permitAll()
				.antMatchers("/genero/**").hasAnyRole("ADMIN", "USER")
				.antMatchers("/produtora/**").hasAnyRole("ADMIN", "USER")
				.antMatchers("/serie/**").hasAnyRole("ADMIN")
				.anyRequest().authenticated();
		
		http.addFilterBefore(authenticationTokenFilterBean(), 
				UsernamePasswordAuthenticationFilter.class);
	}
}







