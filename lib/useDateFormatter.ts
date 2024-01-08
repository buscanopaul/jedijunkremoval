const convertToLongDate = (inputDate: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = new Date(inputDate).toLocaleDateString(
    undefined,
    options
  );
  return formattedDate;
};

export default convertToLongDate;
