import { saveAs } from "file-saver";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

// Import other components and libraries as needed

const GeneratePayslip = () => {
  const payslipContent = {
    // Define your payslip content for PDF generation
  };

  // Generate PDF
  const pdfDocGenerator = pdfMake.createPdf(payslipContent);
  pdfDocGenerator.download("Payslip.pdf");
};

const generateCsvPayslip = () => {
  const csvData = "Employee Name, Earnings, Deductions\nJohn Doe, 3000, 500";
  const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
  saveAs(blob, "Payslip.csv");
};


