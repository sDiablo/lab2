function f4(p, q, r) {
return (p === q && r !== p);  
}

 // Створити таблицю істинності
  const table = [
    { p: false, q: false, r: false, f4: false },
    { p: false, q: false, r: true, f4: true },
    { p: false, q: true, r: false, f4: true },
    { p: false, q: true, r: true, f4: false },
    { p: true, q: false, r: false, f4: true },
    { p: true, q: false, r: true, f4: false },
    { p: true, q: true, r: false, f4: false },
    { p: true, q: true, r: true, f4: true },
  ];

  // Вивести таблицю
  console.table(table);



module.exports=table