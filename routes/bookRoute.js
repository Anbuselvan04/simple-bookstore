const express = require('express')
const router = express.Router()
const {getAllBookData, addNewBookData, getBookDataByISBN, updateBookData, deleteBookData} = require('../controllers/bookController')
const bookData = require('../data/bookData')
const bookDataEntryLogger = require('../middlewares/dataEntrylogger')

router.get('/getAllBookData', getAllBookData)

router.get('/getBookDataByISBN/:isbn',getBookDataByISBN)

router.param('isbn',(request, response, next, isbn) => {
    request.book = bookData[isbn-1]
    next()
})

router.post('/addNewBookData',bookDataEntryLogger ,addNewBookData)

router.put('/updateBookData/:isbn', updateBookData)


router.delete('/deleteBookData/:isbn', deleteBookData)

module.exports = router