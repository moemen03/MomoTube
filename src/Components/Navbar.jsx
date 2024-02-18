import { Stack } from "@mui/material"
import { Link } from "react-router-dom"

import { logo } from "../utils/constants.jsx"
import SearchBar from "./SearchBar.jsx"

export default function Navbar() {
  return (
    <Stack direction="row" alignItems={"center"} p={2} sx={{ position: "sticky", background: "#000", top: 0, justifyContent: "space-between" }}>
      
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <span style={{color: '#f31503', fontSize: '30px', fontWeight: 'bold', marginRight: '10px', fontFamily: 'cursive'}}>MomoTube</span>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
      
    </Stack>
  )
}
