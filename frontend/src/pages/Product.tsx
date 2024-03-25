import { Box } from "@mui/material";

const Product = () => {
  // const handleSubmit = async () => {
    
  // };

  return (
    <div className="chat-flipIn">
      <Box
        sx={{
          display: "flex",
          flex: 1,
          width: "100%",
          height: "100%",
          mt: 3,
          gap: 3,
        }}
      >
        {/* TODO: Upload Images Here */}
        <Box sx={{ display: { md: "flex", xs: "flex", sm: "flex" } }}>
          Upload Images Here
        </Box>
        {/* TODO: Display Image Here */}
        <Box
          sx={{
            display: "flex",
            flex: { md: 1, sx: 1, sm: 1 },
            flexDirection: "column",
            px: 3,
          }}
        >
          Display the Generated Image Here
        </Box>
      </Box>
    </div>
  );
};

export default Product;
