import React, { useState } from 'react';
import { addSliderItem, deleteSliderItem, updateSliderItem } from '../../../repository/HomeRepo';

const SliderUpdate = ({ data }) => {
  const [sliderData, setSliderData] = useState(data); 
  const [editIndex, setEditIndex] = useState(null);
  const [newSliderItem, setNewSliderItem] = useState({
    id: '',
    destName: '',
    img: '',
    linkTo: ''
  });

  const handleInputChange = (e, index = null) => {
    const { name, value } = e.target;
    
    if (index !== null) {
      const updatedItems = [...sliderData];
      updatedItems[index][name] = value;
      setSliderData(updatedItems);
    } else {
      setNewSliderItem(prev => ({ ...prev, [name]: value }));
    }
  };

  const saveEdit = async (index) => {
    await updateSliderItem(sliderData[index].id, sliderData[index]);
    setEditIndex(null);
  };

  const deleteItem = async (index) => {
    await deleteSliderItem(sliderData[index].id);
    setSliderData(sliderData.filter((_, i) => i !== index));
  };

  const addItem = async () => {
    if (newSliderItem.destName && newSliderItem.img && newSliderItem.linkTo) {
      setSliderData([...sliderData, { ...newSliderItem, id : Date.now().toString() }]);
      await addSliderItem(newSliderItem);
      setNewSliderItem({ id: '', destName: '', img: '', linkTo: '' });
    }
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <h1 className="text-3xl font-playfair">Homepage Slider</h1>

      <div>
        {sliderData.map((item, index) => (
          <div key={item.id} className="flex gap-4 items-center mb-4">
            {editIndex === index ? (
              <>
                <input
                  name="destName"
                  value={item.destName}
                  onChange={(e) => handleInputChange(e, index)}
                  placeholder="Destination Name"
                  className="border px-2 py-1"
                />
                <input
                  name="img"
                  value={item.img}
                  onChange={(e) => handleInputChange(e, index)}
                  placeholder="Image URL"
                  className="border px-2 py-1"
                />
                <input
                  name="linkTo"
                  value={item.linkTo}
                  onChange={(e) => handleInputChange(e, index)}
                  placeholder="Link To"
                  className="border px-2 py-1"
                />
                <button onClick={() => saveEdit(index)} className="bg-green-500 rounded-xl text-white px-2 py-1">Save</button>
              </>
            ) : (
              <>
                <span>{item.destName}</span>
                <img src={item.img} alt={item.destName} className="w-16 h-16 object-cover" />
                <a href={item.linkTo} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{item.linkTo}</a>
                <button onClick={() => setEditIndex(index)} className="bg-blue-500 rounded-xl text-white px-2 py-1">Edit</button>
                <button onClick={() => deleteItem(index)} className="bg-red-500 rounded-xl text-white px-2 py-1">Delete</button>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-playfair">Add New Slider Item</h2>
        <input
          name="destName"
          value={newSliderItem.destName}
          onChange={handleInputChange}
          placeholder="Destination Name"
          className="border px-2 py-1"
        />
        <input
          name="img"
          value={newSliderItem.img}
          onChange={handleInputChange}
          placeholder="Image URL"
          className="border px-2 py-1"
        />
        <input
          name="linkTo"
          value={newSliderItem.linkTo}
          onChange={handleInputChange}
          placeholder="Link To"
          className="border px-2 py-1"
        />
        <button onClick={addItem} className="bg-green-500 text-white rounded-xl px-2 py-1">Add Item</button>
      </div>
    </div>
  );
};

export default SliderUpdate;
