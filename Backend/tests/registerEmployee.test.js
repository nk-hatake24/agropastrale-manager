const request = require('supertest');
const app = require('../index.js');  

describe('Registration of Employee', () => {
  it('should register a new employee successfully', async () => {
    const employeeData = {
      name_employee: "John Doe",
      function_employee: "Developer",
      email: "john@example.com",
      password: "123456",
      salary: 50000,
      address: "123 Main St"
    };

    const response = await request(app).post('api/employee/registerEmployee').send(employeeData);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('data.name_employee', 'John Doe');
  });

  it('should return an error if email already exists', async () => {
    const response = await request(app).post('/registerEmployee').send({
      name_employee: "John Doe",
      function_employee: "Developer",
      email: "john@example.com",
      password: "123456",
      salary: 50000,
      address: "123 Main St"
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toContain('Email already registered');
  });
});
