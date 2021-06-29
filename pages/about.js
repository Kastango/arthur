import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';


export default function Home() {
  return (
    <div>
        <Head>
          <title>Arthur Sosnowski</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-off-white h-screen">
          <div className="flex justify-between p-8">
            <ul className="flex space-x-5 font-medium" >
              <a href="https://www.behance.net/ArthurSosnowski">projects</a>   
              <Link href="/"><a>home</a></Link>
              <a href="https://drive.google.com/file/d/17LAq6Pgof09QMV8Yjhn5s645kBic29KS/view?usp=sharing">resume</a>
            </ul>
            <ul className="flex space-x-5" >
              <a href="https://www.instagram.com/arthur.ber7/">
                <img className="h-6" src='/instagram-symbol.svg' alt="instagram"/>
              </a>
              <a href="https://www.linkedin.com/in/arthur-sosnowski">
                <img className="h-6" src='/linkedin-sign.svg' alt="linkedin" />
              </a>
            </ul>
          </div>
          <div className="flex justify-center self-center mt-28 space-x-8">
            <Image className="rounded-t-full overflow-hidden flex relative" draggable="false" src='/photo.jpg' alt="Picture of the author" width={350} height={520} />
            <div className="flex flex-col items-start content-end space-y-6">
              <img className="h-10 mb-4 mt-8" src='/about.svg' draggable="false" alt="about"/>
              <p className="max-w-prose">Sou um Designer com certificação em UX pela Google e com trabalho premiado pela NASA. O conhecimento me move, amo descobrir coisas novas e ver a infinidade de coisas que nem terei a oportunidade de conhecer, isso me motiva a sempre estar atrás de novas tecnologias e habilidades nas quais eu possa utilizar como apoio ferramental para entender as 
pessoas de uma forma criativa. </p>
              <p className="max-w-prose">    Durante o ensino médio tive a oportunidade de participar da equipe de robótica de meu colégio. A partir daí me encantei pelo âmbito criativo na programação e pelo design de produto. No mesmo período aprendi a manipular imagens e vídeos com auxílio de softwares como hobby e isso foi essencial para que conquistasse meu cargo atual.</p>
              <p className="max-w-prose">    Neste momento estou cursando Engenharia de Software na UTFPR e estudando e praticando cotidianamente UI/UX com projetos pessoais.</p>
            </div>
          </div>
        </main>
    </div>
  );
}