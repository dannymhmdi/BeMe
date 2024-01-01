import TextField from "@mui/material/TextField";
import { BasePage } from "@/src/component/base-page";
import LandingLayout from "@/layouts/landing-layout/landing-layout";
export default function Home() {
  return (
    <>
      <LandingLayout>
        <BasePage fixed={true}>
          <div className="flex flex-col justify-self-center">
            <div className="text-6xl font-bold flex">
              <span className="">BeMe. </span> <span> Be anyone You Want</span>
            </div>

            <div className="flex mt-10">
              <div className="p-2" style={{ border: "1px solid black" }}>
                <div>Where</div>
                <TextField placeholder="AnyWhere" variant="standard" />
              </div>
              <div className="p-2" style={{ border: "1px solid black" }}>
                <div>When</div>
                <TextField placeholder="AnyWhere" variant="standard" />
              </div>
              <div className="p-2" style={{ border: "1px solid black" }}>
                <div>Where</div>
                <TextField placeholder="AnyWhere" variant="standard" />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col py-10">
                <p className="font-bold text-5xl">
                  Experience a different life.
                </p>
                <p className="font-bold text-5xl">Get inspired.</p>
              </div>
              <p className="font-bold text-4xl" style={{width: '940px'}}>
                Try any profession for a few hours with our vetted marketplace
                of industry experts.
              </p>
            </div>
          </div>
        </BasePage>
      </LandingLayout>
    </>
  );
}
