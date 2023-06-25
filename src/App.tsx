import React, { useEffect, useState } from "react";
import Input from "./components/Input";
import { useForm } from "react-hook-form";
import { fetchSchema } from "./lib/fetchSchema";

const App = () => {
  const [fields, setFields] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const currentFieldValues = watch();
  useEffect(() => {
    fetchSchema().then((res) => {
      setFields(res);
    });
  }, []);

  return (
    <form>
      <div className="container-app">
        {fields.map((item) => (
          <div className="mb-3" key={item.id}>
            <Input
              item={item}
              register={register}
              currentFieldValues={currentFieldValues}
            />
          </div>
        ))}
        <button type="button" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default App;
