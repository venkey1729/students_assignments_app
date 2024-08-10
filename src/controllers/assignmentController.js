const Assignment = require('../models/assignmentModel');

exports.createAssignment = async (req, res) => {
    const assignment = await Assignment.createAssignment(req.body);
    res.status(201).json(assignment);
};

exports.getAssignments = async (req, res) => {
    const assignments = await Assignment.getAssignments(req.query);
    res.json(assignments);
};

exports.updateAssignment = async (req, res) => {
    const { id } = req.params;
    const updatedAssignment = await Assignment.updateAssignment(id, req.body);
    res.json(updatedAssignment);
};

exports.deleteAssignment = async (req, res) => {
    const { id } = req.params;
    await Assignment.deleteAssignment(id);
    res.status(204).send();
};
