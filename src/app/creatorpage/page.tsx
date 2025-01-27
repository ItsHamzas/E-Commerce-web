"use client";

import Image from 'next/image';
import { FaEnvelope, FaInstagram, FaGithub, FaLinkedin, FaHandshake } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

function CreatorPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-[#f9f9f9] to-[#e6e6e6] py-12 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl p-10 space-y-12">
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <Image
                src="/images/my-img.png"
                alt="Profile Picture"
                className="rounded-full shadow-lg"
                width={180}
                height={180}
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-extrabold text-[#1D3178]">About the Developer</h1>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                Hi, I’m <span className="font-bold text-[#FB2E86]">Hamza Asif</span>, passionate about
                "Building the future with precision, creativity, and cutting-edge technology."
                My expertise includes <span className="font-bold">Generative AI</span>, the <span className="font-bold">Metaverse</span>, and <span className="font-bold">Cloud Technologies</span>.
              </p>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                Before this, I had no background in the IT sector, but with the help of the IT initiative by GIAIC, I discovered my passion for technology and transformed my life.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-300"></div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-[#EDEFFB] to-[#FEE5E5] p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-center text-[#1D3178]">Let’s Connect</h2>
            <p className="mt-4 text-center text-gray-600 text-lg">
              Feel free to explore my work or reach out to collaborate.
            </p>

            <div className="mt-6 flex justify-center gap-6 text-3xl text-[#1D3178]">
              {/* Gmail */}
              <a
                href="mailto:hamzaahmed122333@gmail.com"
                className="hover:text-[#FB2E86] transition duration-300"
              >
                <FaEnvelope />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/ItsHamzas"
                className="hover:text-[#FB2E86] transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/invites/contact/?igsh=bkpmeguhdi8o&utm_content=kjpgejs"
                className="hover:text-[#FB2E86] transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/hamza-asif-52b7b8329?utm"
                className="hover:text-[#FB2E86] transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreatorPage;
