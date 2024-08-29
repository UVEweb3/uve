import { Wallet } from './wallet';
import { AccountsModal } from './accounts-modal';
import { useApi, useAccount, useBalance, useBalanceFormat } from '@gear-js/react-hooks';
import { Button } from '@gear-js/ui';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import "./customaccountinfo.css"

export function AccountInfo() {
  const { isApiReady } = useApi();
  const { account, accounts } = useAccount();
  const { balance } = useBalance(account?.address);
  const { getFormattedBalance } = useBalanceFormat();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const navigate = useNavigate(); // Inicializa useNavigate

  const formattedBalance = isApiReady && balance ? getFormattedBalance(balance) : undefined;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openProfileModal = () => {
    setIsProfileModalOpen(true);
  };

  const closeProfileModal = () => {
    setIsProfileModalOpen(false);
  };

  const handleNavigateToCreate = () => {
    navigate('/create'); // Navega a la ruta /create
  };

  const handleNavigateToCreateUser = () => {
    navigate('/createuser'); // Navega a la ruta /createuser
  };

  return (
    <>
      {account ? (
        <Wallet
          balance={formattedBalance}
          address={account.address}
          name={account.meta.name}
          onClick={openProfileModal} // Abre el modal de perfil
        />
      ) : (
        <Button
          text="Star"
          style={{
            marginRight: '6.5vw',
            backgroundColor: '#FF005B',
            borderRadius: '14%',
            border: 'none',
            fontSize: '25px',
            fontFamily: 'Urbanist'
          }}
          onClick={openModal} // Abre el modal de cuentas
        />
      )}

      {isModalOpen && <AccountsModal accounts={accounts} close={closeModal} />}

      {/* Modal para seleccionar el perfil */}
      <Modal show={isProfileModalOpen} onHide={closeProfileModal} centered>
        <Modal.Header closeButton>
        <Modal.Title style={{ textAlign: 'center', width: '100%' }}>What is your profile?</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-around">
          <div className="profile-option text-center" onClick={handleNavigateToCreate}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-check-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
              <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            </svg>
            <p className="mt-2 pcolor">Uver creator</p>
          </div>
          <div className="profile-option text-center" onClick={handleNavigateToCreateUser}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-check-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
              <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            </svg>
            <p className="mt-2 pcolor">Uver student</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
