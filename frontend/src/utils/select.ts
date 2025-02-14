export const selectStyles = {
  control: (provided: any) => ({
    ...provided,
    border: "2px solid #127ed6",
    boxShadow: "none",
    cursor: "pointer",
    "&:hover": {
      border: "2px solid #127ed6",
    },
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "#636363",
  }),
  option: (provided: any) => ({
    ...provided,
    color: "#000",
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: "none",
  }),
};
