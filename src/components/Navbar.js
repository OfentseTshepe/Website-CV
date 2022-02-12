import { Box } from "@mui/material";
import {HashLink} from "react-router-hash-link"
function Navbar(){
    return(
        <Box sx={{ display: "flex",position:"fixed",top:"0", width:"100vw", borderBottom: "solid thin white", height: "10vh", alignItems: "center", backgroundColor: "transparent" }}>
        <Box sx={{ flexGrow: "1" }}>

            <h2 style={{ color: "white" }}>Ofentse Tshepe</h2>
        </Box>
        {["Contact Info",  "Projects", "Experience","Education", "Skills"].map((value, index) => {
            return (<HashLink key={index} to={`#${value}`}  smooth={1000} style={{color:"white",marginRight:"20px", "&:hover":{color:"#FE805D"}}}>
                <h3>{value}</h3>
            </HashLink>);
        })}

    </Box>

    );
}

export default Navbar