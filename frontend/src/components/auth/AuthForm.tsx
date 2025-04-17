import React from "react";

export interface AuthFormProps {
  type: "login" | "register";
  onSubmit: (data: { email: string; password: string; name?: string }) => void;
  loading?: boolean;
  error?: string;
}

export const AuthForm: React.FC<AuthFormProps> = ({ type, onSubmit, loading, error }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (type === "register") {
      onSubmit({ email, password, name });
    } else {
      onSubmit({ email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-center mb-4">
        {type === "login" ? "Login to BuddyBoost" : "Create your BuddyBoost account"}
      </h2>
      {type === "register" && (
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-primary"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
      )}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-primary"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-primary"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <div className="text-red-600 text-sm text-center">{error}</div>}
      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded font-semibold hover:bg-primary/90 transition"
        disabled={loading}
      >
        {loading ? "Please wait..." : type === "login" ? "Login" : "Register"}
      </button>
    </form>
  );
};
