import { useState } from 'react';
import { biniMembers } from './Data';
import { Box, Button, IconButton, Typography, Collapse } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < biniMembers.length - 1;

  function handleNextClick() {
    setIndex(hasNext ? index + 1 : 0);
  }

  function handleBackClick() {
    setIndex(index > 0 ? index - 1 : biniMembers.length - 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let member = biniMembers[index];

  return (
    <Box 
      sx={{
        width: '400px',
        margin: 'auto',
        padding: '20px',
        textAlign: 'center',
        borderRadius: '10px',
        boxShadow: 3,
        bgcolor: 'white',
        border: '2px solid #ffb3c1'
      }}
    >
      <Typography variant="h4" fontWeight="bold" color="#d63384">
        BINI
      </Typography>
      <Typography variant="h6" fontWeight="bold" color="#ffb3c1">
        KIMBERLY MANALOTO C-PEITEL3
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
        <Button 
          variant="contained" 
          sx={{ bgcolor: '#ff85a2', '&:hover': { bgcolor: '#ff4f7a' } }} 
          onClick={handleBackClick}
        >
          Back
        </Button>
        <Button 
          variant="contained" 
          sx={{ bgcolor: '#ff4f7a', '&:hover': { bgcolor: '#d63384' } }} 
          onClick={handleNextClick}
        >
          Next
        </Button>
      </Box>

      <Typography variant="h5" sx={{ mt: 2, color: '#d63384' }}>
        {member.name}
      </Typography>
      <Typography variant="subtitle1" color="#b56576">
        {index + 1} of {biniMembers.length}
      </Typography>

      <IconButton 
        onClick={handleMoreClick} 
        sx={{ mt: 1, color: '#d63384', transition: 'transform 0.3s ease' }}
        style={{ transform: showMore ? 'rotate(180deg)' : 'rotate(0deg)' }}
      >
        <ExpandMore />
      </IconButton>

      <Collapse in={showMore} timeout="auto">
        <Typography variant="body1" sx={{ mt: 1, px: 2, color: '#b56576' }}>
          {member.description}
        </Typography>
      </Collapse>

      <Box sx={{ mt: 2 }}>
        <img 
          className="bini-member-image" 
          src={member.url} 
          style={{ 
            width: '100%', 
            borderRadius: '10px', 
            border: '3px solid #ff85a2', 
            transition: 'transform 0.3s ease, box-shadow 0.3s ease' 
          }} 
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
      </Box>
    </Box>
  );
}
