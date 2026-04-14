import React, { useState } from "react";
import { Button, Typography, Paper } from "@mui/material";

function Hint({ text }) {
  const [show, setShow] = useState(false);

  if (!text) return null;

  return (
    <div style={{ marginTop: "1rem" }}>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => setShow(!show)}
        size="small"
      >
        {show ? "Ẩn gợi ý" : "Xem gợi ý"}
      </Button>
      {show && (
        <Paper
          sx={{
            padding: "10px",
            marginTop: "10px",
            backgroundColor: "#fff9c4",
          }}
        >
          <Typography>{text}</Typography>
        </Paper>
      )}
    </div>
  );
}

export default Hint;
