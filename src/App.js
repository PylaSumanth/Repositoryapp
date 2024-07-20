// import logo from './logo.svg';
import React, { useState } from 'react';

import './App.css';


const App=function(){

        const [expenses, setExpenses] = useState([]);
        const [totalExpense, setTotalExpense] = useState(0);
        const [categories, setCategories] = useState({
          Food: 0,
          Transport: 0,
          Entertainment: 0,
          Others: 0,
        });
      
        const handleAddExpense = (e) => {
          e.preventDefault();
          const name = e.target.elements.name.value;
          const amount = parseFloat(e.target.elements.amount.value);
          const category = e.target.elements.category.value;
      
          const newExpense = { name, amount, category };
          setExpenses([...expenses, newExpense]);
      
          setTotalExpense(totalExpense + amount);
          setCategories({
            ...categories,
            [category]: categories[category] + amount,
          });
      
          e.target.reset();
        };
      


        return(
                  <div className="container">
                    <h1>Expense Tracker</h1>
                    <form onSubmit={handleAddExpense}>
                      <input type="text" name="name" placeholder="Expense Name" required />
                      <input type="number" name="amount" placeholder="Amount" required />
                      <select name="category" required>
                        <option value="" disabled selected>
                          Choose Category
                        </option>
                        <option value="Food">Food</option>
                        <option value="Transport">Transport</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Others">Others</option>
                      </select>
                      <button type="submit">Add Expense</button>
                    </form>
                    <div id="expense-list">
                      <h2>Expenses</h2>
                      <ul>
                        {expenses.map((expense, index) => (
                          <li key={index}>
                            {expense.name} <span>${expense.amount.toFixed(2)}</span>{' '}
                            <em>{expense.category}</em>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div id="total-expense">
                      <h2>
                        Total: $<span>{totalExpense.toFixed(2)}</span>
                      </h2>
                    </div>
                    <div id="summary">
                      <h2>Summary</h2>
                      <ul>
                        {Object.keys(categories).map((category, index) => (
                          <li key={index}>
                            {category}: ${categories[category].toFixed(2)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>      

        );
}
  
export default App;
      