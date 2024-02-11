
import User from '../models/user.js';

export const signUp = async (req, res) => {
    try {
      const { username, email, password, phoneNumber } = req.body;
  
      // Check if email and phoneNumber are provided
      if (!email) {
        return res.status(400).json({ message: 'Email is required' });
      }
  
      // Check if phoneNumber is provided and not empty
      if (phoneNumber && phoneNumber.trim() === '') {
        return res.status(400).json({ message: 'Phone number cannot be empty' });
      }
  
      // Check if user already exists
      const existingUser = await User.findOne({ $or: [{ username }, { email }] });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Create new user
      const newUser = new User({ username, email, password });
  
      // Assign phoneNumber if provided
      if (phoneNumber) {
        newUser.phoneNumber = phoneNumber.trim();
      }
  
      // Save the new user to the database
      await newUser.save();
  
      // Return success response
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  



  export const signIn = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ $or: [{ username }, { email: username }] });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      // Simple password check
      if (user.password !== password) {
        return res.status(401).json({ message: 'Invalid password' });
      }
      // If password matches
      res.json({ message: 'Login successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  

