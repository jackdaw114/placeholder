import { Divider, Paper } from "@mui/material";
import { Box } from "@mui/system";
import ImageHandler from "./ImageHandler";
import SearchBar from "./SearchBar";
import Services from "./Services";

export default function Home() {
    return (
        <Box>
            <SearchBar />
            <Services />
            <Divider sx={{ paddingTop: 5, borderBottomWidth: 5 }} />
        </Box>
    )
}