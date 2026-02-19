'use client'

import { AppBar, Stack, Typography, Toolbar, Button, Menu, MenuItem} from "@mui/material";
import Link  from 'next/link';
import { useState } from "react";

export default function Navbar(){
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleOpen = (event:React.MouseEvent<HTMLButtonElement>) =>{
    setAnchorEl(event.currentTarget);
  }

  const handleClose = ()=>{
    setAnchorEl(null)
  }

return (
       <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" sx={{flexGrow: 1}}>
              Aldar
            </Typography>
            <Stack direction="row" spacing={2}>
             <Button color="inherit" component={Link} href="/">
               Home
             </Button>
             <Button color="inherit" onClick={handleOpen}>
                Student Life
             </Button>
             <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem component={Link} href="/student-life/learning-support" onClick={handleClose}>
                 Learning Support
                </MenuItem>
                <MenuItem component={Link} href="/admission/documents" onClick={handleClose}>
                 Entry Requirements and Documents
                </MenuItem>
                <MenuItem component={Link} href="/admissions/fees" onClick={handleClose}>
                 Fees and Payment Plans
                </MenuItem>
             </Menu>
              <Button color="inherit" component={Link} href="/contact">
                Contact Us
             </Button>
            </Stack>
        </Toolbar>
       </AppBar>
);
}