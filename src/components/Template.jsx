import React from "react";
import { Paper, ListItem, Button, Grid, Typography } from "@mui/material";

const styles = {
  questionTitle: {
    margin: "0px 0px 0px 4px",
  },
  questionNumber: {
    margin: "0px 0px 10px 0px",
    color: "#888",
    fontWeight: "bold",
  },
  questionPaper: {
    padding: "1.0rem",
    border: "2px solid #5685FF",
    borderRadius: "8px",
    boxShadow: "0px 6px 16px #E9E9E9",
  },
  correctOption: {
    padding: "0.6rem",
    marginTop: "0.8rem",
    marginBottom: "0.8rem",
    borderRadius: "8px",
    border: "2px solid green",
    color: "green",
    backgroundColor: "#e8f5e9",
  },
  wrongOption: {
    padding: "0.6rem",
    marginTop: "0.8rem",
    marginBottom: "0.8rem",
    borderRadius: "8px",
    border: "2px solid red",
    color: "red",
    backgroundColor: "#ffebee",
  },
  options: {
    padding: "0.6rem",
    marginTop: "0.8rem",
    marginBottom: "0.8rem",
    borderRadius: "8px",
    border: "2px solid transparent",
    "&:hover": {
      backgroundColor: "white",
      border: "2px solid #5685FF",
    },
  },
  disabledOption: {
    padding: "0.6rem",
    marginTop: "0.8rem",
    marginBottom: "0.8rem",
    borderRadius: "8px",
    border: "2px solid transparent",
    opacity: 0.6,
    backgroundColor: "#fafafa",
  },
  optionsPaper: {
    borderRadius: "8px",
    boxShadow: "0px 4px 12px #F0F0F0",
  },
  prevButton: {
    padding: "8px",
    boxShadow: "0px 4px 10px #E9E9E9",
    borderRadius: "8px",
  },
  nextButton: {
    padding: "8px",
    boxShadow: "0px 4px 10px #E9E9E9",
    borderRadius: "8px",
  },
};

const Template = (props) => {
  const currentQuestion = props.questions;
  const isAnswered = props.userAnswer != null;

  const getOptionStyle = (option) => {
    if (!isAnswered) return styles.options;

    if (option === currentQuestion.answer) {
      return styles.correctOption;
    }

    if (
      option === props.userAnswer &&
      props.userAnswer !== currentQuestion.answer
    ) {
      return styles.wrongOption;
    }

    return styles.disabledOption;
  };

  return (
    <Grid container>
      <Grid item sm={12}>
        <Paper sx={styles.questionPaper}>
          <Typography sx={styles.questionNumber}>
            Câu hỏi {props.quesNum + 1}
          </Typography>
          <Typography sx={styles.questionTitle}>
            {currentQuestion?.question}
          </Typography>
        </Paper>
      </Grid>
      <Grid item sm={12}>
        <Grid container>
          <Grid item sm={12}>
            {currentQuestion?.options?.map((option, index) => {
              return (
                <Paper key={index} sx={styles.optionsPaper}>
                  <ListItem
                    button={!isAnswered ? true : false}
                    sx={{
                      ...getOptionStyle(option),
                      backgroundColor: !isAnswered ? "white" : undefined,
                    }}
                    onClick={() => props.checkAnswer(props.quesNum, option)}
                  >
                    <Typography>
                      {" "}
                      {index + 1}) {option}{" "}
                    </Typography>
                  </ListItem>
                </Paper>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={12}>
        <Grid
          container
          justifyContent={"center"}
          sx={{ marginTop: "1rem", gap: "10px" }}
        >
          <Button
            sx={styles.prevButton}
            color="primary"
            variant="outlined"
            onClick={() => props.prevQuestion()}
            disabled={props.quesNum === 0}
          >
            {" "}
            Lùi lại{" "}
          </Button>
          {props.quesNum === props.questionsLength - 1 ? (
            <Button
              sx={styles.nextButton}
              color="secondary"
              variant="contained"
              onClick={() => props.onSubmit()}
            >
              {" "}
              Nộp Bài{" "}
            </Button>
          ) : (
            <Button
              sx={styles.nextButton}
              color="primary"
              variant="contained"
              onClick={() => props.nextQuestion()}
            >
              {" "}
              Kế tiếp{" "}
            </Button>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Template;
