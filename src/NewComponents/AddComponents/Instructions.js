import React, { useState } from 'react';
import { TextField, Button, Table, TableBody, TableRow, TableCell, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const Instructions = ({ setInstructions, setActiveStep }) => {
    const [instructionText, setInstructionText] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');
    const [localInstructions, setLocalInstructions] = useState([]);

    const handleAddInstruction = () => {
        if (instructionText && minutes && seconds) {
            const newInstruction = {
                text: instructionText,
                minute: parseInt(minutes, 10),
                second: parseInt(seconds, 10)
            };
            setLocalInstructions(prevInstructions => [...prevInstructions, newInstruction]);
            setInstructionText('');
            setMinutes('');
            setSeconds('');
        } else {
            alert("Please fill all the instruction fields!");
        }
    };

    const handleRemoveInstruction = (index) => {
        const updatedInstructions = [...localInstructions];
        updatedInstructions.splice(index, 1);
        setLocalInstructions(updatedInstructions);
    };

    const handleNext = () => {
        if (localInstructions.length === 0) {
            alert("Please add at least one instruction!");
            return;
        }
        setInstructions(localInstructions);
        setActiveStep(prev => prev + 1);
    };

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ marginBottom: '20px' }}>
                <TextField fullWidth value={instructionText} onChange={e => setInstructionText(e.target.value)} placeholder="Instruction Text" />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                    <TextField value={minutes} onChange={e => setMinutes(e.target.value)} placeholder="Minutes" type="number" />
                    <TextField value={seconds} onChange={e => setSeconds(e.target.value)} placeholder="Seconds" type="number" />
                    <IconButton onClick={handleAddInstruction}>
                        <AddIcon />
                    </IconButton>
                </div>
            </div>

            <Table>
                <TableBody>
                    {localInstructions.map((instruction, index) => (
                        <TableRow key={index}>
                            <TableCell>{instruction.text}</TableCell>
                            <TableCell>{instruction.minute}m {instruction.second}s</TableCell>
                            <TableCell>
                                <IconButton onClick={() => handleRemoveInstruction(index)}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Button variant="contained" color="primary" onClick={handleNext} style={{ marginTop: '20px' }}>
                Next
            </Button>
        </div>
    );
};

export default Instructions;
