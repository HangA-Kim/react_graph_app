import { Badge, IconButton } from '@mui/material'
import { Icons } from '../../assets/icons';

const AlarmBadge = () => {
  return (
    // badgeContent={1} 
    <Badge variant='dot' color="secondary" sx={{
      '& .MuiBadge-badge': {
      backgroundColor: 'red',
      color: 'white',
      top: '18px',
      right: '12px',}
      }} 
      >
      <IconButton>
        <img src={Icons.NotificationOrange}></img>
      </IconButton>
    </Badge>
  )
}

export default AlarmBadge