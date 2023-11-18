import { getProducts } from '@/api/getProducts';
import axios from 'axios';

jest.mock('axios');

describe('getProducts', () => {
  it('should fetch products from the API', async () => {
    const mockData = {
      results: [
        { id: '1', title: 'Product 1' },
        { id: '2', title: 'Product 2' },
      ],
    };

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({ data: mockData });

    const query = 'laptop';
    const products = await getProducts({ query });

    expect(products).toEqual(mockData.results);
  });

  it('should handle API errors', async () => {
    const errorMessage = 'Network error';

    const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => {}); // Espia console.error

    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(new Error(errorMessage));

    const query = 'laptop';
    await getProducts({ query });

    expect(console.error).toHaveBeenCalledWith('Erro ao buscar dados da API:', expect.any(Error));

    consoleErrorMock.mockRestore(); 
  });
});
