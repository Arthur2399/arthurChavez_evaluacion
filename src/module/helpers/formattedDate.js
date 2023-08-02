import { parseISO, format } from 'date-fns';
import esLocale from 'date-fns/locale/es'

export const  formattedDate = ( date = '') => {
    
    const parseDate = parseISO(date);
    const dateChange = format(parseDate, 'dd \'de\' MMMM \'de\' yyyy', { locale: esLocale });
  
    return dateChange;
  }