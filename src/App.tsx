import React, { useState } from "react";
import { Container } from "@mui/material";
import {
  Card,
  CardContent,
  Button,
  IconButton,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

function App() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  return (
    <Container
      sx={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        height: `100vh`,
      }}
    >
      <Card sx={{ maxWidth: `375px`, width: `90%` }}>
        <CardContent sx={{ p: 2 }}>
          <Typography variant="h4" component="h1" align="center">
            タイマーアプリ
          </Typography>
          <Box
            sx={{
              display: `flex`,
              justifyContent: `space-between`,
              mt: 2,
            }}
          >
            <TextField
              id="outlined-number"
              label="分"
              type="number"
              value={minutes}
              InputProps={{ inputProps: { min: 0 } }}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              sx={{ maxWidth: `130px`, width: `45%` }}
            />
            <TextField
              id="outlined-number"
              label="秒"
              type="number"
              value={seconds}
              InputProps={{ inputProps: { min: 0, max: 59 } }}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              sx={{ maxWidth: `130px`, width: `45%` }}
            />
          </Box>

          <Typography variant="h4" align="center" mt={2}>
            00:00
          </Typography>

          <Box sx={{ display: `flex`, justifyContent: `center` }}>
            <IconButton color="primary" size="large" aria-label="スタート">
              <PlayArrowIcon fontSize="large" />
            </IconButton>
            <IconButton color="secondary" size="large" aria-label="一時停止">
              <PauseIcon fontSize="large" />
            </IconButton>
            <IconButton color="error" size="large" aria-label="リセット">
              <RestartAltIcon fontSize="large" />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
