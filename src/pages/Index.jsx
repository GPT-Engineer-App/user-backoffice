import React, { useState } from "react";
import { Container, Table, Thead, Tbody, Tr, Th, Td, IconButton, Text, Box } from "@chakra-ui/react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

// Mock data for users
const userData = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com" },
];

const Index = () => {
  const [users, setUsers] = useState(userData);

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <Container maxW="container.xl" py={5}>
      <Box overflowX="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => (
              <Tr key={user.id}>
                <Td>{user.id}</Td>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>
                  <IconButton aria-label="Edit user" icon={<FaEdit />} mr={2} />
                  <IconButton aria-label="Delete user" icon={<FaTrashAlt />} colorScheme="red" onClick={() => deleteUser(user.id)} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      {users.length === 0 && (
        <Text mt={4} textAlign="center">
          No users available.
        </Text>
      )}
    </Container>
  );
};

export default Index;
