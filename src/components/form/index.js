import Input from "../input";
import { solve } from "../../API";
import { useEffect, useState } from "react";

export default function Form() {
  const [input, setInput] = useState();
  const [result, setResult] = useState();
  const [isHidden, setIsHidden] = useState(true);

  const onChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setInput({ ...input, [id]: value });
  };

  useEffect(() => {
    if (result?.status !== "OK") {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  }, [result]);

  const onSumbit = async (e) => {
    const data = {
      personA: {
        ageOfDeath: input.personA_Age,
        yearOfDeath: input.personA_Year,
      },
      personB: {
        ageOfDeath: input.personB_Age,
        yearOfDeath: input.personB_Year,
      },
    };
    solve(data).then(async (response) => {
      setResult(response);
    });
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSumbit}>
        <div>
          <div>
            <Input
              id={"personA_Age"}
              label={"PersonA Age of Death"}
              type={"text"}
              onChange={onChange}
            />
            <Input
              id={"personA_Year"}
              label={"PersonA Year of Death"}
              type={"text"}
              onChange={onChange}
            />
          </div>
          <div>
            <Input
              id={"personB_Age"}
              label={"PersonB Age of Death"}
              type={"text"}
              onChange={onChange}
            />
            <Input
              id={"personB_Year"}
              label={"PersonB Year of Death"}
              type={"text"}
              onChange={onChange}
            />
          </div>
        </div>
        <button type="submit">Solve</button>
      </form>
      <div hidden={isHidden}>
        <alert style={{ color: "red" }}>{result?.message}</alert>
      </div>
      <div>
        <label>Average Person killed is: {result?.result}</label>
      </div>
    </>
  );
}
