import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Container,
  useTheme,
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { Badge } from '@mui/material';

// 1. styled: لإنشاء شريط البحث المخصص
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: alpha(theme.palette.background.paper, 0.15),
  border: `1px solid ${theme.palette.divider}`,
  '&:hover': {
    border : `1px solid #333`,
    //backgroundColor: alpha(theme.palette.background.paper, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  display: 'flex',
  alignItems: 'center',
  borderRadius: '25px', 
  color: theme.palette.text.primary,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  fontSize: '14px', 
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, `calc(1em + ${theme.spacing(4)})`),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));

// 2. Main Component
const Header2 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All Categories'); 
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    handleClose();
  };

  const theme = useTheme();

  // تعديل مصفوفة الفئات لتشمل "All Categories"
  const categories = ['All Categories', 'Electronics', 'Books', 'Clothing', 'Home Appliances', 'Toys'];

  return (
    <Container sx={{ my: 3, display: 'flex', justifyContent: 'space-between' }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', padding: '10px 20px' }}>
          {/* Logo and App Name */}
          <Stack sx={{ display: 'flex', alignItems: 'center', color: theme.palette.text.primary }}>
            <ShoppingCartOutlinedIcon sx={{ fontSize: '32px', mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: { xs: 'none', sm: 'block' },
                fontWeight: 'bold',
              }}
            >
              E-commerce
            </Typography>
          </Stack>

          {/* Search Bar with Dropdown */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Search sx={{ borderRadius: '22px' }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
              />
              {/* Categories Dropdown */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  borderLeft: `1px solid ${theme.palette.divider}`,
                  p: '0 10px',
                }}
                onClick={handleClick}
              >
                <Typography variant="body2" sx={{ mr: 0.5 }}>
                  {selectedCategory}
                </Typography>
                <ExpandMoreOutlinedIcon />
              </Box>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
                sx={{ mt: '25px' }}
              >
                {/* تكرار قائمة الفئات من المصفوفة */}
                {categories.map((category) => (
                  <MenuItem
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    selected={category === selectedCategory} // إضافة خاصية `selected`
                  >
                    {category}
                  </MenuItem>
                ))}
              </Menu>
            </Search>
          </Box>

          {/* Icons */}
          <Box sx={{ display: 'flex', alignItems: 'center', color: theme.palette.text.primary }}>
            <IconButton
              size="large"
              aria-label="show cart items"
              color="inherit"
            >
              <Badge badgeContent={1} color="error">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <PersonOutlineOutlinedIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header2;