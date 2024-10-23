type InstallmentOption = {
  installments: number
  total: number
  installmentValue: number
  hasInterest: boolean
}

export const calculateInstallmentOptions = (
  amount: number,
): InstallmentOption[] => {
  const gatewayFeePercentage = 0.0399
  const gatewayFixedFee = 0.8 // 0.49 Asaas
  const maxInstallments = 12
  const noInterestInstallments = 6

  const installmentOptions: InstallmentOption[] = []

  for (let i = 1; i <= maxInstallments; i++) {
    let total = amount

    if (i > noInterestInstallments) {
      total += total * gatewayFeePercentage + gatewayFixedFee
    }

    total = Math.round(total * 100) / 100
    const installmentValue = Math.round((total / i) * 100) / 100

    installmentOptions.push({
      installments: i,
      total,
      installmentValue,
      hasInterest: i > noInterestInstallments,
    })
  }

  return installmentOptions
}