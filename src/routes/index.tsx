import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import { Home } from '../pages/Home';
import { ProfileUserDetails } from '../pages/ProfileUserDetails';

export function Root() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<ProfileUserDetails />} />
    </Routes>
  )
}
