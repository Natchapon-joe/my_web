import {
  BrowserRouter,
  Routes as ReactRoutes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "./Pages";

export default function Routes() {
  return (
    <BrowserRouter>
      <Layout>
        <ReactRoutes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to={"/"} replace />} />
        </ReactRoutes>
      </Layout>
    </BrowserRouter>
  );
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full h-full bg-[#3a71ca]">{children}</div>;
};
