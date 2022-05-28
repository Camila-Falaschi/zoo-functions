const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se a função é case sensitive', () => {
    expect(handlerElephants('LOCATION')).toBeNull();
    expect(handlerElephants('Location')).toBeNull();
    expect(handlerElephants('POPULARITY')).toBeNull();
    expect(handlerElephants('Popularity')).toBeNull();
    expect(handlerElephants('AVAILABILITY')).toBeNull();
    expect(handlerElephants('Availability')).toBeNull();
  });
  it('Verifica a função computeData', () => {
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names')).toContain('Jefferson');
    expect(handlerElephants('names')).toContain('Ilana');
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    // Verifica a idade média dos elefantes
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Verifica as informações retornadas ao chamar as chaves', () => {
    // Verifica a localização dos elefantes
    expect(handlerElephants('location')).toBe('NW');
    // Verifica a popularidade dos elefantes
    expect(handlerElephants('popularity')).toBe(5);
    // Verifica os dias em que os elefantes estão disponíveis
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Verifica se não foi passado um parâmetro ou se ele não é uma string', () => {
    expect(handlerElephants()).toBeUndefined();
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(5)).toBe(expected);
    expect(handlerElephants([])).toBe(expected);
    expect(handlerElephants({})).toBe(expected);
  });
});
