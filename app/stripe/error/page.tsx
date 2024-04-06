import { Button } from "@/components/ui/button";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 mx-auto text-red-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 100 16 8 8 0 000-16zM4 10a6 6 0 1112 0 6 6 0 01-12 0z"
              clipRule="evenodd"
            />
          </svg>
          <h2 className="text-2xl font-bold text-center text-red-500">
            Error!
          </h2>
          <p className="text-gray-600 mt-2 text-center">
            Oops! Something went wrong.
          </p>
          <div className="mt-4 flex justify-center">
            <Button asChild className="mt-5 bg-red-600 hover:bg-red-500">
              <Link href="/">Go Back</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
