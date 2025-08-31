import CreateProject from "./create-project";
import PrivateRoute from "@/components/PrivateRoute";

export default function Home() {
  return (
    <PrivateRoute>
      <CreateProject />
    </PrivateRoute>
  );
}
