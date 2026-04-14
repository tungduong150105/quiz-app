import React from "react"
import { Avatar, Grid } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";

const styles = {
    container: {
      padding: "12px"
    },
    heading: {
      marginBottom: "12px",
      fontWeight: "bold"
    },
    currentQuestion: {
        backgroundColor: blue[500],
        fontSize: "16px",
        margin: "6px"
    },
    wrongAnswer: {
        backgroundColor: red[500],
        fontSize: "16px",
        margin: "6px"
    },
    rightAnswer: {
        backgroundColor: green[500],
        fontSize: "16px",
        margin: "6px"
    },
    normalQuestion: {
        fontSize: "16px",
        margin: "6px"
    }
};

function ShowNoOfQuestions(props) {
    return(
        <Grid container sx={styles.container}>
            <Grid item xs={12} sx={styles.heading}>
                Câu {props.quesNum + 1}/{props.questionsLength}
            </Grid>
            <Grid item>
                <Grid container justifyContent="flex-start">
                    {
                        Array(props.questionsLength).fill(1).map((value, index) => {
                            const isCurrent = props.quesNum === index;
                            const userAnswer = props.userAnswers[index];
                            const correctAnswer = props.quizData[index]?.answer;

                            let avatarClass = styles.normalQuestion;
                            
                            if (userAnswer !== null) {
                                if (userAnswer === correctAnswer) {
                                    avatarClass = styles.rightAnswer;
                                } else {
                                    avatarClass = styles.wrongAnswer;
                                }
                            } else if (isCurrent) {
                                avatarClass = styles.currentQuestion;
                            }

                            return <Avatar key={index} sx={avatarClass}>{index+1}</Avatar>
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ShowNoOfQuestions;
