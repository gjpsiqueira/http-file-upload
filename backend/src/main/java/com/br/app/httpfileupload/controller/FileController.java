package com.br.app.httpfileupload.controller;

import com.br.app.httpfileupload.model.UploadFile;
import com.br.app.httpfileupload.service.FileStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
public class FileController {

    @Autowired
    private FileStorageService fileStorageService;

    @RequestMapping(value = "/uploadFile", method = RequestMethod.POST)
    public UploadFile uploadFileResponse(@ModelAttribute UploadFile uploadFile, @RequestParam("file") MultipartFile file) {
        String fileName = fileStorageService.storeFile(file);

        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/downloadFile/")
                .path(fileName)
                .toUriString();

        return new UploadFile(fileName, fileDownloadUri,
                file.getContentType(),
                file.getSize(),
                uploadFile.getObservacao(),
                uploadFile.getFilial(),
                uploadFile.getCategoria());
    }

}
