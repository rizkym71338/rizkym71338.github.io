import React from 'react';
import AutoType from '../../components/AutoTyping';
import IndexHero from '../../layouts/IndexHero';

const Home = () => {
    return (
        <>
            <div className="bg-gray-900">
                <div className="container mx-auto">
                    <div className="h-full">
                        <IndexHero />
                        <div className="h-screen flex justify-center items-center">
                            <div className="flex z-50 md:text-4xl text-xl font-bold text-gray-200 bg-gray-800 bg-clip-padding md:w-1/2 md:h-1/2 md:p-4 w-2/3 py-20  rounded-3xl backdrop-filter backdrop-blur-sm bg-opacity-0 justify-center items-center border-white border border-opacity-5">
                                <AutoType text="Wellcome !!!" />
                            </div>
                        </div>
                        <div className="h-screen flex justify-center items-center">
                            <div className="flex z-50 md:text-5xl text-xl text-gray-200 font-bold">
                                Coming Soon :)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
