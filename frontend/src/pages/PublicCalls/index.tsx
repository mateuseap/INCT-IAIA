import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function Institutions() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="my-16 isolate sm:mb-8 flex-grow">
        <div className="relative pt-14">
          <div className="py-4 sm:py-8 text-center">
            <h1 className="lg:text-4xl text-2xl font-bold tracking-tight text-gray-900">
              Public Calls
            </h1>
          </div>
          <div className="flex flex-col justify-center mx-auto max-w-4xl gap-y-4 px-4">
            <span className="lg:text-xl text-lg font-bold tracking-tight">
              Call INCT IAIA- 01/2023
            </span>
            <span className="lg:text-xl text-lg text-justify">
              The National Institute of Artificial Intelligence (IAIA) announces
              a call for support for scientific and technological research
              within the activities supported by the INCT, aiming to strengthen
              collaboration among its members and advance Artificial
              Intelligence in Brazil.
            </span>
            <div className="font-bold lg:text-lg text-base flex flex-col gap-y-2">
              <a
                href="https://drive.google.com/file/d/1nflwsFrqdBPeZsYUow3sVUW9KfLzBsN4/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex gap-x-1 items-center">
                  <ArrowUpRightIcon className="w-4 h-4" />
                  Public Call
                </span>
              </a>
              <a href="#">
                <span className="flex gap-x-1 items-center">
                  <ArrowUpRightIcon className="w-4 h-4" />
                  Final Result
                </span>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
