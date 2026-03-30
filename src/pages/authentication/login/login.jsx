import React from "react";
import { useForm } from "react-hook-form";

function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const API_URL = import.meta.env.VITE_API_URL;

const onSubmit = async (data) => {
    try {
        const response = await fetch(`${API_URL}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), // ✅ FIXED
        });

        const result = await response.json();

        if (response.ok) {
            // ✅ Save token & user
            localStorage.setItem("token", result.token);
            localStorage.setItem("user", JSON.stringify(result.user));

            console.log("Login Success ✅");

            // 🔥 Redirect based on role
            if (result.user.role === "admin") {
                window.location.href = "/admin";
            } else if (result.user.role === "teacher") {
                window.location.href = "/teacher";
            } else {
                window.location.href = "/student";
            }
        } else {
            alert(result.message);
        }

    } catch (error) {
        console.log("Error:", error);
        alert("Server error");
    }
};

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 font-outfit">
            <div className="flex w-[900px] bg-white shadow-2xl rounded-2xl overflow-hidden">
                
                {/* Left Side (Branding) */}
                <div className="w-1/2 bg-blue-600 text-white flex flex-col justify-center items-start p-10">
                    <h1 className="text-3xl font-bold mb-4">School Connect</h1>
                    <p className="text-start">
                        Manage your school efficiently with our ERP system.
                    </p>
                </div>

                {/* Right Side (Form) */}
                <div className="w-1/2 p-10">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-700">
                        Maharishi Dayanand Inter College
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        
                        {/* Email */}
                        <div>
                            <input
                                type="email"
                                placeholder="Enter Your School Email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-outfit"
                                {...register("email", { required: true })}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm">
                                    Email is required
                                </p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                {...register("password", { required: true })}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm">
                                    Password is required
                                </p>
                            )}
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;