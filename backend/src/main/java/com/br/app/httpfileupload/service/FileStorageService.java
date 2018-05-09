package com.br.app.httpfileupload.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Service
public class FileStorageService {

    private final Path fileStorageLocation;

    @Autowired
    public FileStorageService() {
        this.fileStorageLocation = Paths.get("./uploads").toAbsolutePath().normalize();

        try {
            Files.createDirectories(this.fileStorageLocation);
        }
        catch(Exception ex) {
            ex.printStackTrace();
        }

    }
    public String storeFile(MultipartFile file) {
        // Normalize file name
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        try {
            // Check if the file's name contains invalid characters
            if(fileName.contains("..")) {
                System.out.println("Sorry! Filename contains invalid path sequence " + fileName);
            }

            // Copy file to the target location (Replacing existing file with the same name)
            Path targetLocation = this.fileStorageLocation.resolve(fileName);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

            return fileName;
        } catch (IOException ex) {
            System.out.println("Could not store file " + fileName + ". Please try again!" + ex.getMessage());
        }

        return fileName;
    }

    public Resource loadFileAsResource(String fileName) {
        Resource resource = null;

        try {
            Path filePath = this.fileStorageLocation.resolve(fileName).normalize();
            resource = (Resource) new UrlResource(filePath.toUri());
            if(resource.exists()) {
                return resource;
            } else {
                System.out.println("File not found " + fileName);
            }
        }catch(MalformedURLException ex) {
            ex.printStackTrace();
        }

        return resource;

    }

}
