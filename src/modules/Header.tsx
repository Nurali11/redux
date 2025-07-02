import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { PlusOutlined } from '@ant-design/icons';
import CreateCard from '../components/CreateCard';
import { useContext, useState } from 'react';
import { Context } from '../context/Context';

export const Header = () => { 
  const [form, setForm] = useState(false)
  const {showCreate, setShowCreate, setImages} = useContext(Context)

  function handleCreate(){
    setImages(null)
    setShowCreate(!showCreate)
    setForm(!form)
  }

  return (
    <div className='!sticky top-0 !z-10'>
    <Box sx={{ flexGrow: 1 }} className='!min-h-[10px]'>
      <AppBar className='!bg-[#3e3e3e]' position="absolute" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Products
          </Typography>
            
          <div className='flex gap-7'>
            <Button variant='outlined' type='button' onClick={handleCreate} color="inherit"><PlusOutlined className='pr-[10px]'/> Create Product</Button>
          </div>
      {form ? <CreateCard/> : ""}
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}