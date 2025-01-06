export function formatNumberWithCommas(number: number) {
  if (isNaN(number)) {
    throw new Error("입력값이 숫자가 아닙니다.");
  }
  return number.toLocaleString();
}
