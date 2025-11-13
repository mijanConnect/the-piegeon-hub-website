import PigeonContainer from "@/components/pigeon/PigeonContainer";
import { Suspense } from "react";

const LoftOverview = () => {
  return (
    <div>
      <Suspense fallback={<div className="p-6">Loading Loft Overview...</div>}>
        <PigeonContainer />
      </Suspense>
    </div>
  );
};

export default LoftOverview;
