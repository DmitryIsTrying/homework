import React from 'react'
import { hexToRgb, Slider, SliderProps, styled } from '@mui/material'
const ThumbSlider = styled(Slider)(({ theme }) => ({
  color: '#01CB22',
  height: 3,
  maxWidth: '147px',
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    height: 17,
    width: 17,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    },
    '&:before': {
      content: '""', // Обязательно указать content
      width: 6,
      height: 6,
      borderRadius: '50%',
      backgroundColor: '#01CB22', // Замените на нужный цвет
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      boxShadow: 'none',
    },
  },
  '& .MuiSlider-track': {
    height: 4,
  },
  '& .MuiSlider-rail': {
    color: '#8B8B8B',
    opacity: 1,
    height: 4,
  },
}))
const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <ThumbSlider
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  )
}

export default SuperRange
