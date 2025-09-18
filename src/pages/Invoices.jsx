import React, { useEffect } from "react";
import gsap from "gsap";

const Invoices = () => {
  useEffect(() => {
    // Animate the title
    gsap.from(".invoice-title", {
      opacity: 0,
      y: -30,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  // Your invoice data
  const invoices = [
    { term: "Spring 2024", semester: "4th", challan: "CH-001", scholarship: "50%", fee: "50,000 PKR", fine: "0 PKR", status: "Unpaid" },
    { term: "Fall 2023", semester: "3rd", challan: "CH-002", scholarship: "30%", fee: "70,000 PKR", fine: "500 PKR", status: "Paid" },
    { term: "Spring 2023", semester: "2nd", challan: "CH-003", scholarship: "20%", fee: "80,000 PKR", fine: "1,000 PKR", status: "Paid" },
    { term: "Fall 2022", semester: "1st", challan: "CH-004", scholarship: "10%", fee: "90,000 PKR", fine: "0 PKR", status: "Paid" },
    { term: "Spring 2022", semester: "Foundation", challan: "CH-005", scholarship: "0%", fee: "100,000 PKR", fine: "2,000 PKR", status: "Paid" },
  ];

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="invoice-title text-2xl font-bold text-purple-700 mb-6">
        Invoices
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-purple-100">
              <th className="border px-4 py-2">Term</th>
              <th className="border px-4 py-2">Semester</th>
              <th className="border px-4 py-2">Challan ID</th>
              <th className="border px-4 py-2">Scholarship</th>
              <th className="border px-4 py-2">Fee</th>
              <th className="border px-4 py-2">Fine</th>
              <th className="border px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv, index) => (
              <tr key={index} className="hover:bg-purple-50 transition-all">
                <td className="border px-4 py-2">{inv.term}</td>
                <td className="border px-4 py-2">{inv.semester}</td>
                <td className="border px-4 py-2">{inv.challan}</td>
                <td className="border px-4 py-2">{inv.scholarship}</td>
                <td className="border px-4 py-2">{inv.fee}</td>
                <td className="border px-4 py-2">{inv.fine}</td>
                <td className={`border px-4 py-2 font-semibold ${
                  inv.status === "Paid" ? "text-green-600" : "text-red-500"
                }`}>
                  {inv.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoices;
