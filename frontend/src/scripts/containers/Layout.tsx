import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import translatePropTypes from 'scripts/propTypes/translate';

const propTypes = {
  children: PropTypes.element,
  translate: translatePropTypes.isRequired,
};

const defaultProps = {
  children: null,
};

/**
 * App router.
 */
export default function Layout(props: InferProps<typeof propTypes>): JSX.Element {
  const { translate, children } = props;

  return (
    <>
      <header className="header">
        <img src="static/images/digivore-logo.svg" alt="digivore logo" width="48" />
      </header>
      <div className="page">
        {children}
      </div>
      <footer className="footer">
        Footer
      </footer>
    </>
  );
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;
Layout.displayName = 'Layout';
