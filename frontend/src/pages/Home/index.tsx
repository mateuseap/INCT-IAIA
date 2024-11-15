import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="my-16 flex flex-col items-center justify-center flex-grow isolate sm:mb-8">
        <div className="relative pt-14">
          <div className="py-8 sm:py-14">
            <div className="mx-auto max-w-7xl px-8">
              <div className="mx-auto max-w-4xl text-center">
                <h1 className="lg:text-6xl text-4xl font-bold tracking-tight text-gray-900">
                  Brazilian National Institute
                  <br />
                  of Artificial Intelligence
                </h1>
                <p className="mt-8 lg:text-xl text-base text-gray-600 text-justify max-w-3xl mx-auto">
                  The National Institute of Artificial Intelligence (IAIA)
                  focuses on aligning AI development with human values,
                  emphasizing transparency, privacy, security, fairness, and
                  trustworthiness. It tackles technical challenges like data
                  diversity, robustness against noise and bias, and model
                  innovation. Beyond technology, IAIA prioritizes responsible
                  data practices and continuous professional training to advance
                  AI that benefits society while minimizing risks.
                  <p className="mt-6 lg:text-xl text-base text-gray-600">
                    <span className="font-bold">IAIA</span> is an effective
                    research collaboration focused on Responsible AI.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
