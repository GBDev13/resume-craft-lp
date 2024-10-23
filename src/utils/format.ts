export const formatDuration = (duration: number) => {
  const seconds = Math.floor(duration / 1000);
  const hours = Math.floor(seconds / 3600);
  const remainingSeconds = seconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  const remainingMinutes = remainingSeconds % 60;

  const hoursString = hours > 0 ? hours.toString().padStart(2, "0") + ":" : "";
  const minutesString = minutes.toString().padStart(2, "0");
  const secondsString = remainingMinutes.toString().padStart(2, "0");

  return hoursString + minutesString + ":" + secondsString;
};

export const formatPrice = (price: number) => {
  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}