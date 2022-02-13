import { Box, LinearProgress } from "@mui/material";
import { FaReact, FaCss3Alt, FaHtml5, FaJava, FaPython, FaGithub, FaAngular } from 'react-icons/fa';
import { SiCsharp } from 'react-icons/si';
import ribbon from "../assets/Ribbon.svg"

const skillnames = [<><FaReact /> React</>,
<><FaAngular /> Angular</>,
<><FaJava /> Java</>,
<><FaPython /> Python</>,
<><FaGithub /> Git</>,
<><FaCss3Alt /> CCS </>,
<><FaHtml5 /> HTML 5</>,
<><SiCsharp /> C#</>

]

const skillsratings = [
    87, 86, 92, 90, 82, 80, 81, 80,

]
function Skills() {
    return (
        <Box sx={{ width: "100vw", height: "100vh", backgroundColor: "rgb(31,34,47)" }} id="Skills">
            <Box sx={{ height: "10vh",display:"flex",justifyContent:"center" }}>
                <img src={ribbon} alt="ribbon" style={{ width: "100px" }}></img>
            </Box>
            <Box sx={{ color: "#FE805D" }}>
                <p style={{ fontSize: "5vh" }}>My Skills</p>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>

                <Box sx={{ border: "solid thin white", width: "70vw", height: "70vh" }}>

                    {skillnames.map((Val, index) => {
                        return <Box key={index + 300} sx={{ display: "flex" }}>
                            <Box key={index + 200} sx={{ width: "30vw" }}>
                                <p key={index + 2000} style={{ fontSize: "2.5vh", color: "white" }}> {skillnames[index]}</p>
                            </Box>
                            <Box key={index + 700} sx={{ display: "grid", width: "90%", alignContent: "center" }}>
                                <LinearProgress key={index+9959} variant="determinate" sx={{ backgroundColor: "orangered", color: "white", '& .MuiLinearProgress-bar': { backgroundColor: "#FE805D" }, }} value={skillsratings[index]} />
                            </Box>
                            <Box key={index+5687} sx={{ display: "flex", width: "auto", alignContent: "center" }}>
                                <p style={{ fontSize: "2.5vh", color: "white" }}>{skillsratings[index]}%</p>
                            </Box>


                        </Box>
                    })}


                </Box>




            </Box>


        </Box>

    );
}

export default Skills;