function filtrarCarrosPorAno(carros, anoMinimo) {
    return carros.filter(carro => carro.ano > anoMinimo);
  }
  
  // Exemplo de uso:
  const carros = [
    { marca: 'hyudai', modelo: 'Creta', ano: 2024 },
    { marca: 'Volkswagen', modelo: 'Fusca', ano: 1976 },
    { marca: 'renalt', modelo: 'Duster', ano: 2020 },
    { marca: 'Chevrolet', modelo: 'Chevette', ano: 1990 }
  ];
  
  const anoMinimo = 2020;
  const carrosFiltrados = filtrarCarrosPorAno(carros, anoMinimo);
  
  console.log(carrosFiltrados);
  