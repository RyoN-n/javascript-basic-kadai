const checkDate = () =>{
  const date = new Date();
  const date_1 = [
    date.getFullYear(),
    date.getMonth()+1,
    date.getDate(),
  ];

  console.log(date_1[0]+"年"+date_1[1]+"月"+date_1[2]+"日");
}

checkDate();
