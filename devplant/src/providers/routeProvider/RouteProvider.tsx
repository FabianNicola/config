import {Route, Routes} from "react-router-dom";
import { Layout } from "../../components/layout/Layout";
import { RootRoute } from "./RootRoute";
import { Home } from "../../components";
import { Login } from "../../screens/Login";
import { CreateAccount } from "../../screens/CreateAccount";

export function RouteProvider() {
  return (
    <Layout>
        <Routes>
            <Route path="/" element={<RootRoute />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<CreateAccount />}  />
        </Routes>
    </Layout>
  )
};