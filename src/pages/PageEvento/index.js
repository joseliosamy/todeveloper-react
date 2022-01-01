/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { PageEventArea } from './styled';
import { Delimiters } from '../../components/MainComponets';
import { Link } from 'react-router-dom';

function PageEvent() {
  const [events, setEvents] = useState([]);
  const [eps, setEps] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const [currentEp, setCurrentEp] = useState(0);

  useEffect(() => {
    let path = window.location.pathname;
    let idPage = null;
    fetch('https://api-todeveloper.vercel.app/events')
      .then((res) => res.json())
      .then((json) => {
        //Percorrendo o array e definindo qual será o indice do array utilizado para atribuir valor ao state "events"
        json.map((item) => {
          if (path === item.redirectURL) {
            idPage = item.id;
            if (idPage === item.id) {
              setEvents(item);
              setEps(item.eps);
            }
          }
        });
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(currentEp);
  console.log(eps);

  return (
    <Delimiters>
      <PageEventArea>
        <div className="path">
          <Link to="/eventos">Eventos</Link>

          <div>
            <svg
              height="24"
              id="Layer_1"
              version="1.1"
              fill=""
              viewBox="0 0 512 512"
              width="24"
            >
              <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
            </svg>
          </div>

          <div>{events.eventName}</div>
        </div>

        <div className="eventWrapper">
          <div className="video">
            {currentEp === 0 ? (
              eps.map((item, index) => {
                if (index === 0) {
                  return (
                    <iframe
                      key={index}
                      src={
                        'https://www.youtube.com/embed/' +
                        item.epURL +
                        '?rel=0&amp;showinfo=0&autoplay=1&&color=white'
                      }
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  );
                }
              })
            ) : (
              <iframe
                src={
                  'https://www.youtube.com/embed/' +
                  eps[currentEp].epURL +
                  '?rel=0&amp;showinfo=0&autoplay=1&&color=white'
                }
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>

          <div className="sidebarPlaylist">
            <div className="wrapperPlaylist">
              <div className="playlist">
                <div className="info">
                  <h2>{events.eventName}</h2>
                  <small>{eps.length} aulas</small>
                </div>

                <div className="eps">
                  <a href="#">
                    <svg
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" x2="12" y1="15" y2="3" />
                    </svg>
                    Material Complementar
                  </a>
                  {eps.map((item, index) => {
                    return (
                      <a
                        key={index}
                        id={index}
                        onClick={(e) => {
                          setCurrentEp(e.target.id);
                        }}
                      >
                        {item.epName}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageEventArea>
    </Delimiters>
  );
}
export default PageEvent;
