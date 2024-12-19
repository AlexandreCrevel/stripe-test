'use client';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const handlePay = async () => {
    console.log('Pay clicked');
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error('No URL returned by the server');
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  };

  return (
    <div className='flex flex-col'>
      <h1>Dashboard</h1>
      <Button variant='default' onClick={handlePay}>
        Pay 1$
      </Button>
    </div>
  );
};

export default Dashboard;
