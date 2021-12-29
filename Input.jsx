import { useRef, useEffect } from "react";

import "./Input.css";

const Input = ({
  onFocus,
  error,
  placeholder,
  onChange,
  type,
  name,
  value,
  list,
  maxLength,
  onBlur,
  style,
  onClick,
  id,
}) => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (
      inputRef?.current?.id === "senha" ||
      inputRef?.current.id === "confirmarSenha"
    ) {
      if (type === "password") {
        return (inputRef.current.type = "text");
      } else {
        return (inputRef.current.type = "password");
      }
    }
  }, [value, type, id]);

  const icons = () => {
    const iconSenha =
      inputRef?.current?.id === "senha" ||
      inputRef?.current?.id === "confirmarSenha"
        ? type === "password"
          ? "icon-senha-visible"
          : "icon-senha"
        : null;

    return iconSenha;
  };

  return (
    <>
      {/* fiz a verificação do id pra poder usar com map() id do input tem que ser === senha ou confirmar senha para o estilo de senha com o olho funcionar,os erros ficam por conta da prop error  */}
      <div className="flex relative items-center">
        <input
          id={id}
          ref={inputRef}
          style={style}
          onBlur={onBlur}
          onFocus={onFocus}
          maxLength={maxLength}
          list={list}
          type={type}
          onChange={onChange}
          name={name}
          className={"input " + error}
          placeholder={placeholder}
          value={value}
        ></input>

        <button
          onClick={onClick}
          className={`bg-no-repeat bg-center absolute right-3 w-[24px] h-[24px] ${icons()}`}
        ></button>
      </div>
    </>
  );
};

export default Input;
