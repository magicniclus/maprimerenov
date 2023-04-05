import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  const navigation = {
    solutions: [
      { name: "Accueil", href: "/" },
      { name: "Simuler votre éligibilité", href: "/simulateur" },
      { name: "Mon Espace", href: "/connexion" },
      { name: "Espace partenaire", href: "/entreprise" },
    ],
    company: [
      { name: "À propos", href: "/" },
      { name: "Articles", href: "/articles" },
      { name: "Entreprises", href: "/entreprise" },
    ],
    legal: [
      { name: "Nous contacter", href: "/contact" },
      { name: "Politique de confidentialité", href: "/politique" },
    ],
    social: [
      {
        name: "Facebook",
        href: "#",
        icon: () => (
          <Image
            priority
            src="/maprimerenov.jpg"
            alt="maprimerenov"
            width="150px"
            height="50px"
            objectFit="cover"
          />
        ),
      },
      {
        name: "Facebook",
        href: "#",
        icon: () => (
          <Image
            priority
            src="/cee.jpg"
            alt="cee"
            width="150px"
            height="50px"
            objectFit="cover"
          />
        ),
      },
      {
        name: "Facebook",
        href: "#",
        icon: () => (
          <Image
            priority
            src="/francerelance.jpg"
            alt="francerelance"
            width="50px"
            height="50px"
            objectFit="cover"
          />
        ),
      },
      {
        name: "Facebook",
        href: "#",
        icon: () => (
          <Image
            priority
            src="/rge.jpg"
            alt="rge"
            width="40px"
            height="50px"
            objectFit="cover"
          />
        ),
      },
    ],
  };
  return (
    <footer
      className="bg-clearBlue max-w-[2000px] mx-auto"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto px-6 pb-8 pt-20 sm:pt-24 lg:px-20 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-3 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Nos services
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Le site
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Légal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 xl:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-white">
              S'inscrire à notre new's letter
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              Recevez toute notre actualité sur MaPrimeRenov'
            </p>
            <form className="mt-6 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Entrez votre email
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                placeholder="Enter your email"
              />
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <Link href={"/contact"}>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#74c011",
                    }}
                  >
                    S'inscrire
                  </Button>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-gray-400"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; 2023 maprimerenov-info, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
