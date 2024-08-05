import React, { useState } from "react";
import { FormControl, FormLabel, Input, InputGroup, InputRightElement, Button, Select, FormErrorMessage } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import PasswordStrengthIndicator from "./PasswordStrengthIndicator";

const colorScheme = "#FF6247";

const RegistrationForm = ({ username, setUsername, email, setEmail, password, setPassword, role, setRole, handleSubmit, error, success }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-4">
      <FormControl isRequired>
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input
          id="username"
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          _focus={{ borderColor: colorScheme, boxShadow: `0 0 0 1px ${colorScheme}` }}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="email">Email Address</FormLabel>
        <Input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.email@example.com"
          _focus={{ borderColor: colorScheme, boxShadow: `0 0 0 1px ${colorScheme}` }}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="password">Password</FormLabel>
        <InputGroup>
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            _focus={{ borderColor: colorScheme, boxShadow: `0 0 0 1px ${colorScheme}` }}
          />
          <InputRightElement>
            <Button
              variant="link"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              color={colorScheme}
            >
              {showPassword ? <ViewOffIcon color={colorScheme} /> : <ViewIcon color={colorScheme} />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <PasswordStrengthIndicator password={password} />
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="role">Role</FormLabel>
        <Select
          id="role"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          _focus={{ borderColor: colorScheme, boxShadow: `0 0 0 1px ${colorScheme}` }}
        >
          <option value="">Select your role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </Select>
      </FormControl>
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
      {success && <p className="text-green-600">{success}</p>}
      <Button
        type="submit"
        backgroundColor={colorScheme}
        _hover={{ backgroundColor: '#FF3B30' }}
        color="white"
        width="full"
      >
        Register
      </Button>
    </form>
  );
};

export default RegistrationForm;
