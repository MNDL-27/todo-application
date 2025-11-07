// Task schema modeling to-do items stored in MongoDB.
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    dueDate: {
      type: Date,
      default: null,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true, // Index for faster queries
    },
  },
  {
    timestamps: true,
  }
);

// Index for better query performance
taskSchema.index({ userId: 1, completed: 1, dueDate: 1 });

module.exports = mongoose.model('Task', taskSchema);
