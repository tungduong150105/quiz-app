import React, { useState, useEffect } from "react";
import { Grid, Typography, Button, Paper } from "@mui/material";
import Template from "./Template";
import ShowNoOfQuestions from "./ShowNoOfQuestions";
import Hint from "./Hint";

const styles = {
    leftPanel: {
        padding: "1rem"
    },
    rightPanel: {
        padding: "0.4rem"
    },
    NoOfQuestions: {
        minHeight: "300px",
        padding: "0.6rem",
        margin: "0.6rem",
        boxShadow: "0px 6px 16px #E9E9E9",
        borderRadius: "12px"
    },
    resultBox: {
        padding: "3rem",
        textAlign: "center",
        backgroundColor: "#e3f2fd",
        borderRadius: "12px",
        marginTop: "2rem",
        boxShadow: "0px 6px 16px rgba(0,0,0,0.1)"
    }
};

const Quizs = ({ quizData }) => {
    const [quesNum, setQuesNum] = useState(0);
    const questionsLength = quizData.length;

    const [userAnswers, setUserAnswers] = useState(Array(questionsLength).fill(null));
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        setQuesNum(0);
        setUserAnswers(Array(quizData.length).fill(null));
        setIsSubmitted(false);
    }, [quizData]);

    if (!quizData || quizData.length === 0) {
        return <Typography variant="h6" align="center" sx={{marginTop: "2rem"}}>Chưa có câu hỏi nào trong kho!</Typography>;
    }

    const checkAnswer = (questionNumber, chosenValue) => {
        if (userAnswers[questionNumber] !== null || isSubmitted) return;
        setUserAnswers((prev) => {
            let newAnswers = [...prev];
            newAnswers[questionNumber] = chosenValue;
            return newAnswers;
        });
    };

    const nextQuestion = () => {
        if (quesNum < questionsLength - 1) setQuesNum(quesNum + 1);
    };

    const prevQuestion = () => {
        if (quesNum > 0) setQuesNum(quesNum - 1);
    };

    const calcScore = () => {
        let score = 0;
        userAnswers.forEach((ans, index) => {
            if (ans === quizData[index]?.answer) {
                score++;
            }
        });
        return score;
    };

    if (isSubmitted) {
        const score = calcScore();
        const percentage = Math.round((score / questionsLength) * 100);
        return (
            <Paper sx={styles.resultBox}>
                <Typography variant="h3" color="primary" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Kết Quả Hoàn Thành
                </Typography>
                <Typography variant="h5" sx={{ margin: "20px 0" }}>
                    Trả lời đúng: <span style={{ fontWeight: 'bold', color: 'green', fontSize: '2rem' }}>{score}</span> / {questionsLength} câu
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ marginBottom: '2rem' }}>
                    Tỷ lệ chính xác: {percentage}%
                </Typography>
                <Button 
                    variant="contained" 
                    color="primary" 
                    size="large"
                    onClick={() => {
                        setIsSubmitted(false);
                        setQuesNum(0);
                        setUserAnswers(Array(questionsLength).fill(null));
                    }}
                >
                    Làm Lại Bài Test
                </Button>
            </Paper>
        );
    }

    let currentQuestion = quizData[quesNum];

    return (
        <Grid container>
            <Grid item xs={12} sm={9} sx={styles.leftPanel}>
                <Template
                    quesNum={quesNum}
                    questions={currentQuestion}
                    questionsLength={questionsLength}
                    nextQuestion={nextQuestion}
                    prevQuestion={prevQuestion}
                    userAnswer={userAnswers[quesNum]}
                    checkAnswer={checkAnswer}
                    onSubmit={() => setIsSubmitted(true)}
                />
            </Grid>
            <Grid item xs={12} sm={3} sx={styles.rightPanel}>
                <Paper sx={styles.NoOfQuestions}>
                    <ShowNoOfQuestions
                        quesNum={quesNum}
                        questionsLength={questionsLength}
                        userAnswers={userAnswers}
                        quizData={quizData}
                    />
                    <Hint key={quesNum} text={currentQuestion?.hint} />
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Quizs;

