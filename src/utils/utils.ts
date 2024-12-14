const months: string[] = [
  "янв",
  "фев",
  "мар",
  "апр",
  "мая",
  "июня",
  "июля",
  "авг",
  "сент",
  "окт",
  "ноября",
  "дек",
];

export const getDayOfWeek = (date: string) => {
  const days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

  const [day, month, year] = date.split(".");
  const formattedDate = `20${year}-${month}-${day}`;

  const parsedDate = new Date(formattedDate);
  if (isNaN(parsedDate.getTime())) {
    throw new Error("Invalid date format. Please use DD.MM.YY.");
  }

  return days[parsedDate.getDay()];
};

export function getTransferLabel(count: number): string {
  const remainder10 = count % 10;
  const remainder100 = count % 100;

  if (remainder100 >= 11 && remainder100 <= 14) {
    return "пересадок";
  }

  switch (remainder10) {
    case 1:
      return "пересадка";
    case 2:
    case 3:
    case 4:
      return "пересадки";
    default:
      return "пересадок";
  }
}

export const formatDate = (date: string): string => {
  const [day, month, year] = date.split(".");

  if (!day || !month || !year) {
    throw new Error("Неверный формат даты");
  }

  const monthIndex = parseInt(month, 10) - 1;
  const fullYear = parseInt(year, 10) + (year.length === 2 ? 2000 : 0);

  if (monthIndex < 0 || monthIndex > 11) {
    throw new Error("Неверный номер месяца");
  }

  return `${parseInt(day, 10)} ${months[monthIndex]} ${fullYear}`;
};
