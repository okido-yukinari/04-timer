import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import {
  Card,
  CardContent,
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
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning, time]);

  const startTimer = () => {
    if (minutes > 0 || seconds > 0) {
      setTime(minutes * 60 + seconds);
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setMinutes(0);
    setSeconds(0);
    setIsRunning(false);
  };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;

    return `${mins}：${secs}`;
  };

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
              onChange={(e) => setMinutes(parseInt(e.target.value) || 0)}
              sx={{ maxWidth: `200px`, width: `45%` }}
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
              onChange={(e) => setSeconds(parseInt(e.target.value) || 0)}
              sx={{ maxWidth: `200px`, width: `45%` }}
            />
          </Box>

          <Typography variant="h4" align="center" mt={2}>
            {formatTime(time)}
          </Typography>

          <Box sx={{ display: `flex`, justifyContent: `center` }}>
            <IconButton
              onClick={startTimer}
              disabled={isRunning}
              color="primary"
              size="large"
              aria-label="スタート"
            >
              <PlayArrowIcon fontSize="large" />
            </IconButton>
            <IconButton
              onClick={stopTimer}
              disabled={!isRunning}
              color="secondary"
              size="large"
              aria-label="一時停止"
            >
              <PauseIcon fontSize="large" />
            </IconButton>
            <IconButton
              onClick={resetTimer}
              color="error"
              size="large"
              aria-label="リセット"
            >
              <RestartAltIcon fontSize="large" />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
