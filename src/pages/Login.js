const Login = ({ setIsLoggedIn }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true); // Simulate successful login
  };

  return (
    <div className="max-w-md mx-auto mt-20">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">Doctor Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" className="w-full p-2 border rounded" placeholder="doctor@example.com" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input type="password" className="w-full p-2 border rounded" placeholder="••••••••" required />
        </div>
        <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

