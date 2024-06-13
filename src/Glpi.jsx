import React from 'react';
import Ticket from './Ticket';
import './Glpi.css';

function Glpi() {
  const tickets = [
    {
      image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F-C6KY8tsc8Fw%2FT-SVFnncxjI%2FAAAAAAAAANw%2FFMiNzA8Zecw%2Fs1600%2Fmr.bean.jpg&f=1&nofb=1&ipt=4c9cf6fcb8b475b89d1edea73550cfede7c4501b62866b781d3f8c72d212ea8b&ipo=images',
      title: 'Alerte générale ! Probème majeur dans la supervision',
      description: 'Description of ticket 1',
      requester: 'John Doe',
      actions: [
         { label: 'Action 1', command: 'firefox' },
         { label: 'Action 2', command: 'firefox' },
       ],
    },
    {
      image: 'https://via.placeholder.com/50',
      title: 'SUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU',
      description: 'Description of ticket 2',
      requester: 'Jane Smith',
      actions: [
         { label: 'Action 1', command: 'echo "Action 1 executed"' },
         { label: 'Action 2', command: 'echo "Action 2 executed"' },
       ],
    },
    {
      image: 'https://via.placeholder.com/50',
      title: 'Ticket 3',
      description: 'Description of ticket 3',
      requester: 'Michael Johnson',
      actions: [
         { label: 'Action 1', command: 'echo "Action 1 executed"' },
         { label: 'Action 2', command: 'echo "Action 2 executed"' },
       ],
    },
  ];

  return (
    <div className="glpi-section">
      {tickets.map((ticket, index) => (
        <Ticket
          key={index}
          image={ticket.image}
          title={ticket.title}
          description={ticket.description}
          requester={ticket.requester}
          actions={ticket.actions}
        />
      ))}
    </div>
  );
}

export default Glpi;
