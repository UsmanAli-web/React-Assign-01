import { useState } from "react";

interface Form {
  name: string;
  email: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

let Contact = () => {
  const [form, setForm] = useState<Form>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = (): Errors => {
    let newErrors: Errors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email.includes("@")) newErrors.email = "Valid email is required";
    if (!form.message) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
    } else {
      setErrors({});
      alert("Form submitted successfully");
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-3xl font-bold text-black-700 mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 shadow rounded-xl">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.name && <p className="text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.email && <p className="text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label className="block font-medium">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.message && <p className="text-red-600">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-blue px-6 py-2 rounded shadow hover:bg-blue-700">
          Send
        </button>
      </form>

      <div className="mt-8 text-gray-700">
        <p><strong>Address:</strong> EcoFuture HQ, Karachi, Pakistan</p>
        <p><strong>Email:</strong> contact@ecofuture.com</p>
        <p><strong>Phone:</strong> +92 300 1234567</p>
      </div>
    </div>
  );
}

export default Contact