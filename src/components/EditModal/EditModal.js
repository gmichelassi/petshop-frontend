import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Button from '../../components/Button/Button'

import api from '../../services/api'

import './EditModal.css'
import { Checkbox } from '@material-ui/core';

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
		height: '95vh',
	},
}));

export default function TransitionsModal(props) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(true);
	const [fixo, setFixo] = useState(props.fixo)

	const [nomeCliente, setNomeCliente] = useState(props.nomeCliente)
	const [nomeCachorro, setNomeCachorro] = useState(props.nomeCachorro)
	const [dia, setDia] = useState(props.dia)
	const [mes, setMes] = useState(props.mes)
	const [ano, setAno] = useState(props.ano)
	const [hora, setHora] = useState(props.hora)
	const [minuto, setMinuto] = useState(props.minuto)
	const [obs, setObs] = useState(props.obs)
	const [telefone, setTelefone] = useState(props.telefone)
	const [cor, setCor] = useState(props.cor)

	const [banho, setBanho] = useState(props.banho)
	const [hotel, setHotel] = useState(props.hotel)
	const [taxi, setTaxi] = useState(props.taxi)
	const [creche, setCreche] = useState(props.creche)
	const [tosa, setTosa] = useState(props.tosa)
	const [higiene, setHigiene] = useState(props.higiene)

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		props.setShowModal(false)
		setOpen(false);
	};

	async function editarAgendamento(e) {
		e.preventDefault()
		const resposta = await api.post(`/reagendar?agendamento_id=${props.agendamento_id}`, { dia, mes, ano, hora, minuto, nomeCliente, nomeCachorro, obs, telefone, cor, banho, hotel, taxi, creche, tosa, higiene, fixo })
		window.location.reload(false);
	}

	return (
		<div className="edit-modal">
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
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
							onClick={() => {
								props.setShowModal(false)
								setOpen(false)
							}}
						>&times;</span>
						<div className="edit-container">
							<div className="">
								<form onSubmit={editarAgendamento} className="edit-content">
									<div className="edit-inputs">
										<div className="edit-coluna1">
											<label id="cliente">Cliente</label>
											<input
												id="cliente"
												value={nomeCliente}
												onChange={(e) => setNomeCliente(e.target.value)}></input>

											<label id="pet">Nome do pet</label>
											<input
												id="pet"
												value={nomeCachorro}
												onChange={(e) => setNomeCachorro(e.target.value)}></input>

											<label id="dia">Dia</label>
											<input
												id="dia"
												value={dia}
												onChange={(e) => setDia(e.target.value)}></input>

											<label id="mes">Mes</label>
											<input
												id="mes"
												value={mes}
												onChange={(e) => setMes(e.target.value)}></input>
											<label id="ano">Ano</label>
											<input
												id="ano"
												value={ano}
												onChange={(e) => setAno(e.target.value)}></input>

										
											<label id="tipo">Selecione os Serviços</label>
											<div>
												<div style={{ display: 'flex', flexDirection: 'row' }}>
													<div style={{ display: 'flex', flexDirection: 'row' }}>
														<Checkbox
															checked={banho}
															onChange={() => {
																setBanho(!banho)
															}}
														/>
														<p style={{ marginTop: '9px' }}>Banho</p>
													</div>
													<div style={{ display: 'flex', flexDirection: 'row' }}>
														<Checkbox
															checked={taxi}
															style={{marginLeft: '15px'}}
															onChange={() => {
																setTaxi(!taxi)
															}}
														/>
														<p style={{ marginTop: '9px' }}>Táxi</p>
													</div>
												</div>

												<div style={{ display: 'flex', flexDirection: 'row' }}>
													<div style={{ display: 'flex', flexDirection: 'row' }}>
														<Checkbox
															checked={hotel}
															onChange={() => {
																setHotel(!hotel)
															}}
														/>
														<div>
															<p style={{ marginTop: '9px' }}>Hotel</p>
														</div>
														<div style={{ display: 'flex', flexDirection: 'row' }}>
															<Checkbox
																style={{marginLeft: '23px'}}
																checked={creche}
																onChange={() => {
																	setCreche(!creche)
																}}
															/>
															<p style={{ marginTop: '9px'}}>Creche</p>
														</div>
													</div>
												</div>
												<div style={{ display: 'flex', flexDirection: 'row' }}>
													<Checkbox
														checked={tosa}
														onChange={() => {
															setTosa(!tosa)
														}}
													/>
													<p style={{ marginTop: '9px' }}>Banho e Tosa</p>
												</div>
												<div style={{ display: 'flex', flexDirection: 'row' }}>
													<Checkbox
														checked={higiene}
														onChange={() => {
															setHigiene(!higiene)
														}}
													/>
													<p style={{ marginTop: '9px' }}>Banho e Tosa Higiênica</p>
												</div>
											</div>
											
											
										</div>
										<div className="edit-coluna2">
											<label id="hora">Hora</label>
											<input
												id="hora"
												value={hora}
												onChange={(e) => setHora(e.target.value)}></input>
											<label id="minuto">Minuto</label>
											<input
												id="minuto"
												value={minuto}
												onChange={(e) => setMinuto(e.target.value)}></input>
											<label id="telefone">Telefone</label>
											<input
												id="telefone"
												value={telefone}
												onChange={(e) => setTelefone(e.target.value)}></input>
											<label id="obs">Observação</label>
											<textarea
												id="obs"
												value={obs}
												onChange={(e) => setObs(e.target.value)}></textarea>

											<label id="cor">Status</label>
											<div className="dropdown edit-color">
												<select name="two" className="dropdown-select"
													onChange={(e) => {
														setCor(`${e.target.value}`)
													}}
												>
													<option value="">Selecione um status</option>
													<option value="rgb(0, 255, 0, 0.3)">Chegou</option>
													<option value="rgb(0, 0, 255, 0.3)">Foi embora</option>
													<option value="rgb(255, 255, 0, 0.3)">Não chegou</option>
													<option value="rgb(255, 0, 0, 0.3)">Não compareceu</option>
												</select>
											</div>
											<div style={{ display: 'flex', flexDirection: 'row' }}>
												<Checkbox
													style={{ marginTop: '30px' }}
													checked={fixo}
													onChange={() => {
														setFixo(!fixo)
													}}
												/>
												<p style={{ marginTop: '40px' }}>Agendamento semanal</p>
											</div>	
											<div className="edit-buttons">
												<Button
													text="Enviar"
													type="submit"
													style={{ width: '150px', height: '50px'}}
													className="login-submit-button edit-submit-button"
												/>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>

					</div>
				</Fade>
			</Modal>
		</div>
	);
}
