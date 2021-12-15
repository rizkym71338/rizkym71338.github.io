import React from 'react';
import AutoType from '../../components/AutoTyping';
import IndexHero from '../../layouts/IndexHero';

import Profile from "../../assets/img/profil.jpg"
import { Instagram } from '../../assets/svg/instagram';
import { Envelope } from '../../assets/svg/envelope';
import { Whatsapp } from '../../assets/svg/whatsapp';

const Home = () => {
  return (
    <>
      <div className="bg-gray-900">
        <div className="container mx-auto">
          <div className="h-full">
            <IndexHero />
            {/* <div className="h-screen flex justify-center items-center">
                            <div className="flex z-50 md:text-4xl text-xl font-bold text-gray-200 bg-gray-800 bg-clip-padding md:w-1/2 md:h-1/2 md:p-4 w-2/3 py-20  rounded-3xl backdrop-filter backdrop-blur-sm bg-opacity-0 justify-center items-center border-white border border-opacity-5">
                                <AutoType text="Wellcome !!!" />
                            </div>
                        </div>
                        <div className="h-screen flex justify-center items-center">
                            <div className="flex z-50 md:text-5xl text-xl text-gray-200 font-bold">
                                Coming Soon :)
                            </div>
                        </div> */}

            <div className="h-screen flex justify-center">
              <div className="flex flex-col z-50 justify-between text-gray-200">
                <div className="flex w-screen flex-col justify-center p-10">
                  <div className="w-40 h-40 rounded-full shadow-lg mx-auto">
                    <img className="w-full h-full rounded-full" src={Profile} alt="Rizky Maulana" />
                  </div>
                  <div className="mx-auto py-5">
                    <h3 className="text-xl">Rizky Maulana</h3>
                  </div>
                  <div className="mx-auto pb-5 text-2xl font-bold">
                    <AutoType text="Frontend Developers" />
                  </div>
                  <div className="mx-auto py-5">
                    <div className="flex flex-row justify-center space-x-5">
                      <a href="https://www.instagram.com/rzky_mk/" className="w-8 duration-300 transform hover:scale-110">
                        {Instagram}
                      </a>
                      <a href="mailto:rizkym71338@gmail.com" className="w-8 duration-300 transform hover:scale-110">
                        {Envelope}
                      </a>
                      <a href="https://wa.me/6282262600183" className="w-8 duration-300 transform hover:scale-110">
                        {Whatsapp}
                      </a>
                    </div>
                  </div>
                  <div className="mx-auto py-5">
                    <div className="mb-5">
                      <a href="https://github.com/rizkym71338">
                        <div className="flex bg-gray-800 bg-clip-padding rounded-full backdrop-filter backdrop-blur-sm bg-opacity-0 justify-center items-center border-white border border-opacity-5 duration-300 transform hover:scale-110 hover:shadow-xl w-full py-3 px-28">
                          Github
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="https://www.youtube.com/channel/UCeJVHHqXvpU2i_zVa2QmgPA">
                        <div className="flex bg-gray-800 bg-clip-padding rounded-full backdrop-filter backdrop-blur-sm bg-opacity-0 justify-center items-center border-white border border-opacity-5 duration-300 transform hover:scale-110 hover:shadow-xl w-full py-3 px-28">
                          Youtube
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pb-5 mx-auto">
                  Made With Love
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
