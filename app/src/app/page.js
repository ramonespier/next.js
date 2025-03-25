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
      { id: 1, nome: 'Nightmare', reproducoes: 'Reproduções (YouTube): 224Mi', url: 'https://soundcloud.com/deathbatnews/avenged-sevenfold-nightmare-demo?si=061d0378a3a140838651b04ef539a676&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
      { id: 2, nome: 'So Far Away', reproducoes: 'Reproduções (YouTube): 338Mi', url: 'https://soundcloud.com/vengeance-tm/avenged-sevenfold-so-far-away?si=2fb9822c3c154e7cbe59682cd42e3189&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
      { id: 3, nome: 'Natural Born Killer', reproducoes: 'Reproduções (YouTube): 19Mi', url: 'https://soundcloud.com/avengedsevenfold/natural-born-killer-1?si=1d521cd18e7c4b25985474682bdd3e64&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
      { id: 4, nome: 'Save Me', reproducoes: 'Reproduções (YouTube): 18Mi', url: 'https://soundcloud.com/madog-heula/save-me-avenged-sevenfold?si=274de757a68f40ae9ec2c6609ccae6bc&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
      { id: 5, nome: 'Welcome to The Family', reproducoes: 'Reproduções (YouTube): 12Mi', url: 'https://soundcloud.com/sylviamulya/avenged-sevenfold-welcome-to?si=178fe7f4442c49488408109e8c4cc03e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
    ],
    bg: '/nightmare.jpg',
    cores: {
      text: 'text-red-200',
      border: 'border-gray-700'
    }
  },
  {
    id: 2,
    album: [
      { id: 1, nome: 'The Stage', reproducoes: 'Reproduções (YouTube): 52Mi', url: 'https://soundcloud.com/avengedsevenfold/the-stage?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
      { id: 3, nome: 'Paradigm', reproducoes: 'Reproduções (YouTube): 546k', url: 'https://soundcloud.com/matthew-peterson-327860268/avenged-sevenfold-paradigm-live-1?si=9cf33504be9f48f6b2645c7707acd369&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
      { id: 4, nome: 'Sunny Disposition', reproducoes: 'Reproduções (YouTube): 441k', url: 'https://soundcloud.com/user748792471/sunny-disposition-guitar-solo?si=4daf30ec33b5427f8470e0138d78b192&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
      { id: 5, nome: 'Fermi Paradox', reproducoes: 'Reproduções (YouTube): 22k', url: 'https://soundcloud.com/esr4/avenged-sevenfold-fermi?si=b1178802b13c46b38e364519024d440c&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
      { id: 2, nome: 'Roman Sky', reproducoes: 'Reproduções (YouTube): 1,6Mi', url: 'https://soundcloud.com/nicolas-p-991437515/avanged-sevenfold-roman-sky-live-vocal-cover?si=93e9f0ea44b247668bc953d041190d31&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
    ],
    bg: '/stage.webp',// gradient
    font: 'Rubik Glitch',
    cores: {
      text: 'text-white',
      border: 'border-blue-200'
    },
  },
  {
    id: 3,
    album: [
      { id: 3, nome: 'Beast and The Harlot', reproducoes: 'Reproduções (YouTube): 60Mi', url: 'https://soundcloud.com/adrianazurin/beast-and-the-harlot-avenged?si=c06bd39173af4c33be819f7c3ddd5134&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
      { id: 4, nome: 'Blinded in Chains', reproducoes: 'Reproduções (YouTube): 13Mi', url: 'https://soundcloud.com/avengedsevenfold/blinded-in-chains?si=333d906596174a00a6dd75fed28fa015&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
      { id: 1, nome: 'Bat Country', reproducoes: 'Reproduções (YouTube): 73Mi', url: 'https://soundcloud.com/shahrin-mathers/avenged-sevenfold-bat-country?si=6adf6a156eba48e3b556b59b0854d6eb&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
      { id: 2, nome: 'Seize the Day', reproducoes: 'Reproduções (YouTube): 72Mi', url: 'https://soundcloud.com/marcelobe/seize-the-day-acoustic-avenged?si=6763eab32174447f9028c308748dcab2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
      { id: 5, nome: 'Trashed and Scattered', reproducoes: 'Reproduções (YouTube): 4,7Mi', url: 'https://soundcloud.com/avengedsevenfold/trashed-and-scattered?si=e95bf37697324e89a2630c475d8886d8&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
    ],
    bg: '/cityofevil.jpg',
    cores: {
      text: 'text-amber-100',
      border: 'border-amber-800',

    },
  },
  {
    id: 4,
    album: [
      { id: 2, nome: 'Shepherd of Fire', reproducoes: 'Reproduções (YouTube): 85Mi', url: 'https://soundcloud.com/yarel-falcon-figueroa/avenged-sevenfold-shepherd-of?si=1b8bb5ba63bb4d34bfe58c621f6a4a30&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
      { id: 1, nome: 'Hail to the King', reproducoes: 'Reproduções (YouTube): 303Mi', url: 'https://soundcloud.com/maniacsau/hail-to-the-king?si=01ef989cfa5145d9b302c11e529baed3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
      { id: 3, nome: 'This Means War', reproducoes: 'Reproduções (YouTube): 59Mi', url: 'https://soundcloud.com/luizfelipe_099/avenged-sevenfold-this-means?si=8b89e9ea8a64460a917e410e9764feff&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
      { id: 4, nome: 'Acid Rain', reproducoes: 'Reproduções (YouTube): 7Mi', url: 'https://soundcloud.com/marcos-ruan-9/avenged-sevenfold-acid-rain-live-from-hollywood?si=7d06746c015344a4a1d91067c8c4e71a&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
      { id: 5, nome: 'Requiem', reproducoes: 'Reproduções (YouTube): 6,7Mi', url: 'https://soundcloud.com/avengedsevenfold/requiem?si=4ffa0d41080747c2bbecc8df1bef3146&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
    ],
    bg: '/hail.jpg',
    cores: {
      text: 'text-gray-300',
      border: 'border-gray-500'
    }
  },
  {
    id: 5,
    album: [
      { id: 5, nome: 'Walking The Fallen', reproducoes: 'Reproduções (YouTube): 2,5Mi', url: 'https://soundcloud.com/avengedsevenfold/waking-the-fallen-resurrected?si=55e1254173a84929bf6ec65bea56865b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
      { id: 1, nome: 'Unholy Confessions', reproducoes: 'Reproduções (YouTube): 25Mi', url: 'https://soundcloud.com/pale_666/unholy-confessions-avenged-sevenfold-cover-instrument?si=0de112ab493e4ec6a147e8a780f1de8e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
      { id: 2, nome: 'Chapter Four', reproducoes: 'Reproduções (YouTube): 8,7Mi', url: 'https://soundcloud.com/user-215632980/sets/avenged-sevenfold-chapter-four?si=3a38a4ef1a114f409dd9423aec7190bf&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
      { id: 3, nome: 'Remenissions', reproducoes: 'Reproduções (YouTube): 5,3Mi', url: 'https://soundcloud.com/avengedsevenfold/remenissions-demo?si=413922b41bed414391ae08e0eaf3337c&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
      { id: 4, nome: 'Desecrate Through Reverence', reproducoes: 'Reproduções (YouTube): 2,9Mi', url: 'https://soundcloud.com/avengedsevenfold/desecrate-through-reverence-1?si=2f84d949618547e6895515bf4c7f127f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
    ],
    bg: '/walking.webp',
    cores: {
      text: 'text-white',
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

      <div className='flex justify-center'>
        <div className={`album ${albumSelecionado ? 'show' : ''} w-3/5 m-9 border-2 rounded-2xl ${cores.border} text-lg transition`}>
          {listaAlbuns.filter(item => item.id === album).map((listaAlbum) => (
            <motion.div
              key={listaAlbum.id}
              initial={{ opacity: 0, y: 20 }} // initial = estado inicial (invisível e levemente deslocado).
              animate={{ opacity: 1, y: 0 }} // animate	= estado final (visível e na posição natural).
              exit={{ opacity: 0, y: -20 }} // exit =	animação de saída (fade-out + deslocamento).
              transition={{ delay: 0.1 }} // transition	= controla duração e tipo de animação (ex: type: "spring" para efeito elástico).
              className={`${cores.text} bg-cover bg-center p-10 flex flex-col gap-5 w-full rounded-2xl
          
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
      </div>
    </>
  );
}
