interface IEmployee {
  employeeId: number;
  employementType: "Full-time" | "Part-time" | "Intern" | "Contractor";
  renewEmployment?: boolean;
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
  renewEmployment: true,
  employementType: "Contractor",
  salary: { amount: 10_000, currency: "SEK" },
  endDate: new Date("2025-01-17"),
};
const newestContractor: IEmployee = {
  name: "Elin",
  department: "HR",
  employeeId: 501,
  renewEmployment: false,
  employementType: "Contractor",
  salary: { amount: 1_000, currency: "SEK" },
  endDate: new Date("2025-01-22"),
};

const htmlString:string  = [newIntern, newContractor, newestContractor]
  .map(
    (employee) => `<tr>
    <td>${employee.employeeId}</td>
    <td>${employee.employementType}</td>
    <td>${employee.name}</td>
    <td>${employee.department}</td>
    <td><input value="${employee.salary.amount}" type="number"/></td>
    <td>${employee.endDate ? employee.endDate.toDateString() : ""}</td>
    <td><input type="checkbox" ${employee.renewEmployment != null ? employee.renewEmployment ? "checked" : "" : ""}/></td>

  </tr>`
  )
  .join("");

document.querySelector(".employee-table")!.innerHTML = `<thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Department</th>
          <th>Salary</th>
          <th>End date</th>
          <th>Renew Status</th>

        </tr>
      </thead>` + htmlString;


