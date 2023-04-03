import React from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const stats = [
  {
    id: 1,
    name: "Dossiers accordés",
    value: "644 000",
  },
  {
    id: 2,
    name: "d'économies réalisées sur vos travaux et factures d'énergie",
    value: "70%",
  },
  {
    id: 3,
    value: "20 000€",
    name: "Subvention accordée et encadrée par l'État",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Cards = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Cards;
