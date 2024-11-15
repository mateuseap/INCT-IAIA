import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Institutions() {
  const brazilianInstitutions = [
    "Universidade Federal de Pernambuco",
    "Pontifícia Universidade Católica do Rio Grande do Sul",
    "Pontifícia Universidade Católica do Rio de Janeiro",
    "Universidade Estadual de Campinas",
    "Universidade Federal de São Carlos",
    "Universidade Federal de São Paulo",
    "Universidade Federal de Uberlândia",
    "Universidade Federal Rural de Pernambuco",
    "Universidade de Pernambuco",
    "Universidade Federal de Mato Grosso do Sul",
    "Instituto Tecnológico de Aeronáutica",
    "Universidade Estadual Paulista Júlio de Mesquita Filho",
    "Universidade de São Paulo",
    "Universidade Federal do ABC",
    "Universidade Federal do Amazonas",
    "Universidade Federal do Paraná",
    "Universidade Federal do Rio de Janeiro",
    "Universidade de Brasília",
    "Universidade Federal de Goiás",
    "Universidade Federal de Minas Gerais",
    "Universidade Federal do Rio Grande do Norte",
    "Universidade Federal do Pará",
    "Universidade Federal Fluminense",
    "Universidade Tecnológica Federal do Paraná",
  ];

  const internationalInstitutions = [
    "University of Porto",
    "Rensselaer Polytechnic Institute",
    "The Ohio State University",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="mt-16 isolate sm:mb-8 mb-14 flex-grow">
        <div className="relative pt-14">
          <div className="py-4 sm:py-8 text-center">
            <h1 className="lg:text-4xl text-2xl font-bold tracking-tight text-gray-900">
              Institutions
            </h1>
          </div>
          <div className="flex flex-col justify-center mx-auto max-w-4xl gap-y-6 px-4">
            <div className="flex flex-col gap-y-2 text-left">
              <h1 className="lg:text-xl text-lg font-bold tracking-tight">
                Brazilian Institutions
              </h1>
              <div className="flex flex-col gap-y-2 ml-4">
                {brazilianInstitutions.map((institution) => (
                  <span key={institution} className="flex items-center gap-x-1">
                    <span className="text-xl font-bold">•</span>
                    {institution}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-y-2 text-left">
              <h1 className="lg:text-xl text-lg font-bold tracking-tight">
                International Institutions
              </h1>
              <div className="flex flex-col gap-y-2 ml-4">
                {internationalInstitutions.map((institution) => (
                  <span key={institution} className="flex items-center gap-x-1">
                    <span className="text-xl font-bold">•</span>
                    {institution}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
