// Helper function to format date in "YYYY-MM-DD" format
const formatDate = (date: Date | null | string): string | null => {
  if (date === null) return null;
  if (typeof date === "string") {
    const datePart = date.split("T")[0];
    return datePart;
  }
  return date.toISOString().split("T")[0];
};

// Helper function to format date in "DD-MM-YY" format
const formatDisplayDate = (date: Date | null | string): string | null => {
  if (date === null) return null;

  let year: string, month: string, day: string;

  if (typeof date === "string") {
    if (date.includes("T")) {
      // Handle ISO date string
      const datePart = date.split("T")[0];
      [year, month, day] = datePart.split("-");
    } else if (/\d{2} \w{3} \d{4}/.test(date)) {
      // Handle "DD MMM YYYY" format
      const dateObject = new Date(date);
      year = dateObject.getFullYear().toString();
      month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
      day = dateObject.getDate().toString().padStart(2, "0");
    } else if (/\d{4}-\d{2}-\d{2}/.test(date)) {
      // Handle "YYYY-MM-DD" format
      [year, month, day] = date.split("-");
    } else {
      // Handle any other string format or invalid format gracefully
      return null;
    }
  } else {
    // Handle Date object
    year = date.getFullYear().toString();
    month = (date.getMonth() + 1).toString().padStart(2, "0");
    day = date.getDate().toString().padStart(2, "0");
  }

  // Format the year to be two digits
  const shortYear = year.slice(-2);

  return `${day}-${month}-${shortYear}`;
};

const DateUtils = {
  formatDate,
  formatDisplayDate,
};

export default DateUtils;
