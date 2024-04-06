import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const SuccessPage = () => {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 mx-auto text-green-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.293 3.293a1 1 0 011.414 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L5 13.586l10.293-10.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <h2 className="text-2xl font-bold text-center text-green-500">
            Payment Successful!
          </h2>
          <p className="text-gray-600 mt-2 text-center">
            Thank you for your purchase.
          </p>
          <div className="mt-4  flex justify-center">
            <Button asChild className="mt-5 bg-green-600 hover:bg-green-500">
              <Link href={"/"}>Go Back</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
