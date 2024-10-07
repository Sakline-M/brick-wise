import  { useState } from 'react';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white p-6 rounded-lg shadow-md w-full lg:max-w-xl" onSubmit={handleSubmit}>
        <h2 className="text-lg font-medium mb-4">Step {step} of 3</h2>
        <div className="flex mb-4">
          <div className={`w-1/3 ${step === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'} p-2 text-center cursor-pointer`} onClick={() => setStep(1)}>Step 1</div>
          <div className={`w-1/3 ${step === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200'} p-2 text-center cursor-pointer`} onClick={() => setStep(2)}>Step 2</div>
          <div className={`w-1/3 ${step === 3 ? 'bg-blue-500 text-white' : 'bg-gray-200'} p-2 text-center cursor-pointer`} onClick={() => setStep(3)}>Step 3</div>
        </div>
        {step === 1 && <Step1 formData={formData} handleChange={handleChange} />}
        {step === 2 && <Step2 formData={formData} handleChange={handleChange} />}
        {step === 3 && <Step3 formData={formData} handleChange={handleChange} />}
        <div className="flex justify-between mt-6">
          {step > 1 && <button type="button" className="bg-gray-300 px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400" onClick={handleBack}>Back</button>}
          {step < 3 ? (
            <button type="button" className="bg-blue-500 px-6 py-1.5 rounded-lg text-white hover:bg-blue-600" onClick={handleNext}>Next</button>
          ) : (
            <button type="submit" className="bg-green-500 px-6 py-1.5 rounded-lg text-white hover:bg-green-600">Submit</button>
          )}
        </div>
      </form>
    </div>
  );
};

const Step1 = ({ formData, handleChange }) => (
  <div>
    <h3 className="text-lg font-medium mb-4">Step 1</h3>
    <div className="mb-4">
      <label className="block font-medium mb-2 text-gray-700" htmlFor="name">Name</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-400 p-2" />
    </div>
  </div>
);

const Step2 = ({ formData, handleChange }) => (
  <div>
    <h3 className="text-lg font-medium mb-4">Step 2</h3>
    <div className="mb-4">
      <label className="block font-medium mb-2 text-gray-700" htmlFor="email">Email</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-400 p-2" />
    </div>
  </div>
);

const Step3 = ({ formData, handleChange }) => (
  <div>
    <h3 className="text-lg font-medium mb-4">Step 3</h3>
    <div className="mb-4">
      <label className="block font-medium mb-2 text-gray-700" htmlFor="password">Password</label>
      <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="w-full border border-gray-400 p-2" />
    </div>
  </div>
);

export default MultiStepForm;
