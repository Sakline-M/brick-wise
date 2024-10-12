import axios from 'axios';

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/logout', {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      localStorage.removeItem('token');
      window.location.reload();
    } catch (error) {
      console.error('Error logging out:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <button onClick={handleLogout} className='w-full text-start text-[#1F847F] font-bold underline'>
      Abmelden
    </button>
  );
};

export default LogoutButton;
