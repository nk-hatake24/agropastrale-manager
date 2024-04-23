const request = require('supertest');
const app = require('../app'); // Assurez-vous que le chemin est correct
const Budget = require('../budgetModel'); // Assurez-vous que le chemin est correct

describe('POST /api/budget/addBudget', () => {
  it('should add a new budget', async () => {
    // Données du nouveau budget à envoyer dans la requête
    const newBudgetData = {
      id_budget: 'B001',
      previsions: 10000,
      real_budget: 9500,
      period: '2024-04'
    };

    // Envoyer une requête POST à la route d'ajout de budget avec les données du nouveau budget
    const response = await request(app)
      .post('/api/budget/addBudget')
      .send(newBudgetData);

    // Vérifier que la réponse a le statut 201 (Created)
    expect(response.status).toBe(201);
    
    // Vérifier que la réponse contient les données du budget ajouté
    expect(response.body.message).toBe('Budget added successfully');
    expect(response.body.data).toMatchObject(newBudgetData);

    // Vérifier que le budget ajouté existe réellement dans la base de données
    const addedBudget = await Budget.findOne({ id_budget: newBudgetData.id_budget });
    expect(addedBudget).toBeTruthy();
  });
});
