// import { getProducts } from '../service/getData';
import Cards from '../components/Cards';
import { getProducts } from '../service/getData';

export const Products = () => {
    // const products = useSelector((state:{datas:any[]}) => state.datas) 
    const products = getProducts()
  return (
    <div className='flex justify-between gap-[40px] flex-wrap p-5 mt-[100px]'>
        {products.map((item: any) => (
            <Cards key={item.id} item={item}/>
        ))}
    </div>
  );
}