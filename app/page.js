import LandingLayout from "@/layouts/landing-layout/landing-layout";
import { BasePage } from "@/src/component/base-page";
import { Container } from "@mui/material";
import Image from "next/image";
export default function Home() {
  const style = {
    //  width: '50%',
    border: "2px solid red",
  };
  return (
    <>
      <LandingLayout>
      
        <BasePage fluid={'false'}>
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </BasePage>

      </LandingLayout>
    </>
  );
}
