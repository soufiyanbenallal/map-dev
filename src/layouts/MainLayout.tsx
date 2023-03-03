import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="App ">
      {/* 
        <divclassName="fixed w-full h-full z-[-1] left-0 top-0 flex">
          <span className="border-x mx-auto px-0 container h-full w-full"></span>
        </divclassName=> 
      */}
      <div
        className="opacity-10 blur-3xl fixed w-full h-full z-[-1] bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(https://www.nicepng.com/png/full/51-512313_abstract-colors-png-file-abstract-colorful-dots-background.png)`,
        }}
      ></div>
      <Outlet />
      <Footer />
    </div>
  );
}
