function AutoFill() {
  const names = [
    "Vivan",
    "James",
    "Array",
    "John",
    "George",
    "Kelechi",
    "Queency",
    "Tech",
    "Gender",
    "Johnrick",
    "Ugochi",
    "Age",
    "Autofill",
    "MrV",
    "MrA",
    "mrQ",
    "Peace",
    "Angel",
    "Micheal",
    "Top",
  ];
  const ages = [
    12, 23, 45, 43, 19, 56, 78, 34, 56, 78, 15, 34, 67, 30, 71, 56, 27, 28, 63,
    60,
  ];

  const genders = [
    "Male",
    "Male",
    "Male",
    "Male",
    "Male",
    "Male",
    "Male",
    "Male",
    "Male",
    "Male",
    "Male",
    "Male",
    "Male",
    "Male",
    "Male",
    "Male",
    "Male",
    "Male",
    "Male",
    "Male",
  ];

  const tablebody = document.getElementById("tablebody");

  tablebody.innerHTML = "";

  for (let i = 0; i < 20; i++) {
    const row = `
    <tr>
        <td>
        <td>${names[i]}</td>
        <td>${ages[i]}</td>
        <td>${genders[i]}</td>
      </tr>
    
    
    `;
    tablebody.innerHTML += row;
  }
}
