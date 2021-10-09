import React from "react";
import { useForm } from "react-hook-form";

import {
  Form,
  Input,
  InputLabel,
  InputContainer,
  InputError,
  Flex,
} from "./Form.styled";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const onError = (errors, error) => {
    //console.log("My errors");
    //console.log(errors);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <InputContainer error={errors.username}>
        <Flex justifyContent="space-between">
          <InputLabel htmlFor="username"> Username </InputLabel>
          {errors.username && <InputError>First name required</InputError>}
        </Flex>
        <Input id="username" {...register("username", { required: true })} />
      </InputContainer>
      <InputContainer>
        <Flex justifyContent="space-between">
          <InputLabel htmlFor="password"> Password </InputLabel>
          <InputError />
        </Flex>
        <Input id="password" {...register("password")} />
      </InputContainer>
      <Flex justifyContent="flex-end">
        <button> Submit </button>
      </Flex>
    </Form>
  );
};

export default LoginForm;
