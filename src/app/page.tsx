import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Mobile } from "./components/images/mobile";

export default function Home() {
  return (
    <div>
      <Mobile/>
      {/* desktop view  */}
      <div className="hidden md:flex  md:h-full">
        {/* left div  */}
        <div className="w-1/5 bg-blue-400">
          <div className="pb-12 flex flex-col justify-center items-center h-screen">
            <div>
              <Image
                src={require("./components/images/rafay3.jpg")}
                alt="rafay"
                width={280}
                height={280}
                className=" rounded-md items-center m-5"
              />
              <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl text-black text-center m-4">
                ABDUL RAFAY
              </h1>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-white text-center m-2">
                Web Developer
              </h3>
              <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight text-white text-center m-2">
                0313-2354942
              </h4>
            </div>
            {/* social media  */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              {/* whatsapp  */}
              <div>
                <Link href={"https://wa.me/923132354942"} target="_blank">
                  <FaWhatsapp className="text-3xl text-green-600" />
                </Link>
              </div>
              {/* linkedin  */}
              <div>
                <Link
                  href={
                    "https://www.linkedin.com/in/abdul-rafay-073187278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  }
                  target="_blank"
                >
                  <FaLinkedin className="text-3xl text-blue-600" />
                </Link>
              </div>
              {/* github  */}
              <div>
                <Link
                  href={"https://github.com/abdulrafay-webdev"}
                  target="_blank"
                >
                  <FaGithub className="text-3xl text-purple-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* right div  */}
        <div className="w-4/5 h-full bg-blue-100">
          <section className="text-black body-font overflow-hidden">
            <div className="container px-5 py-10 mx-auto">
              <div className="-my-8 divide-y-2 divide-gray-100">
                {/* data  */}
                {/* info  */}
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex md:flex-col">
                    <span className="font-extrabold title-font text-green-500 text-3xl">
                      Personal INFO
                    </span>
                  </div>
                  {/* personal info*/}
                  <div className="md:flex-grow text-lg">
                    <h1 className="mb-1"><b>NAME :</b> Abdul Rafay</h1>
                    <h1 className="mb-1"><b>FATHER NAME :</b> Muhammad Zhid</h1>
                    <h1 className="mb-1"><b>RELIGION :</b> Islam</h1>
                    <h1 className="mb-1"><b>NATIONALITY :</b> Pakistani</h1>
                    <h1 className="mb-1"><b>DATE OF BIRTH :</b> 25-October-2005</h1>
                  </div>
                </div>
                {/* Education */}
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex md:flex-col">
                    <span className="font-extrabold title-font text-green-500 text-3xl">
                      Education
                    </span>
                  </div>
                  {/* Matriculation  */}
                  <div>
                  <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-1">
                      MATRICULATION :
                    </h2>
                    <p className="leading-relaxed mb-2">I am Completing My Matriculation From Anglo Model School in 2022 and secured A1 Grade with 85%</p>
                  </div>
                  {/* Intermediate */}
                  <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-1">
                      INTERMEDIATE :
                    </h2>
                    <p className="leading-relaxed mb-2">I am Completing My Intermediate From Govt National College in 2024 and secured A Grade with 78%</p>
                  </div>
                  {/* Graduation */}
                  <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-1">
                      UNIVERSITY :
                    </h2>
                    <p className="leading-relaxed mb-2">I am Completing My Graduation From ETC University in 2028 and secured 4.5 GDP</p>
                  </div>
                  </div>
                </div>
                {/* skills */}
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex md:flex-col">
                    <span className="font-extrabold title-font text-green-500 text-3xl">
                      SKILLS
                    </span>
                  </div>
                  {/* lanuages*/}
                  <div className="md:flex-grow text-lg">
                    <h1><b>HTML :</b> Proficient in writing semantic HTML, ensuring accessibility, SEO optimization, and creating well-structured layouts for responsive web applications.</h1>
                    <h1><b><br />CSS :</b> Skilled in responsive design, Flexbox, Grid, animations, and using CSS frameworks like Bootstrap and Tailwind for styling</h1>
                    <h1><b><br />TYPESCRIPT :</b> Skilled in writing clean, type-safe code, enhancing JavaScript applications with static typing, and ensuring better maintainability, debugging, and scalability in web development projects.</h1>
                    <h1><b><br />NEXT JS :</b> Experienced in building fast, scalable web applications using Next.js. Proficient in server-side rendering (SSR), static site generation (SSG), and optimizing performance for SEO-friendly websites.</h1>
                    <h1><b><br />WORDPRESS :</b> Proficient in creating, customizing, and managing WordPress websites. Skilled in theme and plugin development, optimizing site performance, and implementing SEO best practices for enhanced visibility.</h1>
                  </div>
                </div>
                {/* work experience  */}
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex md:flex-col">
                    <span className="font-extrabold title-font text-green-500 text-3xl">
                      WORK EXPERIENCE
                    </span>
                  </div>
                  {/* jobo*/}
                  <div className="md:flex-grow text-lg">
                    <h1><b>Web Developer In CREATIVE CLICKS :</b>Developed and maintained responsive web applications using HTML, CSS, JavaScript, and TypeScript.Implemented Next.js for server-side rendering and static site generation, improving site performance and SEO.Customized WordPress themes and plugins to meet client requirements, enhancing user experience and functionality.Collaborated with cross-functional teams to define project scope and deliver high-quality results within deadlines.Utilized version control systems like Git for code management and collaboration.</h1>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
