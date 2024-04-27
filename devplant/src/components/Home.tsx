import {Or, Title} from "./Home.style";
import { Button } from "./buttons/Button";

export function Home() {
  return (
  <div style = {{display: "flex", flexDirection: "column", alignItems: "center"}}>
    <Title>Get started...</Title>
    <Button text="Login" onClick={function (): void {
                    throw new Error('Function not implemented.');
                } } />
    <Or>or</Or>
    <Button text="Create a new account" type="green"  textColor="white" onClick={function (): void {
                    throw new Error('Function not implemented.');
                } } />
  </div>
  );
}
