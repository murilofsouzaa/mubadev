import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const BeyondWorkSection: React.FC = () => {
  const { t, language } = useLanguage();

  const hobbies = [
    {
      id: 'study',
      title: t.beyondWork.studyTitle,
      description: t.beyondWork.studyText,
    },
    {
      id: 'exercise',
      title: t.beyondWork.exerciseTitle,
      description: t.beyondWork.exerciseText,
    },
    {
      id: 'gaming',
      title: t.beyondWork.gamingTitle,
      description: t.beyondWork.gamingText,
    },
    {
      id: 'literature',
      title: t.beyondWork.literatureTitle,
      description: t.beyondWork.literatureText,
    },
    {
      id: 'cinema',
      title: t.beyondWork.cinemaTitle,
      description: t.beyondWork.cinemaText,
    },
    {
      id: 'editing',
      title: language === 'pt' ? 'Edições de Vídeo e Foto' : 'Video & Photo Editing',
      description: language === 'pt' ? (
        <>
          Apesar de fazer anos que não mexo com isso, edição foi uma das coisas em que mais depositei meu tempo, principalmente na pandemia. Sei usar After Effects e Photoshop. O link para meu {' '}
          <a
            href="https://muriloportfolioedicao.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 font-semibold underline underline-offset-4 hover:text-red-500 transition-colors inline-block"
          >
            portfólio de edição
          </a>
        </>
      ) : (
        <>
          Even though it has been years since I worked with this, editing was one of the things I invested the most time in, especially during the pandemic. I know how to use After Effects and Photoshop. The link to my {' '}
          <a
            href="https://muriloportfolioedicao.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 font-semibold underline underline-offset-4 hover:text-red-500 transition-colors inline-block"
          >
            portfolio of edits
          </a>
        </>
      ),
    },
  ];

  return (
    <section id="depois-do-trabalho" className="pt-16 sm:pt-24 pb-20 sm:pb-32 max-w-4xl mx-auto select-none">
      {/* Pure, Minimalist Editorial List (No icons, no tags/labels above) */}
      <div className="space-y-12 sm:space-y-16">
        {hobbies.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="pt-8 sm:pt-10 border-t border-zinc-800/80 first:border-t-0 first:pt-0"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
              
              {/* Left Column: Pure Title */}
              <div className="md:col-span-5">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>
              </div>

              {/* Right Column: Description */}
              <div className="md:col-span-7">
                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
