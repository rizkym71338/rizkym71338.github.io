import ParticlesBg from "particles-bg";
import TextLoop from "react-text-loop";

import Profile from "./assets/img/profile.jpg";
import AutoType from "./components/AutoType";

function App() {
  return (
    <>
      <div className="max-h-screen p-5 flex justify-center items-center">
        <div className="flex-col justify-between space-y-3 items-center max-w-md w-full h-full p-5 bgGlassLight">
          <div className="flex flex-col space-y-2 w-full">
            <div className="h-32 w-32 rounded-full shadow-lg mx-auto border-4 border-blue-500">
              <img
                src={Profile}
                alt="Rizky Maulana"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="flex flex-col bgGlassDark w-full justify-center items-center text-white p-3">
              <div className="font-bold text-lg">Rizky Maulana</div>
              <div className="font-semibold">
                <AutoType text="Frontend Developer" />
              </div>
            </div>
            <div className="flex flex-col bgGlassDark w-full justify-center items-center text-white p-3">
              <div className="font-bold text-lg">
                Familiar With{" "}
                <TextLoop interval={1000}>
                  <span className="text-blue-500">HTML.</span>
                  <span className="text-blue-500">CSS.</span>
                  <span className="text-blue-500">Tailwind.</span>
                  <span className="text-blue-500">PHP.</span>
                  <span className="text-blue-500">Laravel.</span>
                  <span className="text-blue-500">Javascript.</span>
                  <span className="text-blue-500">Node js.</span>
                  <span className="text-blue-500">React js.</span>
                  <span className="text-blue-500">React Native.</span>
                  <span className="text-blue-500">Python.</span>
                </TextLoop>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center space-x-2">
              <a
                href="https://www.instagram.com/rzky_mk/"
                className="flex flex-col btnGlass w-full justify-center items-center text-white p-3"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/6282262600183"
                className="flex flex-col btnGlass w-full justify-center items-center text-white p-3"
              >
                Whatsapp
              </a>
            </div>
            <a
              href="mailto:rizkym71338@gmail.com"
              className="flex flex-col btnGlass w-full justify-center items-center text-white p-3"
            >
              Email
            </a>
            <a
              href="https://github.com/rizkym71338"
              className="flex flex-col btnGlass w-full justify-center items-center text-white p-3"
            >
              Github
            </a>
            <a
              href="https://www.youtube.com/channel/UCeJVHHqXvpU2i_zVa2QmgPA"
              className="flex flex-col btnGlass w-full justify-center items-center text-white p-3"
            >
              Youtube
            </a>
          </div>
          <div className="text-center text-white">Made With Love</div>
        </div>
      </div>
      <ParticlesBg
        type="random"
        bg={{
          position: "absolute",
          zIndex: -1,
          top: 0,
          left: 0,
          height: "100vh",
          backgroundColor: "#111827",
          color: "#111827",
        }}
      />
    </>
  );
}

export default App;
