const mongoose = require('mongoose');

const expenseGroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  members: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    name: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const expenseSchema = new mongoose.Schema({
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ExpenseGroup',
    required: true
  },
  description: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  paidBy: {
    name: String,
    id: mongoose.Schema.Types.ObjectId
  },
  splitAmong: [{
    name: String,
    id: mongoose.Schema.Types.ObjectId,
    amount: Number
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = {
  ExpenseGroup: mongoose.model('ExpenseGroup', expenseGroupSchema),
  Expense: mongoose.model('Expense', expenseSchema)
};
