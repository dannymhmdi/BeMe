
import LandingLayout from "@/layouts/landing-layout/landing-layout";
import { Button, Container } from "@mui/material";
import Image from "next/image";

export default function Home() {
  const style = {
    //  width: '50%',
    border: "2px solid red",
  };
  return (
    <>
      <LandingLayout>
        <div className="container flex flex-wrap" style={style}>
          <div className="w-3/12 px-3  ">
            <div className="border">1</div>
          </div>
          <div className="w-4/12 px-3">
            <div className="border">2</div>
          </div>
          <div className="w-5/12 px-3">
            <div className="border">3</div>
          </div>
        </div>


 
      </LandingLayout>
    </>
  );
}
