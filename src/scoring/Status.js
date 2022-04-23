import { LinearProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const Status = ({points, maxReqPoints, filledCount, aspectsReqCount}) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography variant="body2" color="text.secondary">
        {`${points}/${maxReqPoints}`}p
      </Typography>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          sx={{ margin: 1, padding: 1, borderRadius: 1 }}
          value={Math.min(
            (filledCount / aspectsReqCount) * 100,
            100
          )}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          Math.min((filledCount / aspectsReqCount) * 100, 100)
        )}%`}</Typography>
      </Box>
    </Box>
  );
};
