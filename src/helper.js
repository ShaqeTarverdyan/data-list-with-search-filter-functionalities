export const sortASCByPlansPrice = (data) => {
  const sortedResult = data.sort((a, b) => {
    let firstItemsTotalPrice = 0,
      secondItemsTotalPrice = 0;
    a.subscriptions.map((item) => (firstItemsTotalPrice += item.price));
    b.subscriptions.map((item) => (secondItemsTotalPrice += item.price));

    return secondItemsTotalPrice - firstItemsTotalPrice;
  });
  return sortedResult;
};
