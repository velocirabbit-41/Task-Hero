// import object to test
const taskController = require('./taskController');
const path = require('path');
const db = require('../models/taskModels'); // update to URI? depends on db config
const fs = require('fs');

const testJsonFile = path.resolve(__dirname, './taskController.test.json');

// describe block for taskController tests
describe('taskController tests', () => {
    // fake task list
    const fakeTaskList = [
        { taskId: 1, title: 'Task 1', status: 'Pending' },
        { taskId: 2, title: 'Task 2', status: 'Completed' },
        { taskId: 3, title: 'Task 3', status: 'Pending' },
      ];

    // beforeAll to set up any necessary test environment
    beforeAll((done) => {
        // set up necessary test environment
        // set up database connection
        connection = db.connect();
        fs.writeFile(testJsonFile, JSON.stringify([]), () => {
            db.reset();
            done();
        });
    });

    // use afterAll to clean up any test environment after all the tests have run
    afterAll((done) => {
        // clean up test environment
        // close the database connection
        db.closeConnection(connection);
    });


    // describe block for getting tasks

    // input data: a fake task list
    // expected outcome: the 'test' property in res.locals should contain the fake task list
    // assertion: the actual result to match the expected outcome
    describe('getTasks', () => {
        it('should retrieve tasks from the database', () => {
            // mimic the request and response objects that the function expects to receive when it is called
            taskController.getTasks({}, { locals: {} }, () => {
                // compare the value of what is in locals to the fake task list
                expect(res.locals.test).toEqual(fakeTaskList);
            });
        });
    });
    
    // describe block for creating tasks
    describe('createTask', () => {
        it('should create a new task in the database', () => {
            // test implementation here
        });
    });

    // describe block for updating user and status
    // **NOTE: unsure they finished this or what the goal was here.
    // I think the goal should solely be to update the task
    describe('updateUserAndStatus', () => {
        it('should update task, status, and user', () => {
            // test implementation here
        });
    });

    // describe block for deleting a task
    describe('deleteTask', () => {
        it('should delete a task from the database', () => {
            // test implementation here
        });
    });
});