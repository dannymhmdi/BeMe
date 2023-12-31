import LandingLayout from "@/layouts/landing-layout/landing-layout";
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

        <div className="grid">
          <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">01</div>
          <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">02</div>
          <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">03</div>
          <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">04</div>
          <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">05</div>
          <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">06</div>
          <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">07</div>
          <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">08</div>
          <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">09</div>
        </div>
      </LandingLayout>
    </>
  );
}
