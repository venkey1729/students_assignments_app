const { connectDB } = require('../config/database');

exports.createAssignment = async (assignment) => {
    const connection = await connectDB();
    const { title, description, due_date, teacher_id } = assignment;
    
    try {
        const [result] = await connection.execute(
            'INSERT INTO assignments (title, description, due_date, teacher_id) VALUES (?, ?, ?, ?)',
            [title, description, due_date, teacher_id]
        );

        const [rows] = await connection.execute('SELECT * FROM assignments WHERE id = ?', [result.insertId]);
        return rows[0];
    } finally {
        await connection.end(); 
    }
};

exports.getAssignments = async () => {
    const connection = await connectDB();
    
    try {
        const [rows] = await connection.execute('SELECT * FROM assignments');
        return rows;
    } finally {
        await connection.end(); 
    }
};

exports.updateAssignment = async (id, assignment) => {
    const connection = await connectDB();
    const { title, description, due_date } = assignment;

    try {
        await connection.execute(
            'UPDATE assignments SET title = ?, description = ?, due_date = ? WHERE id = ?',
            [title, description, due_date, id]
        );
        const [rows] = await connection.execute('SELECT * FROM assignments WHERE id = ?', [id]);
        return rows[0];
    } finally {
        await connection.end(); 
    }
};

exports.deleteAssignment = async (id) => {
    const connection = await connectDB();
    
    try {
        await connection.execute('DELETE FROM assignments WHERE id = ?', [id]);
    } finally {
        await connection.end(); 
    }
};
