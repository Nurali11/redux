import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import Button from '@mui/material/Button';
import { Card, Modal } from 'antd';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Context } from '../context/Context';
import CreateCard from './CreateCard';

const { Meta } = Card;

export const Cards = ({item}: {item: any}) => {
    const {id} = item
    const [showModal, setshowModal] = useState(false)
    const {setShowCreate, setImages} = useContext(Context)
    const [editingItem, setEditingItem] = useState(null);
    function handleDeleteClick(){
        setshowModal(!showModal)
    }

    function handleDelete(e: React.FormEvent){
      e.preventDefault()
      axios.delete(`http://localhost:3000/products/${id}`)
    }

    function handleEdit(e: React.FormEvent, item:any){
      e.preventDefault()
      setEditingItem(item)
      alert(editingItem)
      setImages(item.images[0])
      setShowCreate(true)
    }
    return (
  <Card
    style={{ width: 300 }}
    cover={
      <img
      className='!h-[250px]'
        alt="example"
        src={item.images[0]}
      />
    }
    actions={[
      <Button type='button' variant='contained' onClick={handleDeleteClick} className='!bg-red-500'>
          <DeleteOutlined className='!text-[20px] !text-white' />
      </Button>,
      <Button onClick={(e) => handleEdit(e, item)} variant='contained' className='!bg-orange-500'>
          <EditOutlined className='!text-[20px] !text-white' />  
      </Button>
    ]}
  >
    <Meta
      title={item.title}
      description={`$${item.price}`}
    />
    
    {editingItem && <CreateCard item={editingItem}/>}
    <Modal title="Ishonchinggiz komilmi?" open={showModal} okText="O'chirish" cancelText="Bekor qilish" onCancel={() => setshowModal(false)} onOk={handleDelete}></Modal>
  </Card>
);
}

export default Cards;