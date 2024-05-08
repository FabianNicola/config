import {Or, Title} from "./Home.style";
import { Button } from "../components/buttons/Button";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  function handleLoginClick() {
    navigate("/login");
  }

  function handleCreateAccountClick() {
    navigate("/create-account");
  }
  return (
  <div style = {{display: "flex", flexDirection: "column", alignItems: "center"}}>
    <Title>Get started...</Title>
    <Button text="Login" onClick={handleLoginClick} />
    <Or>or</Or>
    <Button text="Create a new account" type="green"  textColor="white" onClick={handleCreateAccountClick} />
  </div>
  );
}
