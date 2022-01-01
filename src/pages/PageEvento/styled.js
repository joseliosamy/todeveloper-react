import styled from 'styled-components';

import ui from '../../helpers/ui.json';

const { colorSchemma } = ui;

export const PageEventArea = styled.div`
  width: 100%;
  .path {
    display: flex;
    padding: 35px 0;
    a:nth-child(1) {
      color: #acacac;
      font-weight: 600;
      &:hover {
        color: #fff;
      }
    }
    div:nth-child(2) {
      fill: #acacac;
    }
    div:nth-child(3) {
      color: #fff;
    }
  }
  .eventWrapper {
    width: 100%;
    max-width: 1050px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    .video {
      position: relative;
      padding-bottom: 36.25%;
      flex: 1 1 0%;
      background-color: #111111;
      img {
        width: 100%;
        max-height: 500px;
        object-fit: cover;
      }
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        border: none;
      }
    }
    .sidebarPlaylist {
      min-width: 20rem;
      margin-left: 35px;
      border-radius: 5px;
      background-color: #111111;
      position: relative;
      overflow: hidden;

      .wrapperPlaylist {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        overflow-y: auto;
        ::-webkit-scrollbar {
          width: 5px;
        }
        ::-webkit-scrollbar-thumb {
          background: #444444;
          border-radius: 10px;
        }

        .playlist {
          flex: 1 1 0%;
          overflow-y: auto;
          .info {
            background-color: #66666655;
            border-radius: 5px 5px 0 0;
            padding: 10px 25px;
            h2 {
              color: #fff;
              font-size: 1.1rem;
            }
          }
          .eps {
            display: flex;
            height: 100%;
            flex-direction: column;
            padding: 10px;
            a {
              color: ${colorSchemma.colorTerciary};
              font-size: 0.9rem;
              font-weight: 500;
              padding: 7px 0;
              cursor: pointer;
              &:hover {
                color: #fff;
              }
              &:first-child {
                display: flex;
                align-items: center;
                color: #fff;
                justify-content: center;
                margin-bottom: 10px;
                &:hover {
                  background-color: #ffffff11;
                  border-radius: 8px;
                }
                svg {
                  margin-right: 5px;
                }
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 900px) {
    .eventWrapper {
      flex-direction: column;
      .video {
        padding-bottom: 56.25%;
      }
      .sidebarPlaylist {
        width: 80%;
        height: 20rem;
        margin: 30px auto 20px;
        min-width: 200px;
        .wrapperPlaylist {
          .playlist {
            .info {
              text-align: center;
              background-color: #66666655;
            }
            .eps {
              a {
                padding: 15px;
                margin: 0;
              }
            }
          }
        }
      }
    }
  }
`;
