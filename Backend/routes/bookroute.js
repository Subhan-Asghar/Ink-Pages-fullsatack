const express = require('express');
const Book = require('../models/book');
const router = express.Router();

// Create a book
router.post('/admin/create', async (req, res) => {
    try {
        const { title, img, description, price, category } = req.body;

        if (!title || !description || !price || !category) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newBook = await Book.create({
            title,
            img,
            description,
            price,
            category
        });

        res.status(201).json({
            message: "Book Created",
            data: newBook
        });
    } catch (err) {
        res.status(400).json({
            message: "Error creating book",
            error: err.message
        });
    }
});

// Delete a book
router.delete('/admin/delete', async (req, res) => {
    try {
        const { id } = req.query;

        if (!id) return res.status(400).json({ message: "Book ID is required" });

        const result = await Book.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json({
            message: "Book Deleted"
        });
    } catch (error) {
        res.status(400).json({
            message: "Error deleting book",
            error: error.message
        });
    }
});

// Get a book by ID
router.get('/admin/book', async (req, res) => {
    try {
        const { id } = req.query;

        if (!id) return res.status(400).json({ message: "Book ID is required" });

        const result = await Book.findById(id);
        if (!result) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json({
            data: result
        });
    } catch (error) {
        res.status(400).json({
            message: "Error fetching book",
            error: error.message
        });
    }
});

// Update a book
router.put('/admin/update', async (req, res) => {
    try {
        const { id } = req.query;
        const { title, img, description, price, category } = req.body;

        if (!id) return res.status(400).json({ message: "Book ID is required" });

        const updatedBook = await Book.findByIdAndUpdate(
            id,
            { title, img, description, price, category },
            { new: true, runValidators: true }
        );

        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json({
            message: "Book Updated",
            data: updatedBook
        });
    } catch (error) {
        res.status(400).json({
            message: "Error updating book",
            error: error.message
        });
    }
});

// Get all books
router.get('/', async (req, res) => {
    try {
        const result = await Book.find();
        res.status(200).json({
            data: result
        });
    } catch (err) {
        res.status(400).json({
            message: "Error fetching books",
            error: err.message
        });
    }
});
//Search book by name
router.get('/book/title', async (req, res) => {
    try {
        const { title } = req.query;

        const result = await Book.find({title:title});
        res.status(200).json({
            data: result
        });
    } catch (error) {
        res.status(400).json({
            message: "Error"
        });
    }
});
router.get('/book/category', async (req, res) => {
    try {
        const {category}  = req.query;

        const result = await Book.find({category:category});
        res.status(200).json({
            data: result
        });
    } catch (error) {
        res.status(400).json({
            message: "Error"
        });
    }
});




module.exports=router;
