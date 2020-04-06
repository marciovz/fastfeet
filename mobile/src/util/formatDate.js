import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

const formatDate = date => {
  try {
    return format(parseISO(date), 'dd/MM/yyyy', {
      locale: pt,
    });
  } catch (err) {
    return '- - / - - / - -';
  }
};
export default formatDate;