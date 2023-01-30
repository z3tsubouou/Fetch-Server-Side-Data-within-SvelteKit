const customFetch = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: "This is server side data on layout!",
      });
    }, 1000);
  });
};

export async function load() {
  const response = (await customFetch()) as {
    data: any;
  };
  return {
    data: response.data,
  };
}
