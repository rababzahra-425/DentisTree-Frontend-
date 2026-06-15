import React, { useRef, useEffect } from 'react';
import Navbar from './navbar';
import AppointmentForm from './AppointmentForm';

const AppointmentPage = () => {
  const formRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar formRef={formRef} />
      <AppointmentForm formRef={formRef} />
    </>
  );
};

export default AppointmentPage;
