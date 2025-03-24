"use client"
import { useState } from 'react';
import './page.css';

const albuns = [
  { id: 1, foto: "/nightmare.jpg" },
  { id: 2, foto: "/stage.jpg" },
  { id: 3, foto: "/cityofevil.jpg" },
  { id: 4, foto: "/hail.jpg" }
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
    ]
  }
]



export default function Home() {
  // const [album, setAlbum] = useState(0)
  // function handleSwitchAlbuns() {
  //   setAlbum(album)



  // }
  return (
    <>
      <div className="flex justify-center mt-5">
        <div className="albunsAvenged">
          {albuns.map((album) => (
            <img key={album.id} src={album.foto}></img>
          ))}
        </div>
      </div>

      <div className='infoAlbum m-9 w-2/4 border border-white'>
        {listaAlbuns.map((listaAlbum) => (
          <div key={listaAlbum.id}>
            <ul>
              {listaAlbum.album.map((lista) => (
                <li key={lista.id}>
                  <div className='w-full p-10 border '>{lista.nome} / {lista.reproducoes}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>

  )
}
