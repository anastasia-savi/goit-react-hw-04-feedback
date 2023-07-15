import React from 'react';
import css from './Section.module.css';
import PropTypes from 'prop-types';

export default class Section extends React.Component {
  render() {
    return (
      <section>
        <h2 className={css.header}>{this.props.title}</h2>
        {this.props.children}
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
