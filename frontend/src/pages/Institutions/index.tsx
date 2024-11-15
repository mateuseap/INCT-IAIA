import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import InstitutionCard from "../../components/InstitutionCard";
import { IInstitutionCard } from "../../types";

export default function Institutions() {
  const hostInstitutions: Array<IInstitutionCard> = [
    {
      name: "Universidade Federal de Pernambuco",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Bras%C3%A3o_da_UFPE.png/800px-Bras%C3%A3o_da_UFPE.png",
      website: "https://www.ufpe.br/",
    },
    {
      name: "Centro de Informática da UFPE (CIn)",
      logoUrl: "https://www.cin.ufpe.br/~imprensa/marcacinpng/VC",
      website: "https://portal.cin.ufpe.br/",
    },
  ];

  const brazilianInstitutions: Array<IInstitutionCard> = [
    {
      name: "Pontifícia Universidade Católica do Rio Grande do Sul",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Bras%C3%A3o_PUCRS.png/800px-Bras%C3%A3o_PUCRS.png",
      website: "https://portal.pucrs.br/ensino-e-pesquisa/",
    },
    {
      name: "Pontifícia Universidade Católica do Rio de Janeiro",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/pt/9/9d/PUC-Rio-Logo.jpg",
      website: "https://www.puc-rio.br/index.html",
    },
    {
      name: "Universidade Estadual de Campinas",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/pt/thumb/b/b2/UNICAMP_logo.svg/800px-UNICAMP_logo.svg.png",
      website: "https://unicamp.br/",
    },
    {
      name: "Universidade Federal de São Carlos",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Ufscar-logo.png/1280px-Ufscar-logo.png",
      website: "https://www.ufscar.br/",
    },
    {
      name: "Universidade Federal de São Paulo",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/pt/2/29/Logotipo_UNIFESP.png",
      website: "https://portal.unifesp.br/",
    },
    {
      name: "Universidade Federal de Uberlândia",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/76/UFU_LOGO.png",
      website: "https://ufu.br/",
    },
    {
      name: "Universidade Federal Rural de Pernambuco",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/83/Bras%C3%A3o_UFRPE.png",
      website: "https://www.ufrpe.br/",
    },
    {
      name: "Universidade de Pernambuco",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/13/Brasao-upe.png",
      website: "https://www.upe.br/",
    },
    {
      name: "Universidade Federal de Mato Grosso do Sul",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Logo-UFMS.jpg/800px-Logo-UFMS.jpg",
      website: "https://www.ufms.br/",
    },
    {
      name: "Instituto Tecnológico de Aeronáutica",
      logoUrl: "https://upload.wikimedia.org/wikipedia/pt/1/1f/ITA_logo.png",
      website: "http://www.ita.br/",
    },
    {
      name: "Universidade Estadual Paulista Júlio de Mesquita Filho",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Logo_Unesp.svg/1920px-Logo_Unesp.svg.png",
      website: "https://www2.unesp.br/",
    },
    {
      name: "Universidade de São Paulo",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Webysther_20170627_-_Bras%C3%A3o_USP.svg/800px-Webysther_20170627_-_Bras%C3%A3o_USP.svg.png",
      website: "https://www5.usp.br/",
    },
    {
      name: "Universidade Federal do ABC",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Ufabc_logo.png/800px-Ufabc_logo.png",
      website: "https://www.ufabc.edu.br/",
    },
    {
      name: "Universidade Federal do Amazonas",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/df/Brasao_ufam_2011.jpg",
      website: "https://www.ufam.edu.br/",
    },
    {
      name: "Universidade Federal do Paraná",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Logo_oficial_da_UFPR_%28fundo_branco%29.svg/1280px-Logo_oficial_da_UFPR_%28fundo_branco%29.svg.png",
      website: "https://ufpr.br/",
    },
    {
      name: "Universidade Federal do Rio de Janeiro",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/UFRJ_logo.svg/1920px-UFRJ_logo.svg.png",
      website: "https://ufrj.br/",
    },
    {
      name: "Universidade de Brasília",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Webysther_20160322_-_Logo_UnB_%28sem_texto%29.svg/1920px-Webysther_20160322_-_Logo_UnB_%28sem_texto%29.svg.png",
      website: "https://www.unb.br/",
    },
    {
      name: "Universidade Federal de Goiás",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/UFG_logo.svg/800px-UFG_logo.svg.png",
      website: "https://ufg.br/",
    },
    {
      name: "Universidade Federal de Minas Gerais",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/2/2d/Symbolfumg.jpg",
      website: "https://ufmg.br/",
    },
    {
      name: "Universidade Federal do Rio Grande do Norte",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Brasao_UFRN.PNG/800px-Brasao_UFRN.PNG",
      website: "https://www.ufrn.br/",
    },
    {
      name: "Universidade Federal do Pará",
      logoUrl: "https://upload.wikimedia.org/wikipedia/pt/a/a2/Brasao_UFPA.jpg",
      website: "https://ufpa.br/",
    },
    {
      name: "Universidade Federal Fluminense",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/pt/4/47/UFF_bras%C3%A3o.png",
      website: "https://www.uff.br/",
    },
    {
      name: "Universidade Tecnológica Federal do Paraná",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/UTFPR_logo.svg/1920px-UTFPR_logo.svg.png",
      website: "https://www.utfpr.edu.br/",
    },
  ];

  const internationalInstitutions: Array<IInstitutionCard> = [
    {
      name: "University of Porto",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Logoup.jpg/1920px-Logoup.jpg",
      website: "https://www.up.pt/portal/pt/",
    },
    {
      name: "Rensselaer Polytechnic Institute",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Rensselaer_Polytechnic_Institute_coat_of_arms.svg/800px-Rensselaer_Polytechnic_Institute_coat_of_arms.svg.png",
      website: "https://www.rpi.edu/",
    },
    {
      name: "The Ohio State University",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Ohio_State_University_seal.svg/1024px-Ohio_State_University_seal.svg.png",
      website: "https://www.osu.edu/",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="my-16 isolate sm:mb-8 flex-grow">
        <div className="relative pt-14">
          <div className="py-4 sm:py-8 text-center">
            <h1 className="lg:text-4xl text-2xl font-bold tracking-tight text-gray-900">
              Institutions
            </h1>
          </div>
          <div className="flex flex-col justify-center mx-auto max-w-6xl gap-y-6 px-4">
            <div className="flex flex-col gap-y-4 text-left">
              <h1 className="lg:text-xl text-lg font-bold tracking-tight">
                Host Institution
              </h1>
              <span className="text-justify">
                The{" "}
                <span className="font-bold">
                  Federal University of Pernambuco (UFPE)
                </span>
                , located in Brazil, is a leading educational institution known
                for its research and academic excellence. As part of UFPE, the{" "}
                <span className="font-bold">Center of Informatics (CIn)</span>{" "}
                stands out as a hub for innovation and research in information
                technology and artificial intelligence. CIn is renowned for its
                cutting-edge work in AI, computer science, and engineering, and
                serves as the home for the{" "}
                <span className="font-bold">
                  Brazilian National Institute of Artificial Intelligence (IAIA)
                </span>
                .
              </span>
              <div className="flex items-center justify-center gap-6 mb-4 flex-col lg:flex-row px-12">
                {hostInstitutions.map((institution) => (
                  <InstitutionCard
                    key={institution.name}
                    name={institution.name}
                    logoUrl={institution.logoUrl}
                    website={institution.website}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-y-4 text-left">
              <h1 className="lg:text-xl text-lg font-bold tracking-tight">
                Brazilian Institutions
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-12">
                {brazilianInstitutions.map((institution) => (
                  <InstitutionCard
                    key={institution.name}
                    name={institution.name}
                    logoUrl={institution.logoUrl}
                    website={institution.website}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-y-4 text-left">
              <h1 className="lg:text-xl text-lg font-bold tracking-tight">
                International Institutions
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-12">
                {internationalInstitutions.map((institution) => (
                  <InstitutionCard
                    key={institution.name}
                    name={institution.name}
                    logoUrl={institution.logoUrl}
                    website={institution.website}
                  />
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
