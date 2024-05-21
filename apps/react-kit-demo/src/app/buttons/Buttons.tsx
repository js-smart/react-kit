import React from 'react';
import DeleteButton from '@react-kit/DeleteButton';

export default function Buttons() {
  return <DeleteButton loading={false} onClick={() => console.log()} />;
}
