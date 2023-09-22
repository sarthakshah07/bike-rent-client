import * as React from "react";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import loaderImage from "../../assets/images/icons8-scooter.gif"
import { Typography } from "@mui/material";

const CheckMarkSlider = styled(Slider)(({ theme }) => ({
  color: "#3a8589",
  height: 3,
  // padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 120,
    width: 2,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)"
    },
    "& .checkmark-bar": {
    //   height: 9,
    //   width: 1,
    //   backgroundColor: "currentColor",
    //   marginLeft: 1,
    //   marginRight: 1
    }
  },
  "& .MuiSlider-track": {
    height: 4
  },
  "& .MuiSlider-rail": {
    backgroundColor:"red",
    color: theme.palette.mode === "dark" ? "red" : "yellow",
    opacity: 0
    // height: 40
  }
}));

const CheckMarkThumbComponent = (props) => {
  const { children, ...other } = props;

  return (
    <SliderThumb {...other}>
      {children}
      <img src={loaderImage} alt="no image" style={{scale:"2"}}/>
      {/* <CheckCircleIcon /> */}
    </SliderThumb>
  );
};

const CreateRailComponent = (props) => {
    const { children, ...other } = props;
  
    return (
      <SliderThumb {...other}>
        {children}
        <img src={loaderImage} alt="no image" style={{scale:"2"}}/>
        {/* <CheckCircleIcon /> */}
      </SliderThumb>
    );
  };
const Loader = () => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    // for (let index = 0; value <= 100; index++) {
        if (value!==100) {
            setTimeout(() => {
                setValue(value+.1)
               },1);
        }
  }, [value]);

  return (
    <Box sx={{ width: {md:"70%", xs:"50%"} }}>
      <CheckMarkSlider
        value={value}
        disabled
        components={{Rail:CreateRailComponent ,Thumb: CheckMarkThumbComponent }}
      />
    </Box>
  );
};

export default Loader;
