import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const pages = [
  "Home",
  "About Us",
  "Our Services",
  "Our Clients",
  "Blogs",
  "Footer",
];

const FullScreenNav = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
        width: "100%",
        height: "100%",
        bgcolor: "rgba(0, 0, 0, 0.95)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        transform: open ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.5s ease-in-out",
      }}
    >
     
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          color: "white",
        }}
      >
        <CloseIcon fontSize="large" />
      </IconButton>

      {/* Page Links */}
      {pages.map((page, index) => (
        <Typography
          key={index}
          variant="h4"
          sx={{
            my: 1,
            fontFamily: "Montserrat, sans-serif",
            letterSpacing: "1px",
          }}
        >
          {page}
        </Typography>
      ))}
    </Box>
  );
};

export default FullScreenNav;
