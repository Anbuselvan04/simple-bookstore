const bookModel = require('../models/bookModel')
const bookData = require('../data/bookData')

const getAllBookData = async (request,response) =>{
    try{
        let books = await bookModel.find()
        
        if(books.length === 0){
            const initialbooks = await bookModel.insertMany(bookData)
            books = await bookModel.find()
        }
        response.status(200).json(books)
    }
    catch(error){
        response.status(500).json({message: error.message})
    }
    
}

const addNewBookData = async(request,response) =>{

    const newBookData = request.body
    try{
        const expectedBook = await bookModel.findOne({isbn : newBookData.isbn})
        if(expectedBook){
            return response.status(409).json({message:`Book with ISBN ${expectedBook.isbn} already exist!`})
        }    
        const insertedBook = await bookModel.create(newBookData)
        response.status(200).json({message:`New Book Added Successfully`})
    } 
    catch(error){
        return response.status(500).json({message:error.message})
    }
}

const getBookDataByISBN = async(request,response) => {

    const isbnToFetch = request.params.id
    try{
        const expectedBook = await bookModel.findOne({id: isbnToFetch})
        if(expectedBook){
            return response.status(200).json(expectedBook)
        }
        else{
            return response.status(409).json({message:`Book with ISBN ${isbnToFetch} is not found!`})
        }
    } 
    catch(error){
        return response.status(500).json({message:error.message})
    }  
}

const updateBookData = async(request,response) => {
    
    const isbnToFetch = request.params.isbn
    const newBookData = request.body
    try{
        const expectedBook = await bookModel.findOne({isbn : isbnToFetch})
        if(expectedBook){
            const insertedBook = await bookModel.updateOne(newBookData)
            return response.status(200).json({message:`Book with ISBN ${isbnToFetch} Updated Successfully`})
        }    
        return response.status(409).json({message:`Invalid ISBN`})
    }
    catch(error){
        return response.status(500).json({message:error.message})
    }
}

const deleteBookData = async(request, response) => {

    const isbnToFetch = request.params.isbn
    try{
        const expectedBook = await bookModel.findOne({isbn : isbnToFetch})
        if(expectedBook){
            const insertedBook = await bookModel.deleteOne(expectedBook)
            return response.status(200).json({message:`Book with ISBN ${isbnToFetch} Deleted Successfully`})
        }    
        return response.status(409).json({message:`Invalid ISBN`})
    }
    catch(error){
        return response.status(500).json({message:error.message})
    }
}

module.exports = {getAllBookData, addNewBookData, getBookDataByISBN, updateBookData, deleteBookData}