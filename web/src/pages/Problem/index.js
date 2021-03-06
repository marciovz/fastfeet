import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { MdVisibility, MdDelete } from 'react-icons/md';

import api from '~/services/api';

import PageListHeader from '~/components/PageList/PageListHeader';
import MenuActions from '~/components/PageList/MenuActions';
import Actions from '~/components/PageList/MenuActions/Actions';
import ProblemModal from '~/components/Modals/ProblemModal';

import {
  PageListContainer,
  PageListContent,
  TitleList,
  ContentList,
  LineList,
} from '~/components/PageList/styles';

export default function Problem() {
  const [problems, setProblems] = useState([]);
  const [problemModal, setProblemModal] = useState({
    show: false,
    delivery: null,
  });
  const gridProblem = "1fr 3fr 1fr";

  useEffect(() => {
    async function loadProblems() {
      try {
        const response = await api.get('/deliveries/problem/pendent');
        setProblems(response.data);
      } catch (err) {
        toast.error("Não foi possível acessar os dados no servidor");
      }
    }
    loadProblems();
  }, []);

  async function handleCancelDelivery(problem) {
    try {
      if (!window.confirm('Deseja cancelar a entrega?')) return;
      await api.put(`/deliveries/${problem.delivery.id}/problem/cancel`);
      const newList = problems.filter(
        item => item.delivery.id !== problem.delivery.id
      );
      setProblems(newList);
      toast.success('Encomenda cancelada com sucesso!');
    } catch (err) {
      toast.error('Não foi possível cancelar a encomenda!');
    }
  }

  function handleShowModal(problem) {
    setProblemModal({ show: true, problem });
  }

  function handleRemoveModal() {
    setProblemModal({ show: false, problem: null });
  }

  return (
    <PageListContainer>
      <PageListHeader title="Problemas na entrega" />
      <PageListContent>
        <TitleList grid={gridProblem}>
          <h1>Encomenda</h1>
          <h1>Problema</h1>
          <h1>Ações</h1>
        </TitleList>
        <ContentList>
          {problems.map(problem => (
            <LineList key={problem.id} grid={gridProblem}>
              <p>{problem.delivery.id}</p>
              <p>{problem.description}</p>
              <MenuActions>
                <Actions onClick={() => { handleShowModal(problem) }}>
                  <MdVisibility color="#8e5be8" />
                  Visualizar
                </Actions>
                <Actions onClick={() => { handleCancelDelivery(problem) }}>
                  <MdDelete color="#DE3B3B" />
                  Cancelar Encomenda
                </Actions>
              </MenuActions>
            </LineList>
          ))}
        </ContentList>
      </PageListContent>
      <ProblemModal
        show={problemModal.show}
        onClick={handleRemoveModal}
        selectedProblem={problemModal.problem}
      />
    </PageListContainer>
  );
}
