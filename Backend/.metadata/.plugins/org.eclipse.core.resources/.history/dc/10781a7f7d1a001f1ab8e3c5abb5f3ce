package com.propertypal.backend.service;

import java.util.List;

import com.propertypal.backend.model.User;

public interface UserService {
	User registerUser(User user);
	User loginUser(String email, String password);
	User updateUserDetails(String email, User updatedUser);
	User updateUserPic(String email, String newPicUrl);
	List<User> getAllUsers();
    void deleteUserByEmail(String email);
}
