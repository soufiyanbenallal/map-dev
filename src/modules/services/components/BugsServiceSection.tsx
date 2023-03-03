import React from "react";
import bugs from "@assets/images/bugs.jpg";
import Box from "@components/Box";

export default function BugsServiceSection() {
  return (
    <section className="bg-gray-50">
      <div className="grid grid-cols-1  gap-y-10 gap-x-16 lg:grid-cols-2 m-container py-20">
        <Box variant="fade" as="article" className="border-t py-10">
          <h2 className="text-4xl font-medium tracking-tight text-gray-900">
           Bugs Fixes
          </h2>
          <div className="mt-4 text-gray-500 font-extralight grid gap-6">
            <p>
              We like to identify and fix bugs where they are.
            </p>
            <p>
              My site does not work anymore, We provide a wide service of fixes in a lot of programing languages and frameworks.
            </p>
            <ul className="list-disc pl-10">
              <li>Laravel bugs fixes</li>
              <li>Nodejs bugs fixes</li>
              <li>Databases (All SQLs databases, mongodb)</li>
              <li>Mobile react native app fixes</li>
              <li>React, vue, angular or pure javascript</li>
              <li>UX + UI improvment or fix</li>
              <li>Make your slow website run more smoothly</li>
            </ul>
          </div>
        </Box>
        <Box variant="fade" as="article" className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
          <img
            src={bugs}
            alt="bugs"
            className="object-cover object-center w-full h-full"
          />
        </Box>
      </div>
    </section>
  );
}
