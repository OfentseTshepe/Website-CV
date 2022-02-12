import { Box } from "@mui/material";
import ribbon from "../assets/Ribbon.svg"

function Experience() {
    return (
        <Box sx={{ width: "100vw", height: "100vh", backgroundColor: "rgb(31,34,47)" }} id ="Experience">
            <Box sx={{ heigh: "5vh" }}>
                <img src={ribbon} alt="no" style={{ width: "100px" }}></img>
            </Box>
            <Box sx={{ color: "#FE805D" }}>
                <p style={{ fontSize: "5vh" }}>Experience</p>
            </Box>

            <Box sx={{ display: "grid", justifyContent: "center" ,gap:"20px"}}>

                <Box sx={{ border: "solid thin white", width: "70vw", height: "27vh" }}>
                    < Box sx={{ color: "#FE805D" }}>
                        <p style={{ fontSize: "3vh" }}> Quintessence : 6 January 2020 to 1 November 2021  (Junior Software Engineer) </p>
                    </Box>

                    <Box sx={{ color: "white" }}>
                        <ul>
                            <li>
                                <p>
                                    Design, develop, test and maintain developed software, graphicalinterface  for finencial assest management componies  using react ,angular C#,java and python
                                </p>
                            </li>
                            <li>
                                <p>
                                    Handling sprint planning, daily standups and retrospective meetings
                                </p>
                            </li>

                            <li>
                                <p>
                                    Dev ops , maintaining continuous integration scripts for Jenkins
                                </p>

                            </li>

                        </ul>
                    </Box>

                </Box>

                <Box sx={{ border: "solid thin white", width: "70vw", height: "25vh" }}>
                    < Box sx={{ color: "#FE805D" }}>
                        <p style={{ fontSize: "3vh" }}> University of Cape Town : 2016-2017 (Computer Lab Assistant) </p>
                    </Box>

                    <Box sx={{ color: "white" }}>
                        <ul>
                            <li>
                                <p>
                                provided lab users with assistance on hardware issues, installing and using software programs, printing documents and understanding and using certain operating systems
                                </p>
                            </li>

                        </ul>
                    </Box>

                </Box>


                


            </Box>




        </Box>
    )
}

export default Experience;