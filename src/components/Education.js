import { Box } from "@mui/material";

import ribbon from "../assets/Ribbon.svg"

function Education() {
    return (
        <Box sx={{ width: "100vw", height: "100vh", backgroundColor: "#17161c" }} id="Education">

            <Box sx={{ height: "10vh" }}>
                <img src={ribbon} alt="ribbon" style={{ width: "100px" }}></img>
            </Box>
            <Box sx={{ color: "#FE805D" }}>
                <p style={{ fontSize: "5vh" }}>Education and Qualifications </p>
            </Box>

            < Box sx={{ display: "grid", justifyContent: "center", gap: "50px" }}>
                <Box sx={{ border: "solid thin white", width: "70vw", height: "20vh" }}>
                    < Box sx={{ color: "#FE805D" }}>
                        <p style={{ fontSize: "3vh" }}> University of Cape Town:2014-2019</p>
                    </Box>
                    <ul>
                        <li><p style={{ fontSize: "2.5vh", color: "white" }}> Bsc Computer Engineering </p></li>
                        <li> <p style={{ fontSize: "2.5vh", color: "white" }}> Bsc Computer Science </p></li>
                    </ul>
                </Box>
                <Box sx={{ border: "solid thin white", width: "70vw", height: "20vh" }}>
                    < Box sx={{ color: "#FE805D" }}>
                        <p style={{ fontSize: "3vh" }}>International Business Machines Corporation (IBM) :July 2019 </p>
                    </Box>
                    <ul>
                        <li><p style={{ fontSize: "2.5vh", color: "white" }}> Introductin to Blockchain systems and software</p></li>
                    </ul>
                </Box>

            </Box>

        </Box>
    );
}

export default Education;