import { Divider, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import ImageHandler from "./ImageHandler";
import SearchBar from "./SearchBar";
import Services from "./Services";

export default function Home() {
    const [data, setData] = useState('');
    const childToParent = (info) => {
        setData(info)
    }
    return (
        <Box>
            <SearchBar childToParent={childToParent} />
            <Services data={data} />
        </Box>
    )
}