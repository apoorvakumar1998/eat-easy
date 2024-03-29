import { useEffect, useState } from "react"
import { RESTAURENT_MENU_API } from './constants';

const useRestaurentMenu = (resId) => {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch(RESTAURENT_MENU_API + resId);
    const json = await data.json();
    setResData(json);
  }
  return resData;
}

export default useRestaurentMenu;