import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Button from '../../components/Button/Button'

import api from '../../services/api'

import './AgendamentoSelecionadoModal.css'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    props.setShowAgendamentoSelecionadoModal(false)
    setOpen(false);
  };

  return (
    <div className="edit-modal">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal + ' agendamentoSelecionadoModal'}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
            <div className={classes.paper}>
                <span 
                    className="close"
                    onClick={ () => {
                        handleClose()
                    } }
                >&times;</span>
                <Button
                    className="modal-button"
                    text="Editar"
                    style={{ width: '100%', height: '30px' }}
                    onClick={ () => {
                        props.setShowEditModal(true)
                    } }
                ></Button>
                <Button 
                    className="modal-button"
                    text="Deletar"
                    style={{ width: '100%', height: '30px' }}
                    onClick={ () => {
                        async function deletarAgendamento() {
                            if(window.confirm('Tem certeza que deseja deletar esse agendamento?')) {
                                await api.post('/cancelar', { _id: props.agendamentoSelecionado._id })
                                window.location.reload(false); 
                            }
                        }
                        
                        deletarAgendamento()
                    } }
                ></Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
