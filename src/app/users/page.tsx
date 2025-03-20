"use client";

import React, { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Users List</h1>
      <div>
        {users.length === 0 ? (
          <p className="text-center">No users found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
            {users.map((user) => (
              <div key={user.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold">{user.name}</h3>
                <p>{user.email}</p>
                <p>{user.role}</p>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                  disabled
                >
                  Edit
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
