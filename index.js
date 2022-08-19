// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby' ]

  const findMatching = (s,n) => s.filter(s => s.toLowerCase() === n.toLowerCase());

  const fuzzyMatch = (s,n) => s.filter(s =>s.charAt(0)=== n.charAt(0) );

  const matchName =(s,n) => s.filter(s=> s.name === n);