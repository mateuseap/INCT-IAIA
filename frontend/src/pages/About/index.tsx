import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="my-16 isolate sm:mb-8 flex-grow">
        <div className="relative pt-14">
          <div className="py-4 sm:py-8 text-center">
            <h1 className="lg:text-4xl text-2xl font-bold tracking-tight text-gray-900">
              Brazilian National Institute
              <br />
              of Artificial Intelligence
            </h1>
          </div>
          <div className="flex flex-col justify-center mx-auto max-w-4xl gap-y-6 px-4">
            <div className="flex flex-col gap-y-2 text-left">
              <h1 className="lg:text-xl text-lg font-bold tracking-tight">
                Our Vision
              </h1>
              <span className="text-justify">
                To lead in research and innovation in Artificial Intelligence
                (AI), promoting responsible deployment that aligns seamlessly
                with human values and societal needs.
              </span>
            </div>
            <div className="flex flex-col gap-y-2 text-left">
              <h1 className="lg:text-xl text-lg font-bold tracking-tight">
                Our Mission
              </h1>
              <div className="flex flex-col gap-y-2 ml-4">
                <div className="flex items-start gap-x-2 text-justify">
                  <span className="text-xl font-bold leading-none">•</span>
                  Address the crucial challenges of integrating AI into various
                  aspects of life, ensuring transparency, privacy, security,
                  responsibility, reliability, fairness, and explainability.
                </div>
                <div className="flex items-start gap-x-2 text-justify">
                  <span className="text-xl font-bold leading-none">•</span>
                  Advocate for responsible AI by tackling technical challenges
                  such as complex data management, resilience against noise and
                  biases, and advancing innovative model architectures.
                </div>
                <div className="flex items-start gap-x-2 text-justify">
                  <span className="text-xl font-bold leading-none">•</span>
                  Highlight the importance of continuous data collection,
                  integration, and professional training, ensuring readiness to
                  navigate AI's rapidly evolving landscape.
                </div>
                <div className="flex items-start gap-x-2 text-justify">
                  <span className="text-xl font-bold leading-none">•</span>
                  Bridge the gap between theoretical AI models and practical
                  applications, maximizing societal benefits and minimizing
                  risks.
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 text-left">
              <h1 className="lg:text-xl text-lg font-bold tracking-tight">
                Our Values
              </h1>
              <div className="flex flex-col gap-y-2 ml-4">
                <div className="flex items-start gap-x-2 text-justify">
                  <span className="text-xl font-bold leading-none">•</span>
                  <span>
                    <span className="font-bold">Innovation:</span> Continuously
                    pushing the boundaries of AI research.
                  </span>
                </div>
                <div className="flex items-start gap-x-2 text-justify">
                  <span className="text-xl font-bold leading-none">•</span>
                  <span>
                    <span className="font-bold">Integrity:</span> Upholding
                    transparency and honesty in every endeavor.
                  </span>
                </div>
                <div className="flex items-start gap-x-2 text-justify">
                  <span className="text-xl font-bold leading-none">•</span>
                  <span>
                    <span className="font-bold">Collaboration:</span> Engaging
                    diverse stakeholders, from government to the public, to
                    ensure AI benefits everyone.
                  </span>
                </div>
                <div className="flex items-start gap-x-2 text-justify">
                  <span className="text-xl font-bold leading-none">•</span>
                  <span>
                    <span className="font-bold">Excellence:</span> Striving for
                    the highest standards in research, training, and
                    application.
                  </span>
                </div>
                <div className="flex items-start gap-x-2 text-justify">
                  <span className="text-xl font-bold leading-none">•</span>
                  <span>
                    <span className="font-bold">Responsibility:</span>{" "}
                    Prioritizing the ethical considerations and societal impacts
                    of AI.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-2 text-left">
              <h1 className="lg:text-xl text-lg font-bold tracking-tight">
                Our History
              </h1>
              <span className="text-justify">
                Founded in 2023, the National Institute of Artificial
                Intelligence (IAIA) has rapidly become a leading force in AI.
                Headquartered in Brazil, IAIA collaborates globally with
                governments, industries, and institutions to foster the safe and
                beneficial use of AI. Built on pioneering research and
                innovation, our legacy is committed to shaping an AI-driven
                future that serves humanity.
              </span>
            </div>
            <div className="flex flex-col gap-y-2 text-left">
              <h1 className="lg:text-xl text-lg font-bold tracking-tight">
                Join Us
              </h1>
              <span className="text-justify">
                Whether you're a student eager to explore AI, a professional
                seeking collaboration, or a curious individual wanting to learn
                about the technology reshaping our world, IAIA welcomes you.
              </span>
            </div>
            <div className="flex flex-col gap-y-4 text-left">
              <h1 className="lg:text-xl text-lg font-bold tracking-tight">
                Governing Committee
              </h1>
              <div className="flex flex-col gap-y-2 ml-4">
                <div className="flex items-start gap-x-2 text-justify">
                  <span className="text-xl font-bold leading-none">•</span>
                  <span className="flex flex-col">
                    Teresa Ludermir
                    <i>(UFPE, Coordinator)</i>
                  </span>
                </div>
                <div className="flex items-start gap-x-2 text-justify">
                  <span className="text-xl font-bold leading-none">•</span>
                  <span className="flex flex-col">
                    Cleber Zanchettin
                    <i>(UFPE, Executive Coordinator)</i>
                  </span>
                </div>
                <div className="flex items-start gap-x-2 text-justify">
                  <span className="text-xl font-bold leading-none">•</span>
                  <span className="flex flex-col">
                    Wagner Meira
                    <i>(UFMG, Vice-Coordinator)</i>
                  </span>
                </div>
                <div className="flex items-start gap-x-2 text-justify">
                  <span className="text-xl font-bold leading-none">•</span>
                  <span className="flex flex-col">
                    André Carvalho
                    <i>(USP, Vice-Coordinator)</i>
                  </span>
                </div>
                <div className="flex items-start gap-x-2 text-justify">
                  <span className="text-xl font-bold leading-none">•</span>
                  <span className="flex flex-col">
                    Altigran Silva
                    <i>(UFAM)</i>
                  </span>
                </div>
                <div className="flex items-start gap-x-2 text-justify">
                  <span className="text-xl font-bold leading-none">•</span>
                  <span className="flex flex-col">
                    Carmelo Bastos Filho
                    <i>(UPE)</i>
                  </span>
                </div>
                <div className="flex items-start gap-x-2 text-justify">
                  <span className="text-xl font-bold leading-none">•</span>
                  <span className="flex flex-col">
                    Francisco Carvalho
                    <i>(UFPE)</i>
                  </span>
                </div>
                <div className="flex items-start gap-x-2 text-justify">
                  <span className="text-xl font-bold leading-none">•</span>
                  <span className="flex flex-col">
                    Marley Vellasco
                    <i>(PUC-RJ)</i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
