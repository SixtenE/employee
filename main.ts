interface IEmployee {
  employeeId: number;
  employementType: "Full-time" | "Part-time" | "Intern" | "Contractor";
  endDate?: Date;
  name: string;
  department: "IT" | "HR" | "Support";
  salary: {
    amount: number;
    currency: string;
  };
}

const newIntern: IEmployee = {
  employeeId: 499,
  employementType: "Intern",
  name: "Fares",
  department: "IT",
  salary: { amount: 100_000, currency: "SEK" },
};

const newContractor: IEmployee = {
  name: "Andreas",
  department: "HR",
  employeeId: 500,
  employementType: "Contractor",
  salary: { amount: 10_000, currency: "SEK" },
  endDate: new Date("2025-01-17"),
};

const htmlString = [newIntern, newContractor]
  .map(
    (employee) => `<tr>
    <td>${employee.employeeId}</td>
    <td>${employee.employementType}</td>
    <td>${employee.name}</td>
    <td>${employee.department}</td>
    <td><input value="${employee.salary.amount}" type="number"/></td>
    <td>${employee.endDate ? employee.endDate.toDateString() : ""}</td>
  </tr>`
  )
  .join("");

document.querySelector(".employee-table")!.innerHTML = htmlString;
