import { Box, Button } from "@mui/material"
import profilepic from "../assets/profilepic.jpg"
import pc from "../assets/pc3.png"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { keyframes } from "@emotion/react";

const bounce = keyframes`0% {
    transform: scale(1,1) translate(0px, 0px);
  }
  
  30%{
    transform: scale(1,0.8) translate(0px, 10px); 
  }

  75%{
    transform: scale(1,1.1) translate(0px, -25px); 
  }
  
 100% {
    transform: scale(1,1) translate(0px, 0px);
  }`



function Home() {
    return (
        <Box sx={{ backgroundImage: `url(${pc})`, backgroundSize: "comtain", backgroundRepeat: "no-repeat", width: "100vw" }}>
            <Box sx={{ backgroundColor: "#17161c" }}>

                <Box sx={{ height: "14vh"}}> </Box>
                <Box sx={{ display: "flex", borderBottom: "solid 3px #FE805D", height: "30vh" }}>
                    <Box sx={{ height: '250px', border: "solid 3px #FE805D", width: "250px", ml: "5vw", mt: "15vh", mr: "13vw", borderRadius: "50%" }}>
                        <img src={profilepic} alt="profile" style={{ width: "250px", height: "250px", borderRadius: "50%" }} />
                    </Box>
                    <Box sx={{ borderBottom: "solid 2px #FE805D", display: "grid", height: "30vh", backgroundColor: "#17161c", justifyItems: "center" }}>

                        <Box sx={{ display: "grid", height: "13vh", pb: "40px" }}>
                            <p style={{ color: "#FE805D ", fontSize: "63px", }}>Ofentse Tshepe</p>
                        </Box>
                        <Box sx={{ height: "10vh" }}>
                            <p style={{ color: "white ", fontSize: "23px" }}>Computer Engineer and Computer Scientist</p>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: "grid", height: "54.5vh", backgroundColor: "rgba(23,22,28,0.6)", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ backgroundColor: "rgba(23,22,28,0.6)", width: "40vw", height: "30vh" }}>
                    <Box sx={{ color: "#FE805D" }}>
                        <h1> Hello , welcome</h1>
                    </Box>
                    <Box sx={{ color: "white" }}>
                        <p> Thank you for having an intrest in reading my portfolio i hope you will enjoy it  </p>
                        <p> I am a software engineer that possesses two years of experience in developing and maintaining front-end and
                            back end software , the front-end stacks i used  React  and Angular and the back-end languages that i used include c-sharp(C#), Java, Python. My Knowledge
                            DataBases include SQL, MySQL and MongoDB.I also write continuous integration scripts for Jenkins and know how to follow the agile software develop cycle .
                        </p>

                    </Box>

                </Box>
                <Box sx={{display:"flex",justifyContent: "center", alignItems: "center" }}>
                    <Button sx={{ width: "6vw" , animation: `${bounce} 3s infinite`}}>
                        <ArrowDownwardIcon sx={{ color: "#FE805D", fontSize: 40 }} />
                    </Button>
                </Box>



            </Box>

        </Box>
    )
}

export default Home;