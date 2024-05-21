import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>React Kit Demo</h1>
      <hr />

      <p>
        This is a demo of the <code>@react-kit</code> package.
      </p>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
