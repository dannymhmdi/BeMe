import TextField from "@mui/material/TextField";
import { BasePage } from "@/src/component/base-page";
import LandingLayout from "@/layouts/landing-layout/landing-layout";
export default function Home() {
  return (
    <>
      <LandingLayout>
        <BasePage fluid={"false"}>
          <div className="text-6xl font-bold flex justify-center">
            <span className="">BeMe. </span> <span> Be anyone You Want</span>
          </div>
          <div className="flex justify-center mt-10">
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
        </BasePage>
      </LandingLayout>
    </>
  );
}
