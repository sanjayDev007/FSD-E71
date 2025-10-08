import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    text: '',
    email: '',
    password: '',
    number: '',
    tel: '',
    url: '',
    date: '',
    time: '',
    datetime: '',
    month: '',
    week: '',
    color: '#000000',
    range: 50,
    search: '',
    textarea: '',
    select: '',
    checkboxes: [],
    radio: '',
    file: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked ? [...prev[name], value] : prev[name].filter(v => v !== value)
      }));
    } else if (type === 'file') {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.text.trim()) newErrors.text = 'Text is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!formData.number.trim()) newErrors.number = 'Number is required';
    else if (isNaN(formData.number) || formData.number < 0) newErrors.number = 'Must be a positive number';
    if (!formData.tel.trim()) newErrors.tel = 'Telephone is required';
    if (!formData.url.trim()) newErrors.url = 'URL is required';
    else if (!/^https?:\/\/.+/.test(formData.url)) newErrors.url = 'URL must start with http:// or https://';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.datetime) newErrors.datetime = 'Datetime is required';
    if (!formData.month) newErrors.month = 'Month is required';
    if (!formData.week) newErrors.week = 'Week is required';
    if (!formData.search.trim()) newErrors.search = 'Search is required';
    if (!formData.textarea.trim()) newErrors.textarea = 'Textarea is required';
    if (!formData.select) newErrors.select = 'Please select an option';
    if (formData.checkboxes.length === 0) newErrors.checkboxes = 'Please select at least one checkbox';
    if (!formData.radio) newErrors.radio = 'Please select a radio option';
    if (!formData.file) newErrors.file = 'Please upload a file';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      console.log('Form data:', formData);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Comprehensive Form</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Text */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Text (required, min 3 chars)</label>
            <input
              type="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.text ? 'border-red-500' : 'border-gray-300'}`}
              minLength="3"
              required
            />
            {errors.text && <p className="text-red-500 text-sm mt-1">{errors.text}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email (required, valid format)</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password (required, min 6 chars)</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              minLength="6"
              required
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Number (required, positive)</label>
            <input
              type="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.number ? 'border-red-500' : 'border-gray-300'}`}
              min="0"
              required
            />
            {errors.number && <p className="text-red-500 text-sm mt-1">{errors.number}</p>}
          </div>

          {/* Tel */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Telephone (required)</label>
            <input
              type="tel"
              name="tel"
              value={formData.tel}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.tel ? 'border-red-500' : 'border-gray-300'}`}
              required
            />
            {errors.tel && <p className="text-red-500 text-sm mt-1">{errors.tel}</p>}
          </div>

          {/* URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">URL (required, valid format)</label>
            <input
              type="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.url ? 'border-red-500' : 'border-gray-300'}`}
              required
            />
            {errors.url && <p className="text-red-500 text-sm mt-1">{errors.url}</p>}
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date (required)</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
              required
            />
            {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time (required)</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.time ? 'border-red-500' : 'border-gray-300'}`}
              required
            />
            {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
          </div>

          {/* Datetime-local */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Datetime (required)</label>
            <input
              type="datetime-local"
              name="datetime"
              value={formData.datetime}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.datetime ? 'border-red-500' : 'border-gray-300'}`}
              required
            />
            {errors.datetime && <p className="text-red-500 text-sm mt-1">{errors.datetime}</p>}
          </div>

          {/* Month */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Month (required)</label>
            <input
              type="month"
              name="month"
              value={formData.month}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.month ? 'border-red-500' : 'border-gray-300'}`}
              required
            />
            {errors.month && <p className="text-red-500 text-sm mt-1">{errors.month}</p>}
          </div>

          {/* Week */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Week (required)</label>
            <input
              type="week"
              name="week"
              value={formData.week}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.week ? 'border-red-500' : 'border-gray-300'}`}
              required
            />
            {errors.week && <p className="text-red-500 text-sm mt-1">{errors.week}</p>}
          </div>

          {/* Color */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
            <input
              type="color"
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 border-gray-300"
            />
          </div>

          {/* Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Range (0-100)</label>
            <input
              type="range"
              name="range"
              value={formData.range}
              onChange={handleChange}
              min="0"
              max="100"
              className="w-full"
            />
            <p className="text-sm text-gray-600 mt-1">Value: {formData.range}</p>
          </div>

          {/* Search */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search (required)</label>
            <input
              type="search"
              name="search"
              value={formData.search}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.search ? 'border-red-500' : 'border-gray-300'}`}
              required
            />
            {errors.search && <p className="text-red-500 text-sm mt-1">{errors.search}</p>}
          </div>

          {/* Select */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select (required)</label>
            <select
              name="select"
              value={formData.select}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.select ? 'border-red-500' : 'border-gray-300'}`}
              required
            >
              <option value="">Choose an option...</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            {errors.select && <p className="text-red-500 text-sm mt-1">{errors.select}</p>}
          </div>
        </div>

        {/* Textarea */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Textarea (required, min 10 chars)</label>
          <textarea
            name="textarea"
            value={formData.textarea}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.textarea ? 'border-red-500' : 'border-gray-300'}`}
            rows="4"
            minLength="10"
            required
          ></textarea>
          {errors.textarea && <p className="text-red-500 text-sm mt-1">{errors.textarea}</p>}
        </div>

        {/* Checkboxes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Checkboxes (select at least one)</label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="checkboxes"
                value="check1"
                onChange={handleChange}
                className="mr-2"
              />
              Checkbox 1
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="checkboxes"
                value="check2"
                onChange={handleChange}
                className="mr-2"
              />
              Checkbox 2
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="checkboxes"
                value="check3"
                onChange={handleChange}
                className="mr-2"
              />
              Checkbox 3
            </label>
          </div>
          {errors.checkboxes && <p className="text-red-500 text-sm mt-1">{errors.checkboxes}</p>}
        </div>

        {/* Radio */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Radio (required)</label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="radio"
                value="radio1"
                onChange={handleChange}
                className="mr-2"
                required
              />
              Radio 1
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="radio"
                value="radio2"
                onChange={handleChange}
                className="mr-2"
              />
              Radio 2
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="radio"
                value="radio3"
                onChange={handleChange}
                className="mr-2"
              />
              Radio 3
            </label>
          </div>
          {errors.radio && <p className="text-red-500 text-sm mt-1">{errors.radio}</p>}
        </div>

        {/* File */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">File Upload (required)</label>
          <input
            type="file"
            name="file"
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.file ? 'border-red-500' : 'border-gray-300'}`}
            required
          />
          {errors.file && <p className="text-red-500 text-sm mt-1">{errors.file}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 font-medium"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
}

export default Form;