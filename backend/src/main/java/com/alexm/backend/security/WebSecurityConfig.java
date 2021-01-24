package com.alexm.backend.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.session.SessionManagementFilter;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;

@Configuration
@EnableWebSecurity
@ComponentScan
@CrossOrigin(origins = "http://localhost:3000")
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Bean
    CorsFilter corsFilter() {
        CorsFilter filter = new CorsFilter();
        return filter;
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
//    @Autowired
//    private MyUserDetailsService userDetailsService;

//    @Autowired
//    private BCryptPasswordEncoder bCryptPasswordEncoder;

//    @Bean
//    CorsConfigurationSource corsConfigurationSource() {
//        CorsConfiguration configuration = new CorsConfiguration();
//        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3300"));
//        configuration.setAllowedMethods(Arrays.asList("GET","POST", "DELETE"));
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", configuration);
//        return source;
//    }

//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
//    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .addFilterBefore(corsFilter(), SessionManagementFilter.class)
                .authorizeRequests()
                //.antMatchers("/**").permitAll()
                .antMatchers("/user/login").permitAll()
                .antMatchers("/user/register").permitAll()
                .antMatchers("/user/checkExpired").authenticated()
                .antMatchers("/product/").permitAll()
                .antMatchers("/product/**").permitAll()
                .antMatchers("/product/update").hasRole("ADMIN")
                .antMatchers("/product/add").hasRole("ADMIN")
                .antMatchers("/product/delete/**").hasRole("ADMIN")
                .and()
                .exceptionHandling()
                .authenticationEntryPoint(new NoPopUpAuth())
                .and()
                // Solves some weird user issues(wrong user being returned for example)
                .httpBasic();
    }



}