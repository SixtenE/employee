var newIntern = {
    employeeId: 499,
    employementType: "Intern",
    name: "Fares",
    department: "IT",
    salary: { amount: 100000, currency: "SEK" },
};
var newContractor = {
    name: "Andreas",
    department: "HR",
    employeeId: 500,
    employementType: "Contractor",
    salary: { amount: 10000, currency: "SEK" },
    endDate: new Date("2025-01-17"),
};
var htmlString = [newIntern, newContractor]
    .map(function (employee) { return "<tr>\n    <td>".concat(employee.employeeId, "</td>\n    <td>").concat(employee.employementType, "</td>\n    <td>").concat(employee.name, "</td>\n    <td>").concat(employee.department, "</td>\n    <td><input value=\"").concat(employee.salary.amount, "\" type=\"number\"/></td>\n    <td>").concat(employee.endDate ? employee.endDate.toDateString() : "", "</td>\n  </tr>"); })
    .join("");
document.querySelector(".employee-table").innerHTML = htmlString;
