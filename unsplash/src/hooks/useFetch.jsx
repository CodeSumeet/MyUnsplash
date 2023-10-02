import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import useApp from "./useApp";
import { toast } from "react-toastify";

const useFetch = () => {
  const [allData, setAllData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [error, setError] = useState(null);

  const { inputValue, loading, setLoading } = useApp();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase.from("unsplashData").select();

        if (error) {
          toast.error(error);
          throw error;
        }

        setAllData(data);
        setFilteredData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [inputValue]);

  useEffect(() => {
    if (inputValue) {
      const lowercasedInput = inputValue.toLowerCase();
      const newData = allData.filter((item) =>
        item.img_label.toLowerCase().includes(lowercasedInput)
      );
      if (newData) {
        setFilteredData(newData);
      }
    } else {
      setFilteredData(allData);
    }
  }, [inputValue, allData]);

  return { data: filteredData, error, loading };
};

export default useFetch;
