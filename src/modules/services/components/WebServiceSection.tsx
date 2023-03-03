import React from "react";
import websitesCreations from "@assets/images/websites-creations.jpg";
import Box from "@components/Box";

export default function WebServiceSection() {
  return (
    <section className="bg-gray-50">
      <div className="grid grid-cols-1  gap-y-10 gap-x-16 lg:grid-cols-2 m-container py-20">
        <Box variant="fade" as="article" className="border-t py-10">
          <h2 className="text-4xl font-medium tracking-tight text-gray-900">
            WEB DEVELOPMENT
          </h2>
          <div className="mt-4 text-gray-500 font-extralight grid gap-6">
            <p>
              We design and develop industry-leading websites that define
              categories and position our clients to succeed in an
              interconnected world.
            </p>
            <p>
              Shopify, Headless CMS, eCommerce… we cover the gamut. We have a
              lot of experience doing it and, most importantly, we build them
              the right way; scaleable, fast, and with your users’ needs and
              expectations top of mind.
            </p>
            <ul className="list-disc pl-10">
              <li>Strategy</li>
              <li>UX + UI Design</li>
              <li>Usability Testing</li>
              <li>Technical Planning</li>
              <li>Development</li>
              <li>Quality Assurance</li>
              <li>Ongoing Iteration</li>
            </ul>
          </div>
        </Box>
        <Box variant="fade" as="article" className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
          <img
            src={websitesCreations}
            alt=""
            className="object-cover object-center w-full h-full"
          />
        </Box>
      </div>
    </section>
  );
}
