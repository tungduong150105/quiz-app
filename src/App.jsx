import React, { useState } from "react";
import { Typography, Grid, Tabs, Tab, Box, Paper } from "@mui/material";

import Quizs from "./components/Quizs";
import ManageQuiz from "./components/ManageQuiz";
import { defaultQuestions } from "./components/values";

const styles = {
  root: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "20px",
  },
  title: {
    padding: "16px",
    textAlign: "center",
    marginBottom: "1rem",
  },
  navGroup: {
    marginBottom: "2rem",
    backgroundColor: "background.paper",
    boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
    borderRadius: "8px",
  },
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`quiz-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box pt={3}>{children}</Box>}
    </div>
  );
}

const App = () => {
  const [quizData, setQuizData] = useState(defaultQuestions);
  const [tabIndex, setTabIndex] = useState(0);

  const handleAddQuestion = (newQuestion) => {
    setQuizData([...quizData, newQuestion]);
  };

  const handleDeleteQuestion = (indexToDelete) => {
    const newData = quizData.filter((_, idx) => idx !== indexToDelete);
    setQuizData(newData);
  };

  return (
    <Box sx={styles.root}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sx={styles.title}>
          <Typography
            variant="h4"
            component="h1"
            color="primary"
            sx={{ fontWeight: "bold" }}
          >
            📝 Quiz App Trắc Nghiệm
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={styles.navGroup}>
            <Tabs
              value={tabIndex}
              onChange={(e, newValue) => setTabIndex(newValue)}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Làm Bài Test" />
              <Tab label="Quản Lý Câu Hỏi" />
            </Tabs>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <TabPanel value={tabIndex} index={0}>
            <Quizs quizData={quizData} />
          </TabPanel>
          <TabPanel value={tabIndex} index={1}>
            <ManageQuiz
              quizData={quizData}
              onAddQuestion={handleAddQuestion} /*
                            ? callback function is function pass as argument to another function
                            */
              onDeleteQuestion={handleDeleteQuestion}
            />
          </TabPanel>
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
