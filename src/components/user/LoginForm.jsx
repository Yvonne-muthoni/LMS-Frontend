import React, { useState } from 'react';
import { FormControl, FormLabel, Input, InputGroup, InputRightElement, Button, FormErrorMessage } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const colorScheme = "#FF6247";

const LoginForm = ({ email, setEmail, password, setPassword, handleSubmit, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-6">
      <FormControl isInvalid={!!error}>
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
        <FormLabel htmlFor="email" className="text-sm font-medium text-gray-700">
          Email Address
        </FormLabel>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="your.email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          _focus={{ borderColor: colorScheme, boxShadow: `0 0 0 1px ${colorScheme}` }}
        />
      </FormControl>
      <FormControl isRequired isInvalid={!!error}>
        <FormLabel htmlFor="password" className="text-sm font-medium text-gray-700">
          Password
        </FormLabel>
        <InputGroup>
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
      </FormControl>
      <Button
        type="submit"
        backgroundColor={colorScheme}
        _hover={{ backgroundColor: '#FF3B30' }}
        color="white"
        width="full"
      >
        Sign In
      </Button>
    </form>
  );
};

export default LoginForm;
