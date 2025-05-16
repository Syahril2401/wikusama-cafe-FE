import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Menu from "./pages/menu";
import Login from "./pages/login";
import Transaksi from "./pages/transaksi";
import Middleware from "./pages/middleware";
import Sidebar from "./pages/sidebar";
import Meja from "./pages/meja";
import User from "./pages/user"
import Home from "./pages/home";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/transaksi/chart" element={
          <Middleware>
            <Sidebar title="Home">
              <Home />
            </Sidebar>
          </Middleware>
        } /> 
        <Route path="/menu" element={
          <Middleware roles={['admin']}>
            <Sidebar title="Daftar Menu">
              <Menu />
            </Sidebar>
          </Middleware>
        } />
        <Route path="/meja" element={
          <Middleware role={['admin', 'kasir']}>
            <Sidebar title="Daftar Meja">
              <Meja />
            </Sidebar>
          </Middleware>
        } />
        <Route path="/user" element={
          <Middleware roles={['admin']}>
            <Sidebar title="Daftar User">
              <User />
            </Sidebar>
          </Middleware>
        } />
        <Route path="/transaksi" element={
          <Middleware roles={['kasir', 'manajer']}>
            <Sidebar title="Daftar Transaksi">
              <Transaksi />
            </Sidebar>
          </Middleware>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  )
}