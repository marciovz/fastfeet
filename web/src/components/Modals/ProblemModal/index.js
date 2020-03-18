import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function ProblemModal({ show, selectedProblem, onClick }) {
  const [showModal, setShowModal] = useState(false);
  const [problem, setProblem] = useState(null);
  useEffect(() => {
    setShowModal(show);
  }, [show]);

  useEffect(() => {
    setProblem(selectedProblem);
  }, [selectedProblem]);

  return (
    <Container onClick={onClick} showModal={showModal}>
      <div>
        <h1>Visualizar problema</h1>
        <p>{problem && problem.description}</p>
      </div>
    </Container>
  );
}

ProblemModal.defaultProps = {
  show: false,
  selectedProblem: null,
};

ProblemModal.propTypes = {
  show: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  selectedProblem: PropTypes.shape({
    description: PropTypes.string,
  }),
};
