import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

const formatDate = date => {
  if (!date) return null;
  return format(parseISO(date), "d'/'MM'/'yyyy", {
    locale: pt,
  });
};

export default formatDate;
