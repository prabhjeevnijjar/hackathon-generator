'use client';
import React, { useState, useRef } from 'react';
import { usePostContext } from '@/context/PostContext';
import { handleImageChange, onChangeHandler } from '@/lib/utils';
import { useRouter } from 'next/navigation';

const Form = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [state, setState] = useState({ name: '', startDate: '', endDate: '', desc: '', level: '' });
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null); // Ref for file input
  const router = useRouter();

  const { posts, addPost, fetchPosts } = usePostContext();
  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Name validation
    if (!state.name?.trim()) {
      formErrors.name = 'Name is required.';
      isValid = false;
    }

    // Description validation
    if (!state.desc?.trim()) {
      formErrors.description = 'Description is required.';
      isValid = false;
    }

    // Start date validation
    if (!state.startDate) {
      formErrors.startDate = 'Start date is required.';
      isValid = false;
    }

    // End date validation
    if (!state.endDate) {
      formErrors.endDate = 'End date is required.';
      isValid = false;
    } else if (state.startDate && state.endDate < state.startDate) {
      formErrors.endDate = 'End date cannot be earlier than start date.';
      isValid = false;
    }

    // Image validation
    if (!selectedImage) {
      formErrors.image = 'Image is required.';
      isValid = false;
    }

    // Level validation
    if (!state.level) {
      formErrors.level = 'Level is required.';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fetchPosts({ filter: 'All', searchQuery: state.name, level: '' })?.length > 0) {
      alert('Post with same name already exist!');
      return;
    }
    if (validateForm()) {
      addPost({ name: state.name, description: state.desc, startDate: state.startDate, endDate: state.endDate, image: selectedImage, level: state.level }); // Only add the post if the form is valid
      setState({
        name: '',
        desc: '',
        startDate: '',
        endDate: '',
        level: 'easy',
      });
      // Reset the file input field
      if (fileInputRef.current) fileInputRef.current.value = null;
      router.push('/');
      setSelectedImage(null);
      setErrors({});
    }
  };
  return (
    <div className="px-[2rem] md:px-[6rem] 2xl:px-[25rem]">
      <div className="flex flex-col w-full max-w-md items-center gap-1.5 z-2 my-7">
        <div className="grid w-full max-w-sm items-center gap-1.5 z-2 mt-3">
          <label htmlFor="name" className="leading-[1.187rem] text-[#333333]">
            Challenge Name
          </label>
          <input
            name="name"
            type="text"
            id="name"
            placeholder="Name"
            required
            value={state.name || ''}
            onChange={(e) => onChangeHandler(e, setState, state)}
            className="rounded-[5px] border px-2 py-1 mt-4"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 z-2 mt-6">
          <label htmlFor="email" className="leading-[1.187rem] text-[#333333]">
            Start Date
          </label>
          <input
            name="startDate"
            type="date"
            id="startDate"
            placeholder="Start Date"
            required
            value={state.startDate || ''}
            onChange={(e) => onChangeHandler(e, setState, state)}
            className="rounded-[5px] border px-2 py-1 mt-4"
          />
          {errors.startDate && <p className="text-red-500">{errors.startDate}</p>}
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 z-2 mt-6">
          <label htmlFor="Username" className="leading-[1.187rem] text-[#333333]">
            End Date
          </label>
          <input
            name="endDate"
            type="date"
            id="endDate"
            placeholder="End Date"
            required
            value={state.endDate || ''}
            onChange={(e) => onChangeHandler(e, setState, state)}
            className="rounded-[5px] border px-2 py-1 mt-4"
          />
          {errors.endDate && <p className="text-red-500">{errors.endDate}</p>}
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 z-2 mt-6">
          <label htmlFor="name" className="leading-[1.187rem] text-[#333333]">
            Description
          </label>
          <textarea
            cols="60"
            rows="10"
            name="desc"
            type="text"
            id="desc"
            placeholder="Description"
            required
            value={state.desc || ''}
            onChange={(e) => onChangeHandler(e, setState, state)}
            className={`${errors.description ? 'border-red-500' : ''} rounded-[5px] border px-2 py-1 mt-4`}
          />
          {errors.description && <p className="text-red-500">{errors.description}</p>}
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 z-2 mt-6">
          <label htmlFor="name" className="leading-[1.187rem] text-[#333333]">
            Image
          </label>
          <div className="p-4 rounded-lg bg-[#F8F9FD] w-96">
            <div className="w-full h-48 flex items-center justify-center bg-gray-200 rounded-lg overflow-hidden">
              {selectedImage ? <img src={selectedImage} alt="Selected" className="object-cover w-full h-full" /> : <span className="text-gray-500">No image selected</span>}
            </div>

            <label className="block mt-4">
              <input type="file" accept="image/*" ref={fileInputRef} className="hidden" onChange={(e) => handleImageChange(e, setSelectedImage)} />
              <div className="cursor-pointer text-center text-[#44924C] hover:text-green-800">
                <span className="flex flex-row items-center gap-2 mt-2 ">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_22_74)">
                      <path
                        d="M0.00195312 2.8125C0.00195312 2.31522 0.199497 1.83831 0.551128 1.48667C0.902759 1.13504 1.37967 0.9375 1.87695 0.9375H13.127C13.6242 0.9375 14.1011 1.13504 14.4528 1.48667C14.8044 1.83831 15.002 2.31522 15.002 2.8125V12.1875C15.002 12.6848 14.8044 13.1617 14.4528 13.5133C14.1011 13.865 13.6242 14.0625 13.127 14.0625H1.87695C1.37967 14.0625 0.902759 13.865 0.551128 13.5133C0.199497 13.1617 0.00195313 12.6848 0.00195312 12.1875V2.8125ZM0.939453 11.25V12.1875C0.939453 12.4361 1.03823 12.6746 1.21404 12.8504C1.38986 13.0262 1.62831 13.125 1.87695 13.125H13.127C13.3756 13.125 13.614 13.0262 13.7899 12.8504C13.9657 12.6746 14.0645 12.4361 14.0645 12.1875V8.90625L10.5235 7.08094C10.4356 7.0369 10.3361 7.02162 10.239 7.03727C10.1419 7.05291 10.0522 7.09869 9.98258 7.16813L6.50445 10.6462L4.0107 8.985C3.92067 8.92506 3.81267 8.89809 3.70502 8.90869C3.59737 8.91928 3.4967 8.96678 3.42008 9.04313L0.939453 11.25ZM5.62695 5.15625C5.62695 4.78329 5.4788 4.4256 5.21507 4.16188C4.95135 3.89816 4.59366 3.75 4.2207 3.75C3.84774 3.75 3.49006 3.89816 3.22633 4.16188C2.96261 4.4256 2.81445 4.78329 2.81445 5.15625C2.81445 5.52921 2.96261 5.8869 3.22633 6.15062C3.49006 6.41434 3.84774 6.5625 4.2207 6.5625C4.59366 6.5625 4.95135 6.41434 5.21507 6.15062C5.4788 5.8869 5.62695 5.52921 5.62695 5.15625Z"
                        fill="#44924C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_22_74">
                        <rect width="15" height="15" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-[0.875rem]">Change image</p>
                  <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.625 1L11 5.375L6.625 9.75M11 5.375H1" stroke="#44924C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </label>
            {errors.image && <p className="text-red-500">{errors.image}</p>}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 z-2 mt-6">
          <label htmlFor="level" className="leading-[1.187rem] text-[#333333]">
            Level Type
          </label>
          <select
            name="level"
            id="level"
            value={state.level} // Controlled input value
            onChange={(e) => onChangeHandler(e, setState, state)} // Event handler for changes
            required
            className="rounded-[5px] border px-2 py-1 mt-4"
          >
            <option value="" disabled>
              Select a level
            </option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          {errors.level && <p className="text-red-500">{errors.level}</p>}
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 z-2 mt-6">
          <button className="text-white bg-[#44924C] rounded-[10px] font-semibold text-[0.85rem] leading-[1.125rem] px-6 py-2" onClick={(e) => handleSubmit(e)}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
