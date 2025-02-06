import { Box, Card } from "@mui/material";
import { useState } from "react";

export default function Test() {
  const [users, setUsers] = useState(initialUsers);
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    active: false,
    lang: "",
  });

  const addUser = (e) => {
    e.preventDefault();
    const { name, gender, active, lang } = e.target.elements;

    setFormData({
      name: name.value,
      gender: gender.value,
      active: active.value,
      lang: lang.value,
    });

    initialUsers.push(formData);
  };

  const initialUsers = [
    { name: "Markus", gender: "Male", active: false, lang: "Hiri Motu" },
    { name: "Tudor", gender: "Male", active: true, lang: "Romanian" },
    { name: "Sim", gender: "Male", active: true, lang: "Lithuanian" },
    { name: "Tildie", gender: "Female", active: false, lang: "Montenegrin" },
    { name: "Abigail", gender: "Female", active: true, lang: "Bosnian" },
    { name: "Karen", gender: "Bigender", active: true, lang: "Punjabi" },
    { name: "Dermot", gender: "Male", active: false, lang: "Swahili" },
    { name: "Leelah", gender: "Genderqueer", active: false, lang: "Tetum" },
    { name: "Tim", gender: "Male", active: true, lang: "Bosnian" },
    { name: "Theo", gender: "Male", active: false, lang: "West Frisian" },
    { name: "Arnie", gender: "Male", active: true, lang: "Georgian" },
    { name: "Kirsti", gender: "Female", active: true, lang: "Montenegrin" },
    { name: "Hermia", gender: "Female", active: true, lang: "Dzongkha" },
    { name: "Jethro", gender: "Male", active: true, lang: "Malagasy" },
  ];

  return (
    <div>
      <h1>Users</h1>

      <Box>
        <form onSubmit={addUser}>
          <input type="text" placeholder="Name" name="name" />
          <input type="text" placeholder="Gender" name="gender" />
          <input type="text" placeholder="Active" name="active" />
          <input type="text" placeholder="Language" name="lang" />
          <button>Add</button>
        </form>
      </Box>
      <Box>
        {users.map((user) => (
          <Card key={user.name}>
            <p>{user.name}</p>
            <p>{user.gender}</p>
            <p>{user.active ? "Active" : "Inactive"}</p>
            <p>{user.lang}</p>
          </Card>
        ))}
      </Box>
    </div>
  );
}
