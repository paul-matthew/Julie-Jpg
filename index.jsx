import { useEffect } from 'react';
import { navigate } from '@remix-run/router';

export default function Index() {
  useEffect(() => {
    navigate('/app/routes');
  }, []);

  return null;
}
