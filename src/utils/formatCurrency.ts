type Props = {
  value:number;
}

const formatCurrency = ({value}: Props) => {
  return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
};

export default formatCurrency;
