const chai = require('chai');
const chaihttp = require('chai-http');
const server = require('./server');
const e = require('express');

const expect = chai.expect;

chai.use(chaihttp);

// IMPORTANT for this exercise ID has to be a string, so CRUD could work properly !

describe('Books', () => {

    it('has to create new book', (done) => {

        const body = {
            id: '1',
            title: 'Book Title',
            author: 'Book Author'
        };

        chai.request(server)
            .post('/books')
            .send(body)
            .end((err, res) => {
                if (err) {
                    return done(err);
                };
                expect(res.statusCode, "Status code:").to.be.equal(201);
                expect(res.body, "Type:").to.be.a('object');
                expect(res.body.id, "Book id property:").to.be.equal(body.id);
                expect(res.body.title, "Book title property:").to.be.equal(body.title);
                expect(res.body.author, "Book author property:").to.be.equal(body.author);
                //console.log("respone: ", res.body);
                done();
        });
    });

    it('has to get all books', (done) => {

        chai.request(server)
            .get('/books')
            .end((err, res) => {
                if (err) {
                    return done(err);
                };
                expect(res.statusCode, "Status code:").to.be.equal(200);
                expect(res.body, "Type:").to.be.a('array');
                expect(res.body.length, "Length:").to.be.equal(1)
                //console.log("respone: ", res.body);
                done();
        });
    });

    it('has to get single book by id', (done) => {
        const bookId = '1'

        chai.request(server)
            .get(`/books/${bookId}`)
            .end((err, res) => {
                if (err) {
                    return done(err);
                };
                expect(res.statusCode, "Status code:").to.be.equal(200);
                expect(res.body, "Type:").to.be.a('object');
                expect(res.body, "Book id property:").to.have.property('id');
                expect(res.body, "Book title property:").to.have.property('title');
                expect(res.body, "Book author property:").to.have.property('author');
                //console.log("respone: ", res.body);
                done();
        });
    });

    it('has to PUT an existing book', (done) => {

        const body = {
            id: '1',
            title: 'Book Title Updated',
            author: 'Book Author Updated'
        };

        chai.request(server)
            .put(`/books/${body.id}`)
            .send(body)
            .end((err, res) => {
                if (err) {
                    return done(err);
                };
                expect(res.statusCode, "Status code:").to.be.equal(200);
                expect(res.body, "Type:").to.be.a('object');
                expect(res.body.id, "Book id property:").to.be.equal(body.id);
                expect(res.body.title, "Book title property:").to.be.equal(body.title);
                expect(res.body.author, "Book author property:").to.be.equal(body.author);
                //console.log("respone: ", res.body);
                done();
        });
    });

    it('has to PATCH an existing book', (done) => {

        const body = {
            author: 'Book Author Partially Updated',
            title: 'Book Title Partially Updated'
        };
    
        const bookId = '1'; 
    
        chai.request(server)
            .patch(`/books/${bookId}`)
            .send(body)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                expect(res.statusCode, "Status code:").to.be.equal(200);
                expect(res.body, "Type:").to.be.a('object');
                expect(res.body.id, "Book id property:").to.be.equal(bookId);
                expect(res.body.title, "Book title property:").to.be.equal(body.title);
                expect(res.body.author, "Book author property:").to.be.equal(body.author);
                //console.log("response: ", res.body);
                done();
            });
    });

    it('has to Delete an existing book', (done) => {

        const body = {
            id: '1',
            title: 'Book Title Updated',
            author: 'Book Author Updated'
        };

        chai.request(server)
            .delete(`/books/${body.id}`)
            .send(body)
            .end((err, res) => {
                if (err) {
                    return done(err);
                };
                expect(res.statusCode, "Status code:").to.be.equal(204);            
                //console.log("respone: ", res.body);
                done();
        });
    });

    it('has to return 404 when trying to GET, PUT or DELETE non-existing book', (done) => {
        chai.request(server)
            .get('/books/01')
            .end((err, res) => {
                if (err) {
                    return done(err);
                };
                expect(res).to.have.status(404);
            });

        chai.request(server)
            .put('/books/01')
            .send({id: "9999", title: "Non Existing Title", author: "Non Existing Author"})
            .end((err, res) => {
                if (err) {
                    return done(err);
                };
                expect(res).to.have.status(404);
            });

        chai.request(server)
            .delete('/books/01')
            .end((err, res) => {
                if (err) {
                    return done(err);
                };
                expect(res).to.have.status(404);
                done();
        });
    });

});