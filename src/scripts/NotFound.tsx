import React from 'react';
import { NavLink } from 'react-router-dom';
import lost from 'images/lost.jpg';

export default function NotFound(): JSX.Element {
  return (
    <div data-layout="--grid">
      <div
        className="wrap"
        data-spe="--screen-height--with-background"
        data-layout="--flex--justify-center--items-end"
      >
        <div className="image">
          <img
            src={lost}
            alt="Not Found"
            width="100%"
          />
        </div>
        <div
          className="wrap"
          data-spe="--padded"
        >
          <div
            className="container"
            data-layout="--grid--justify-center"
            data-gap="--4"
            data-spe="--txt-center"
          >
            <h1>not found</h1>
            <div data-layout="--flex--justify-center">
              <NavLink to="/" data-bt>
                Go home
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
