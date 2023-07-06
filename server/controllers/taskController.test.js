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
        { task_id: 1, task_content: 'Task 1', status: 'Pending' },
        { task_id: 2, task_content: 'Task 2', status: 'Completed' },
        { task_id: 3, task_content: 'Task 3', status: 'Pending' },
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
        fs.writeFile(testJsonFile, JSON.stringify([]), done);
    });


    // describe block for getting tasks

    // input data: a fake task list
    // expected outcome: the 'test' property in res.locals should contain the fake task list
    // assertion: the actual result to match the expected outcome
    describe('getTasks', () => {
        it('should retrieve tasks from the JSON file', () => {
            const req = {};
            const res = {
                locals: {},
            };
            // mimic the request and response objects that the function expects to receive when it is called
            taskController.getTasks(req, res, () => {
                // compare the value of what is in locals to the fake task list
                expect(res.locals.test).toEqual(fakeTaskList);
            });
        });
    });
    
    // describe block for creating tasks

    // input data: a fake task with all necessary properties
    // expected outcome: 
    describe('createTask', () => {
        it('should create a new task in the database', () => {
            // create mock request object
            const req = {
                body: {
                    creator: 'Alana Herlands',
                    task: 'Volunteer at the park',
                    status: 'Pending',
                    task_id: 1
                },
            };

            // create mock response object
            const res = {
                locals: {},
            };

            // create mock next function
            const next = jest.fn();

            // call createTask function
            taskController.createTask(res, req, next);

            // assertion #1: expect next middleware to have been called
            expect(next).toHaveBeenCalled();
            // assertion #2: expect taskCreated property to exist
            expect(res.locals.taskCreated).toBeDefined();
            // assertion #3: expect a single task to be created
            expect(res.locals.taskCreated.length).toBe(1);
        });
    });

    // describe block for updating task, user, and status

    describe('updateUserAndStatus', () => {
        it('should update task', () => {
            const updatedTaskContent = 'Lay in the grass';
            // create a mock request object with necessary properties
            const req = {
                body: {
                    task_content: 'Initial task content',
                    user: 'Alana Herlands',
                    status: 'Pending',
                    task_id: 1
                },
            };

            // create mock response object
            const res = {
                locals: {},
            };

            // create mock next function
            const next = jest.fn();

            // call the updateUserAndStatus function
            taskController.updateUserAndStatus(req, res, next);

            // assertion #1: expect next to have been called
            expect(next).toHaveBeenCalled();
            // assertion #2: expect taskEdited property to exist
            expect(res.locals.taskEdited).toBeDefined();
            // assertion #3: expect taskEdited length to be 1
            expect(res.locals.taskEdited.length).toBe(1);
            // assertion #4: expect the task_content property to be updated with the new value
            expect(res.locals.taskEdited[0].task_content).toEqual(updatedTaskContent);
        });

        it('should update status'), () => {
            const updatedStatus = 'Complete';
            // create a mock request object with necessary properties
            const req = {
                body: {
                    task_content: 'Lay in the grass',
                    user: 'Alana Herlands',
                    status: 'Pending',
                    task_id: 1
                },
            };

            // create mock response object
            const res = {
                locals: {},
            };

            // create mock next function
            const next = jest.fn();

            // call the updateUserAndStatus function
            taskController.updateUserAndStatus(req, res, next);

            // assertion #1: expect next to have been called
            expect(next).toHaveBeenCalled();
            // assertion #2: expect taskEdited property to exist
            expect(res.locals.statusEdited).toBeDefined();
            // assertion #3: expect taskEdited length to be 1
            expect(res.locals.statusEdited.length).toBe(1);
            // assertion #4: expect the status property to be updated with the new value
            expect(res.locals.statusEdited[0].status).toEqual(updatedStatus);
        }

        it('should update user'), () => {
            const updatedUser = 'Joshua Hall';
            // create a mock request object with necessary properties
            const req = {
                body: {
                    task_content: 'Lay in the grass',
                    user: 'Alana Herlands',
                    status: 'Pending',
                    task_id: 1
                },
            };

            // create mock response object
            const res = {
                locals: {},
            };

            // create mock next function
            const next = jest.fn();

            // call the updateUserAndStats(req, res, next);
            taskController.updateUserAndStatus(req, res, next);

            // assertion #1: expect next to have been called
            expect(next).toHaveBeenCalled();
            // assertion #2: expect userEdited property to exist
            expect(res.locals.userEdited).toBeDefined();
            // assertion #3: expect userEdited length to be 1
            expect(res.locals.userEdited.length).toBe(1);
            // assertion #4: expect the user property to be updated with the new value
            expect(res.locals.userEdited[0].status).toEqual(updatedUser);
        }
    });

    // describe block for deleting a task
    describe('deleteTask', () => {
        it('should delete a task from the database', () => {
            // create a mock request object with necessary properties
            const req = {
                body: {
                    task_id: 1,
                },
            };

            // create mock response object
            const res = {
                locals: {},
            };

            // create mock next function
            const next = jest.fn();

            // Save the original tasks list length
            const originalTasksLength = fakeTaskList.length;

            // call the deleteTask function
            taskController.deleteTask(req, res, next);

            // assertion #1: expect next to have been called
            expect(next).toHaveBeenCalled();
            // assertion #2: expect taskDeleted property to exist
            expect(res.locals.taskDeleted).toBeDefined();
            // assertion #3: expect taskDeleted length to be 1
            expect(res.locals.taskDeleted.length).toBe(1);
            const updatedTasksLength = fakeTaskList.length - 1;
            // assertion #4: expect that the tasks list length is reduced by 1
            expect(updatedTasksLength).toBe(originalTasksLength);
        });
    });
});