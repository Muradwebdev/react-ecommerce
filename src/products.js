import { queryClient } from "./Query/queryClient";

// export const fetchProducts = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   return data;
// };

// Supabase Backend

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://izupcworzbmpxvnyhqgm.supabase.co";
const supabaseKey = "sb_publishable_efW7ES5dtkDxuSt1tM02KA_S7U8L8q5";

const supabase = createClient(supabaseUrl, supabaseKey);

export async function getProducts() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.error("Xəta baş verdi:", error.message);
  } else {
    return data;
  }
}

export const productsLoader = async () => {
  const productsPromise = queryClient.ensureQueryData({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const categoriesPromise = queryClient.ensureQueryData({
    queryKey: ["categories"],
    queryFn: categoryProducts,
  });

  return {
    products: await productsPromise,
    categories: await categoriesPromise,
  };
};

export async function categoryProducts() {
  let { data: categoryproducts, error } = await supabase
    .from("categoryproducts")
    .select("*");
  if (error) {
    console.error("Xəta baş verdi:", error.message);
  } else {
    return categoryproducts;
  }
}
