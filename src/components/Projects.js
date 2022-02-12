import { Box, Button, Tooltip } from "@mui/material";
import ribbon from "../assets/Ribbon.svg"
import GitHub from '@mui/icons-material/GitHub'

const Title = ["Memory test game", "Weather webapp"]
const description = ["Memory testing game is a game that was designed to test the short term memory of an individual ,The aim of the game is to remember as many orange box placements as possible within a given time in each level of the game, the gaem is a simple web page that was evelope by using React JS",
    "A simple weather app that reads data from the https://openweathermap.org/ API build using React Js"]
const Gitrepo = ["https://github.com/OfentseTshepe/memory-test-game", "https://github.com/OfentseTshepe/WeatherApp"]
const Weblink = ["https://memory-test-game.vercel.app/", "https://weather-app-six-sepia.vercel.app/"]

function Projects() {
    return (

        <Box sx={{ width: "100vw", height: "100vh", backgroundColor: "#17161c" }} id ="Projects">
            <Box sx={{ heigh: "5vh" }}>
                <img src={ribbon} alt="no" style={{ width: "100px" }}></img>
            </Box>
            <Box sx={{ color: "#FE805D" }}>
                <p style={{ fontSize: "5vh" }}>My Latest Projects</p>
            </Box>
            <Box sx={{ display: "grid", gap: "10px", justifyContent: "center" }}>

                {Title.map((value, index) => (
                    <Box key={index+100} sx={{ display: "flex", flexDirection: "column", border: "solid thin white", width: "70vw", height: "23vh" }}>
                        <Box key = {index} sx={{ display: "flex", justifyContent: "center", color: "#FE805D", height: "7vh" }}>
                            <p style={{ fontSize: "20px" }}>{value}</p>
                        </Box>
                        <Box  key={index+50} sx={{ display: "flex", color: "white" }}>

                            <p>
                                {description[index]}
                            </p>

                        </Box>

                        <Box  key={index +100}sx={{ display: "flex", justifyContent: "center" }}>
                            < Box key={index+500} sx={{ flexGrow: "1", ml: "40%" }}>
                                <Button key={index+700} onClick={() => { window.open(`${Weblink[index]}`, "_blank") }} sx={{ width: "15vw", borderRadius: "20px", color: "#FE805D", border: "solid thin #FE805D", }}>
                                    Open Website App
                                </Button>
                            </Box>
                            <Tooltip key ={index+900} title="Open Github repo">
                                <Button  key={index+1500} onClick={() => { window.open(`${Gitrepo[index]}`, "_blank") }} sx={{ borderRadius: "20px", color: "#FE805D", border: "solid thin #FE805D", mr: "2vw" }} >
                                    <GitHub />
                                </Button>
                            </Tooltip>
                        </Box>
                    </Box>

                ))}



            </Box>

        </Box>

    );

}

export default Projects