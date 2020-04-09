import React, { useMemo} from 'react';

import formatDate from '~/util/formatDate';

import { Container, Description, Date } from './styles';

export default function ItemListProblem({dataProblem}) {

  const dateFormated = useMemo(() => {
    return formatDate(dataProblem.createdAt)
  }, [dataProblem]);

  return (
    <Container>
        <Description>{dataProblem.description}</Description>
        <Date>{dateFormated}</Date>
    </Container>
  );
}
