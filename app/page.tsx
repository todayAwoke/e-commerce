//import Image from 'next/image'

import { truncateText } from "@/utils/truncateText";
import  Container  from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import {products} from '@/utils/products';
import ProductCard from "./components/products/ProductCard";
export default function Home() {
  return (
      <div className="">
          <Container>
              <div>
                  <HomeBanner/>
              </div>
              {/* <div className="grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 gap-8"> */}
             <ProductCard />
                  
              {/* </div> */}
          </Container>
   </div>
  )
}
