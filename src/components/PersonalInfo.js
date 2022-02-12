import { Box } from "@mui/material";
import ribbon from "../assets/Ribbon.svg"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedIn from '@mui/icons-material/LinkedIn'
import GitHub from '@mui/icons-material/GitHub'

function PersonalInfo() {
    return (

        <Box container sx={{ width: "100vw", height: "100vh", backgroundColor: "rgb(31,34,47)" }} id ="Contact Info">

            <Box sx={{ heigh: "5vh" }}>
                <img src={ribbon} alt="no" style={{ width: "100px" }}></img>
            </Box>
            <Box sx={{ color: "#FE805D" }}>
                <p style={{ fontSize: "5vh" }}>Personal and Contact infomation</p>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{ display: "grid", width: "70vw", height: "60vh", backgroundColor: "rgba(23,22,28,0.3)", color: "white", gridTemplateColumns: "1fr 2fr", gridTemplateRows: "repeat(6 ,1fr)" }}>

                    {[<><LocationOnOutlinedIcon sx={{color:"#FE805D"}} />   Nationality </>, "South African",
                      <><LocalPhoneOutlinedIcon sx={{color:"#FE805D"}} />   Cell Phone Number (main)</> , "066 053 8033",
                      <><LocalPhoneOutlinedIcon sx={{color:"#FE805D"}} />   Cell Phone Number (main)</>, "071 8197 098",
                       <><EmailOutlinedIcon sx={{color:"#FE805D"}} />   Email</> , "Booklove.tshepe@gmail.com",
                       <><LinkedIn sx={{color:"#FE805D"}} />   Linkedin</>, <a href="https://www.linkedin.com/in/ofentse-tshepe/"  style={{color :"white"}}>https://www.linkedin.com/in/ofentse-tshepe/</a>,
                        <><GitHub sx={{color:"#FE805D"}}/>   Github</>, <a href="https://github.com/OfentseTshepe/"  style={{color :"white"}}>https://github.com/OfentseTshepe</a>].map((value, index) => {

                            return (
                                <h4 sx={{ }} key={index}>{value}</h4>)

                        })}


                </Box>
            </Box>


        </Box>
    );
}

export default PersonalInfo;