"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// AnimatePresence = Gerencia animações quando componentes entram/saem da tela.
// mode="wait" = Espera a animação de saída terminar antes da entrada.
import './page.css';
const albuns = [
  { id: 1, foto: "/nightmare.jpg" },
  { id: 2, foto: "/stage.jpg" },
  { id: 3, foto: "/cityofevil.jpg" },
  { id: 4, foto: "/hail.jpg" },
  { id: 5, foto: "/walking.webp" }
]

const listaAlbuns = [
  {
    id: 1,
    album: [
      { id: 1, nome: 'Nightmare', reproducoes: 'Reproduções (YouTube): 224Mi' },
      { id: 2, nome: 'So Far Away', reproducoes: 'Reproduções (YouTube): 338Mi' },
      { id: 3, nome: 'Natural Born Killer', reproducoes: 'Reproduções (YouTube): 19Mi' },
      { id: 4, nome: 'Save Me', reproducoes: 'Reproduções (YouTube): 18Mi' },
      { id: 5, nome: 'Welcome to The Family', reproducoes: 'Reproduções (YouTube): 12Mi' },
    ],
    bg: 'bg-gray-800',
    cores: {
      text: 'text-red-600',
      border: 'border-red-700'
    }
  },
  {
    id: 2,
    album: [
      { id: 1, nome: 'The Stage', reproducoes: 'Reproduções (YouTube): 52Mi', url: 'https://soundcloud.com/avengedsevenfold/the-stage?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
      { id: 3, nome: 'Paradigm', reproducoes: 'Reproduções (YouTube): 546k' },
      { id: 4, nome: 'Sunny Disposition', reproducoes: 'Reproduções (YouTube): 441k' },
      { id: 2, nome: 'God Damn', reproducoes: 'Reproduções (YouTube): 15Mi' },
      { id: 5, nome: 'Welcome to The Family', reproducoes: 'Reproduções (YouTube): 345k' },
    ],
    bg: '/stage.webp',// gradient
    font: 'Rubik Glitch',
    cores: {
      text: 'text-white',
      border: 'border-blue-100'
    },
  },
  {
    id: 3,
    album: [
      { id: 3, nome: 'Beast and The Harlot', reproducoes: 'Reproduções (YouTube): 60Mi' },
      { id: 4, nome: 'Blinded in Chains', reproducoes: 'Reproduções (YouTube): 13Mi' },
      { id: 1, nome: 'Bat Country', reproducoes: 'Reproduções (YouTube): 73Mi' },
      { id: 2, nome: 'Seize the Day', reproducoes: 'Reproduções (YouTube): 72Mi' },
      { id: 5, nome: 'Trashed and Scattered', reproducoes: 'Reproduções (YouTube): 4,7Mi' },
    ],
    bg: 'bg-amber-950',
    cores: {
      text: 'text-amber-100',
      border: 'border-amber-700',

    },
  },
  {
    id: 4,
    album: [
      { id: 2, nome: 'Shepherd of Fire', reproducoes: 'Reproduções (YouTube): 85Mi' },
      { id: 1, nome: 'Hail to the King', reproducoes: 'Reproduções (YouTube): 303Mi' },
      { id: 3, nome: 'This Means War', reproducoes: 'Reproduções (YouTube): 59Mi' },
      { id: 4, nome: 'Acid Rain', reproducoes: 'Reproduções (YouTube): 7Mi' },
      { id: 5, nome: 'Requiem', reproducoes: 'Reproduções (YouTube): 6,7Mi' },
    ],
    bg: 'bg-red-950',
    cores: {
      text: 'text-gray-300',
      border: 'border-gray-600'
    }
  },
  {
    id: 5,
    album: [
      { id: 5, nome: 'Walking The Fallen', reproducoes: 'Reproduções (YouTube): 2,5Mi' },
      { id: 1, nome: 'Unholy Confessions', reproducoes: 'Reproduções (YouTube): 25Mi' },
      { id: 2, nome: 'Chapter Four', reproducoes: 'Reproduções (YouTube): 8,7Mi' },
      { id: 3, nome: 'Remenissions', reproducoes: 'Reproduções (YouTube): 5,3Mi' },
      { id: 4, nome: 'Desecrate Through Reverence', reproducoes: 'Reproduções (YouTube): 2,9Mi' },
    ],
    bg: 'bg-gray-800',
    cores: {
      text: 'text-red-600',
      border: 'border-red-700'
    }
  },
]




export default function Home() {
  const [album, setAlbum] = useState(0)
  const [currentTrackUrl, setCurrentTrackUrl] = useState(null)
  function handleSwitchAlbuns(id) {
    setAlbum(id)
    setCurrentTrackUrl(null) // resetar musica ao mudar de album
  }

  function handlePlayTrack(url) {
    setCurrentTrackUrl(url)
  }

  const albumSelecionado = listaAlbuns.find(item => item.id === album);
  // const musicaSelecionada = listaAlbuns.find(musica => musica.album === track);
  const cores = albumSelecionado?.cores || { // verifica se listaAlbuns existe antes de tentar acessar a class .cores
    text: "text-white",
    border: "border-gray-600"
  };
  return (
    <>
      <div className="flex justify-center mt-5">
        <div className="albunsAvenged">
          {albuns.map((item) => (
            <img
              key={item.id}
              src={item.foto}
              className='cursor-pointer'
              onClick={() => handleSwitchAlbuns(item.id)}
              alt={`Álbum ${item.id}`}
            />
          ))}
        </div>
      </div>

      <div className={`album ${albumSelecionado ? 'show' : ''} w-3/5 m-9 border ${cores.border} text-lg transition`}>
        {listaAlbuns.filter(item => item.id === album).map((listaAlbum) => (
          <motion.div
            key={listaAlbum.id}
            initial={{ opacity: 0, y: 20 }} // initial = estado inicial (invisível e levemente deslocado).
            animate={{ opacity: 1, y: 0 }} // animate	= estado final (visível e na posição natural).
            exit={{ opacity: 0, y: -20 }} // exit =	animação de saída (fade-out + deslocamento).
            transition={{ delay: 0.1 }} // transition	= controla duração e tipo de animação (ex: type: "spring" para efeito elástico).
            className={`${cores.text} bg-cover bg-center
          
          `}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${listaAlbum.bg})`,
            }}>

            {currentTrackUrl && (
              <div className='flex justify-center mb-6'>
                <iframe
                  width="80%"
                  height="108px"
                  src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(currentTrackUrl)}`}
                  frameBorder="0"
                />
              </div>
            )}

            <ul>
              {listaAlbum.album.sort((a, b) => a.id - b.id).map((lista) => (
                // a funcao .sort() foi usada para montar a lista por ordem de id de forma crescente. Caso fosse decresente seria .sort((a,b) => b.id - a.id).
                <motion.li
                  key={lista.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                // onClick={handleSwitchMusicas()}
                >
                  <div className='w-full p-10 hover:bg-black/45 transition cursor-pointer' onClick={() => lista.url && handlePlayTrack(lista.url)}>{lista.nome} / {lista.reproducoes}</div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </>
  );
}
