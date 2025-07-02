import { Input } from 'antd';
import Upload from './Upload';
import { Context } from '../context/Context';
import { useContext, useState } from 'react';
import axios from 'axios';

const CreateCard: React.FC<{item?: any}> = ({item} : {item?  :any}) => {
  const id = item

  const { images } = useContext(Context);
  const [title, setTitle] = useState(item?.title || "");
const [price, setPrice] = useState(item?.price || "");
  const { data } = useContext(Context);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    const datas = {
      id: id ? id : `${data.length > 0 ? Number(data[data.length - 1].id) + 1 : 1}`,
      title,
      price: parseFloat(price),
      images: [images] 
    };

    item ?
    axios.patch(`http://localhost:3000/products/${item.id}`, datas)
    : axios.post("http://localhost:3000/products", datas)
      .then(() => {
        alert("Created");
      })
      .catch(console.error)
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center !backdrop-blur-[0.3px] z-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Form Title</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5 items-center justify-between'>
          <Upload />
          <Input onChange={(e) => setTitle(e.target.value)} placeholder="Title" className='!text-[20px]' />
          <Input onChange={(e) => setPrice(e.target.value)} placeholder="Price $" className='!text-[20px]' type='number' />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCard;
