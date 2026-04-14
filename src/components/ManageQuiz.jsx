import React, { useState } from "react";
import { 
    Grid, Typography, TextField, Button, Paper, MenuItem, 
    Card, CardContent, CardActions
} from "@mui/material";

const styles = {
    container: {
        padding: "2rem",
        marginTop: "1rem",
        boxShadow: "0px 6px 16px #E9E9E9",
        borderRadius: "12px",
        backgroundColor: "#fff"
    },
    inputField: {
        marginBottom: "1rem"
    },
    optsGrid: {
        marginBottom: "1rem"
    },
    questionCard: {
        marginBottom: "1rem",
        borderLeft: (theme) => `4px solid ${theme.palette.primary.main}`,
        boxShadow: "0px 2px 8px rgba(0,0,0,0.05)"
    },
    deleteBtn: {
        color: 'error.main'
    }
};

const ManageQuiz = ({ quizData, onAddQuestion, onDeleteQuestion }) => {
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState(["", "", "", ""]);
    const [correctIndex, setCorrectIndex] = useState(0);
    const [hint, setHint] = useState("");

    const handleOptionChange = (idx, value) => {
        const newOpts = [...options];
        newOpts[idx] = value;
        setOptions(newOpts);
    };

    const handleAdd = () => {
        if (!question.trim()) {
            alert("Vui lòng nhập câu hỏi!");
            return;
        }
        if (options.some(opt => !opt.trim())) {
            alert("Vui lòng điền đủ bốn đáp án!");
            return;
        }

        const newQuestion = {
            question: question.trim(),
            options: options.map(opt => opt.trim()),
            answer: options[correctIndex].trim(),
            hint: hint.trim()
        };

        onAddQuestion(newQuestion);

        setQuestion("");
        setOptions(["", "", "", ""]);
        setCorrectIndex(0);
        setHint("");
        alert("Thêm câu hỏi thành công!");
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
                <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
                    Danh sách câu hỏi hiện tại ({quizData.length})
                </Typography>
                
                {quizData.length === 0 ? (
                    <Typography color="text.secondary">Chưa có câu hỏi nào.</Typography>
                ) : (
                    quizData.map((q, index) => (
                        <Card key={index} sx={styles.questionCard}>
                            <CardContent>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                    Câu {index + 1}: {q.question}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ marginTop: '8px' }}>
                                    **Đáp án:** {q.answer}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'flex-end', paddingTop: 0 }}>
                                <Button 
                                    sx={styles.deleteBtn} 
                                    onClick={() => onDeleteQuestion(index)}
                                    size="small"
                                >
                                    Xóa
                                </Button>
                            </CardActions>
                        </Card>
                    ))
                )}
            </Grid>

            <Grid item xs={12} md={5}>
                <Paper sx={styles.container}>
                    <Typography variant="h5" sx={{ marginBottom: "1.5rem" }}>Thêm câu hỏi mới</Typography>
                    
                    <TextField
                        fullWidth
                        label="Nội dung câu hỏi"
                        variant="outlined"
                        sx={styles.inputField}
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        multiline
                        rows={2}
                    />

                    <Grid container spacing={2} sx={styles.optsGrid}>
                        {options.map((opt, idx) => (
                            <Grid item xs={12} sm={6} key={idx}>
                                <TextField
                                    fullWidth
                                    label={`Đáp án ${idx + 1}`}
                                    variant="outlined"
                                    value={opt}
                                    onChange={(e) => handleOptionChange(idx, e.target.value)}
                                />
                            </Grid>
                        ))}
                    </Grid>

                    <TextField
                        select
                        fullWidth
                        label="Chọn đáp án đúng"
                        variant="outlined"
                        sx={styles.inputField}
                        value={correctIndex}
                        onChange={(e) => setCorrectIndex(e.target.value)}
                    >
                        {options.map((opt, idx) => (
                            <MenuItem key={idx} value={idx}>
                                {`Đáp án ${idx + 1}`} {opt ? `- ${opt}` : ""}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        fullWidth
                        label="Gợi ý (Tùy chọn)"
                        variant="outlined"
                        sx={styles.inputField}
                        value={hint}
                        onChange={(e) => setHint(e.target.value)}
                        multiline
                        rows={2}
                    />

                    <Button variant="contained" color="primary" onClick={handleAdd} size="large" fullWidth>
                        Thêm Câu Hỏi Mới
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default ManageQuiz;
