export default function errorHandler(error, name) {
  const errorNames = name.split('.')
  let resultError = error

  errorNames.forEach((errorName) => {
    resultError = resultError?.[errorName]
  });

  return resultError
}