import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';

const propTypes = {
  translate: PropTypes.func.isRequired,
};

/**
 * Home page.
 */
export default function Design(props: InferProps<typeof propTypes>): JSX.Element {
  const { translate } = props;

  return (
    <div data-layout="--grid" data-gap="--4">
      <h1>Coucou la famille</h1>
      <h2>Coucou la famille</h2>
      <h3>Coucou la famille</h3>
      <h4>Coucou la famille</h4>
      <h5>Coucou la famille</h5>
      <h6>Coucou la famille</h6>
      <p>Ceci est un paragraphe</p>
      <a href="/">Link</a>
    </div>
  );
}

Design.propTypes = propTypes;
Design.defaultProps = {};
Design.displayName = 'Home';
