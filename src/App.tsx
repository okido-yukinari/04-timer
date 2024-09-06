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
  return (
    <Container
      sx={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        height: `100vh`,
      }}
    >
      <Card>
        <CardContent sx={{ p: 4 }}>
          <Typography sx={{ textAlign: `center` }}>タイマーアプリ</Typography>
          <Box>
            <TextField
              id="outlined-number"
              label="分"
              type="number"
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
            <TextField
              id="outlined-number"
              label="秒"
              type="number"
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
          </Box>

          <Typography sx={{ textAlign: `center` }}>00:00</Typography>

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
