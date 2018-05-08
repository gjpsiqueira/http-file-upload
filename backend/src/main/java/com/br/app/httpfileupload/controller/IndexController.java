package com.br.app.httpfileupload.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IndexController {


    @RequestMapping("/")
    public String index() {
        return "It working";
    }

    @RequestMapping(value = "/adm", method = RequestMethod.GET)
    public String adm() {
        return "You're admin!";
    }
}
