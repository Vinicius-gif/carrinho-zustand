import axios from 'axios';

type Props = {
  query: string;
}

export const getProducts = async ({query}: Props) => {
  try {
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    return response.data.results;
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
  }
};
