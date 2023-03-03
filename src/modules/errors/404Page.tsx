import PageLayout from "@/layouts/PageLayout";
import { useRouteError } from "react-router-dom";

export default function Error404Page() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <PageLayout className="grid h-screen px-4 bg-white place-content-center">
        <h1 className="tracking-widest text-gray-500 uppercase">404 | Not Found</h1>
    </PageLayout>
  );
}