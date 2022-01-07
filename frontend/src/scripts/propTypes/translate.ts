import PropTypes from 'prop-types';

/**
 * Translate proptypes definitions.
 */
const translateProptypes = PropTypes.func;

export default translateProptypes;

export type Translate = (label: string, values?: Record<string, string>) => string;
