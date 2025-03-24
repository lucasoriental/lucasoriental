import React, { useState } from "react";
import { Check, Phone, Mail, MapPin, Copy, ExternalLink } from "lucide-react";
import {
  SiInstagram,
  SiFacebook,
  SiBehance,
  SiGithub,
} from "@icons-pack/react-simple-icons";

import MeshBackground from "../home/meshBackground";

const Contacts = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 5000); // Reset after 2 seconds
  };

  return (
    <section className="relative w-screen mx-auto pt-24 pb-24">
      <MeshBackground />
      <div>
        <div className="mr-auto ml-auto w-[90%] max-w-4xl">
          <p className="text-4xl font-extrabold drop-shadow-xl text-center text-white mb-5 select-none lg:text-start lg:w-[20em]">
            Entre em Contacto comigo através das plataformas a seguir
          </p>
          <p className="text-lg font-medium text text-zinc-100 mb-7 text-center select-none lg:text-start lg:w-[40em]">
            Com uma abordagem estratégica e personalizada, ajudo a transformar a
            presença online da tua marca, desde o desenvolvimento até ao
            marketing digital.
          </p>
        </div>
        <div className="flex flex-col gap-1 border border-zinc-100 w-[90%] mr-auto max-w-4xl ml-auto justify-between text-white">
          <button
            className="flex items-center bg-red-800 bg-opacity-50 p-5"
            onClick={() => handleCopy("+351 938 626 826")}
          >
            <Phone />
            <div className="flex flex-row items-center">
              <p className="ml-2">+351 938 626 826</p>
              {copied === "+351 938 626 826" ? (
                <Check className="w-4 text-green-500 ml-2" />
              ) : (
                <Copy className="w-3 cursor-pointer ml-2" />
              )}
            </div>
          </button>

          <button
            className="flex items-center bg-red-800 bg-opacity-50 p-5"
            onClick={() => handleCopy("lucasoriental@gmail.com")}
          >
            <Mail />
            <p className="ml-2">lucasoriental@gmail.com</p>
            <div className="flex flex-row items-center">
              {copied === "lucasoriental@gmail.com" ? (
                <Check className="w-4 text-green-500 ml-2" />
              ) : (
                <Copy className="w-3 cursor-pointer ml-2" />
              )}
            </div>
          </button>
          <div className="flex items-center bg-red-800 bg-opacity-50 p-5">
            <MapPin />
            <p className="ml-2">Figueira da Foz (Coimbra) - Portugal</p>
          </div>
          <a
            className="flex items-center bg-red-800 bg-opacity-50 p-5"
            href="https://www.instagram.com/lucasorientaldev"
            target="_blank"
          >
            <SiInstagram />
            <p className="ml-2">@lucasorientaldev</p>
            <ExternalLink className="w-3 ml-2 cursor-pointer" />
          </a>
          <div className="flex items-center bg-red-800 bg-opacity-50 p-5">
            <SiFacebook />
            <p className="ml-2">A criar</p>
          </div>
          <a
            className="flex items-center bg-red-800 bg-opacity-50 p-5"
            href="https://behance.net/lucasoriental"
            target="_blank"
          >
            <SiBehance />
            <p className="ml-2">@lucasoriental</p>
            <ExternalLink className="w-3 ml-2 cursor-pointer" />
          </a>
          <a
            className="flex items-center bg-red-800 bg-opacity-50 p-5"
            href="https://github.com/lucasoriental"
            target="_blank"
          >
            <SiGithub />
            <p className="ml-2">@lucasoriental</p>
            <ExternalLink className="w-3 ml-2 cursor-pointer" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
