import BoxContainer from "../components/boxContainer";
import dummyData from "@/lib/dummyData.json";

export default function Home() {
  return (
    <div className="px-2 mt-4 mb-4 ">
      <h1 className="text-center mt-4 ">Join Our Team</h1>
      <p>Open Positions ({dummyData.length})</p>
      <BoxContainer />
    </div>
  );
}
