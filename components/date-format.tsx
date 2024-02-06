import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface DateProps {
  date: string;
}

const FormatDate = ({ date }: DateProps) => {
  return format(new Date(date), "dd MMM yyyy", {
    locale: ptBR,
  });
};

const FormatFullDate = ({ date }: DateProps) => {
  return format(new Date(date), "dd 'de' MMMM 'de' yyyy'", {
    locale: ptBR,
  });
};

const FormatFullTimeStamp = ({ date }: DateProps) => {
  return format(new Date(date), "dd 'de' MMMM 'de' yyyy', às' H:mm", {
    locale: ptBR,
  });
};

const FormatMonthYear = (date: string) => {
  return format(new Date(date), "MMM yyyy");
};

export { FormatDate, FormatFullDate, FormatFullTimeStamp, FormatMonthYear };
