export const formatDate = (dateString: string, format: string = 'MM/DD/YYYY'): string => {
    const date = new Date(dateString);
    // Use date-fns or moment.js for formatting
    return date.toLocaleDateString(); // Simplified
  };