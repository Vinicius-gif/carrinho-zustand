// formatCurrency.test.js

import formatCurrency from "@/utils/formatCurrency";

describe('formatCurrency', () => {
  it('deve formatar um número para moeda brasileira', () => {
    const props = {
      value: 1234.56,
    };

    const result = formatCurrency(props);

    // Espera-se que o resultado seja uma string no formato de moeda brasileira
    expect(result.replace(/\s/g, '')).toBe("R$1.234,56");
  });
});
