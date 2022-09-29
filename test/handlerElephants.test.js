const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  // Para o argumento count deve retornar o número inteiro 4;
  it('Para o argumento count deve retornar o número inteiro 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  // Para o argumento names deve retornar um array de nomes que possui o nome Jefferson;
  it('Para o argumento names deve retornar um array de nomes que possui o nome Jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });

  // Para o argumento averageAge deve retornar um número próximo a 10.5;
  it('Para o argumento averageAge deve retornar um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

  // Para o argumento location deve retornar a string NW;
  it('Para o argumento location deve retornar a string NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  // Para o argumento popularity deve retornar um número igual ou maior a 5;
  // Para o argumento availability deve retornar um array de dias da semana que não contém Monday;
  // Não passando argumentos a função deve retornar undefined;
  it('Não passando argumentos a função deve retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  // Passando por argumento um objeto vazio ({}) deve retornar a string 'Parâmetro inválido, é necessário uma string';
  it('Passando por argumento um objeto vazio ({}) deve retornar a string: Parâmetro inválido, é necessário uma string', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });

  // Passada uma string que não contempla uma funcionalidade deve retornar null.
  it('Passada uma string que não contempla uma funcionalidade deve retornar null.', () => {
    expect(handlerElephants('unrecParam')).toBeNull();
  });
});
