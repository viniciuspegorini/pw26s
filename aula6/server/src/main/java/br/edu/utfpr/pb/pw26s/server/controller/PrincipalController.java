package br.edu.utfpr.pb.pw26s.server.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class PrincipalController {

    @GetMapping("user-info")
    public Principal principal(Principal principal) {
        return principal;
    }

}
