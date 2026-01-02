export const soTienChuyenDoi = (soTien: number) => {
    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
    return formatter.format(soTien);
}

export const toTime = (time: number) => {
  const date: Date = new Date(time);
  return date.toLocaleString('vi-VN')
}