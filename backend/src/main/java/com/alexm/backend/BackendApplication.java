package com.alexm.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import com.alexm.backend.security.MyUserDetailsService;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class BackendApplication {

	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}

//	@Bean
//	public MyUserDetailsService myUserDetailsService() {
//		return new MyUserDetailsService();
//	}



	@Bean
	public UserDetailsService userDetailsService() {
		return new MyUserDetailsService(); // (1)
	}

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

}
