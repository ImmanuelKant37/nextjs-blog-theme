import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import CreateIcon from '@mui/icons-material/Create';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import TextField from '@mui/material/TextField';
import { red } from '@mui/material/colors';

const colorRed = red[500];
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  width: 400,
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalCreate() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
         <IconButton>
        <AssignmentReturnIcon color ="primary" onClick={ handleOpen}></AssignmentReturnIcon>
    </IconButton>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '27ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Nombre" focused />
      <TextField label="Precio" variant="filled" color="success" focused />
      <TextField label="Total"  variant="filled" color="warning" focused />
    </Box>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Crear un registro nuevo
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
