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
    renewEmployment: true,
    employementType: "Contractor",
    salary: { amount: 10000, currency: "SEK" },
    endDate: new Date("2025-01-17"),
};
var newestContractor = {
    name: "Elin",
    department: "HR",
    employeeId: 501,
    renewEmployment: false,
    employementType: "Contractor",
    salary: { amount: 1000, currency: "SEK" },
    endDate: new Date("2025-01-22"),
};
var htmlString = [newIntern, newContractor, newestContractor]
    .map(function (employee) { return "<tr>\n    <td>".concat(employee.employeeId, "</td>\n    <td>").concat(employee.employementType, "</td>\n    <td>").concat(employee.name, "</td>\n    <td>").concat(employee.department, "</td>\n    <td><input value=\"").concat(employee.salary.amount, "\" type=\"number\"/></td>\n    <td>").concat(employee.endDate ? employee.endDate.toDateString() : "", "</td>\n    <td><input type=\"checkbox\" ").concat(employee.renewEmployment != null ? employee.renewEmployment ? "checked" : "" : "", "/></td>\n\n  </tr>"); })
    .join("");
document.querySelector(".employee-table").innerHTML = "<thead>\n        <tr>\n          <th>Id</th>\n          <th>Name</th>\n          <th>Age</th>\n          <th>Department</th>\n          <th>Salary</th>\n          <th>End date</th>\n          <th>Renew Status</th>\n\n        </tr>\n      </thead>" + htmlString;
