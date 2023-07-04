import React from 'react';

type Props = {
  background: string;
  animate?: boolean;
}
const defaultProps = {
  animate: true,
};

export default function Hero(props: Props): JSX.Element {
  const { background, animate } = props;
  return (
    <div
      className={`wrap hero${(!animate) ? ' hero--fast' : ''}`}
      data-spe="--screen-height--with-background"
      data-layout="--flex--justify-center--items-center"
    >
      <div className="image hero__back">
        <img
          src={background}
          alt="Digivore background"
          width="100%"
        />
      </div>

      <div
        className="hero__front"
        data-spe="--txt-center"
        data-layout="--grid"
        data-gap="--2"
      >
        <div
          className="hero__front__title"
          data-layout="--flex"
          data-gap="--2--m3--l4"
        >
          {'Digivore'.split('').map((letter, index) => (
            <span
              // eslint-disable-next-line react/no-array-index-key
              key={`${letter}-${index}`}
            >
              {letter}
            </span>
          ))}

        </div>
        <div
          className="hero__front__subtitle"
          data-layout="--flex"
          data-gap
          data-flex="--wrap"
        >
          {'Frontend senior developer'.split('').map((letter, index) => (
            <span
              // eslint-disable-next-line react/no-array-index-key
              key={`${letter}-${index}`}
            >
              {(letter === ' ') ? ' ' : letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

Hero.defaultProps = defaultProps;
