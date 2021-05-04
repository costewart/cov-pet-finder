const getPoundData = useCallback(async () => {
  const response = await fetch(
    "https://opendata.vancouver.ca/api/v2/catalog/datasets/animal-control-inventory-lost-and-found/records?select=*&limit=100&refine=state%3ALost&pretty=false&timezone=UTC"
  )
    .then((response) => response.json())
      .then((data) => { return data.records });
}, []);

const initialState = {
  data: getPoundData(),
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};

const getResults = (state) => state.searched.data;


export const selectors = {
  getResults
};

