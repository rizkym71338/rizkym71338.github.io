import React from 'react';
import ParticlesBg from 'particles-bg';
import TextLoop from 'react-text-loop';

import Profile from './assets/img/profile.jpg';
import AutoType from './components/AutoType';

function App() {
  const FamiliarWith = [
    'HTML.',
    'CSS.',
    'Tailwind.',
    'PHP.',
    'Laravel.',
    'Javascript.',
    'Node js.',
    'React js.',
    'React Native.',
    'Python.',
  ];

  return (
    <>
      <div className="flex items-center justify-center max-h-screen p-5">
        <div className="flex-col items-center justify-between w-full h-full max-w-md p-5 space-y-3 bgGlassLight">
          <div className="flex flex-col w-full space-y-2">
            <div className="w-32 h-32 mx-auto border-4 border-blue-500 rounded-full shadow-lg">
              <img
                src={Profile}
                alt="Rizky Maulana"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="flex flex-col items-center justify-center w-full p-3 text-white bgGlassDark">
              <div className="text-lg font-bold">Rizky Maulana</div>
              <div className="font-semibold">
                <AutoType text="Frontend Developer" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full p-3 text-white bgGlassDark">
              <div className="text-lg font-bold">
                Familiar With{' '}
                <TextLoop interval={1000}>
                  {FamiliarWith.map((item) => (
                    <span key={item} className="text-blue-500">
                      {item}
                    </span>
                  ))}
                </TextLoop>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between space-x-2">
              <a
                href="https://www.instagram.com/rzky_mk/"
                className="flex flex-col items-center justify-center w-full p-3 text-white btnGlass"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/6282262600183"
                className="flex flex-col items-center justify-center w-full p-3 text-white btnGlass"
              >
                Whatsapp
              </a>
            </div>
            <a
              href="mailto:rizkym71338@gmail.com"
              className="flex flex-col items-center justify-center w-full p-3 text-white btnGlass"
            >
              Email
            </a>
            <a
              href="https://github.com/rizkym71338"
              className="flex flex-col items-center justify-center w-full p-3 text-white btnGlass"
            >
              Github
            </a>
            <a
              href="https://www.youtube.com/channel/UCeJVHHqXvpU2i_zVa2QmgPA"
              className="flex flex-col items-center justify-center w-full p-3 text-white btnGlass"
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
          position: 'absolute',
          zIndex: -1,
          top: 0,
          left: 0,
          height: '100vh',
          backgroundColor: '#111827',
          color: '#111827',
        }}
      />
    </>
  );
}

export default App;
