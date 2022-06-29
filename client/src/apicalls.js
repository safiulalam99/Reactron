import axios from "axios";

export const fetchData = async () => {
  const data1 = await axios.get(
    "https://run.mocky.io/v3/a3f3a8dd-678f-4941-91b2-28923b305d4b"
  );
  return data1.data;
};
export const fetchInternal = async () => {
  const data1 = await axios.get(
    "https://run.mocky.io/v3/77d33342-bb12-4e57-a881-d98871b959d2"
  );
  return data1.data;
};
export const fetchExternal = async () => {
  const data1 = await axios.get(
    "https://run.mocky.io/v3/4e64f315-adb4-49df-a439-61a14da36084"
  );
  return data1.data;
};
