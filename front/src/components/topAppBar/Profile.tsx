import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Images } from '../../assets/images';

const Profile = () => {
  return (
    <Stack direction={'row'} sx={{marginLeft:'20px', marginRight:'20px', alignItems:'center'}}>
      <Avatar>
        <img src={Images.ProfileImage} style={{width:'40px'}}/>
      </Avatar>
      <Box sx={{marginLeft:'10px'}}>
        <Typography>HangA</Typography>
        <span style={{fontSize:'14px', color:'grey'}}>Admin</span>
      </Box>
      
    </Stack>
  )
}

export default Profile