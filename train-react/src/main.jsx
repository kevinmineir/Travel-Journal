import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { react } from 'react';


import { TravelJournal } from './Components/App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main> 
      <TravelJournal/>
    </main>
  </StrictMode>,
)
