import React from 'react';
import './Ticket.css';

function Ticket({ image, title, description, requester, actions }) {

  const { ipcRenderer } = window.ipcRenderer;

  const handleAllActionsClick = () => {
    actions.forEach(action => {
      console.log(`Exécution de la commande: ${action.command}`);
      // Envoyer la commande au processus principal pour exécution
      ipcRenderer.send('execute-shell-command', action.command);
    });
  };

  return (
    <div className="ticket">
      <div className="ticket-image-container">
        <img src={image} alt="Requester" className="ticket-image" />
        <div className="ticket-requester">{requester}</div>
      </div>
      <div className="ticket-content">
        <div className="ticket-info">
          <h3 className="ticket-title">{title}</h3>
          <p className="ticket-description">{description}</p>
        </div>
        <div className="ticket-actions">
          <button onClick={handleAllActionsClick} className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
