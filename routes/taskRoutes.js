// Express router exposing CRUD endpoints for to-do tasks.
const express = require('express');
const Task = require('../models/Task');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// All routes require authentication
router.use(authMiddleware);

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.userId }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Failed to load tasks', error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, dueDate } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({ message: 'Task title is required' });
    }

    const task = await Task.create({
      title: title.trim(),
      dueDate: dueDate || null,
      userId: req.userId,
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create task', error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed, dueDate } = req.body;

    const updates = {};
    if (typeof title === 'string' && title.trim()) {
      updates.title = title.trim();
    }
    if (typeof completed === 'boolean') {
      updates.completed = completed;
    }
    if (dueDate !== undefined) {
      updates.dueDate = dueDate || null;
    }

    if (!Object.keys(updates).length) {
      return res.status(400).json({ message: 'No valid fields provided for update' });
    }

    const task = await Task.findOneAndUpdate(
      { _id: id, userId: req.userId },
      updates,
      { new: true, runValidators: true }
    );

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update task', error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Task.findOneAndDelete({ _id: id, userId: req.userId });

    if (!deleted) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete task', error: error.message });
  }
});

module.exports = router;
