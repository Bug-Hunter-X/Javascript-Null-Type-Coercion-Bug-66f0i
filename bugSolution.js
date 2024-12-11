function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Corrected: return 0 instead of null
  }
  return a + b; 
}