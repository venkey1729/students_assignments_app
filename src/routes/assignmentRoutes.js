const express = require('express');
const { createAssignment, getAssignments, updateAssignment, deleteAssignment } = require('../controllers/assignmentController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', verifyToken, createAssignment);
router.get('/', verifyToken, getAssignments);
router.put('/:id', verifyToken, updateAssignment);
router.delete('/:id', verifyToken, deleteAssignment);

module.exports = router;
