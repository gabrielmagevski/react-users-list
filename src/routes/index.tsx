import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import { Home } from '../pages/Home';
import { UserDetailhed } from '../pages/UserDetailhed';

export function Root() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/userDetailhed" element={<UserDetailhed />} />
    </Routes>
  )
}
