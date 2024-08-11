import React from "react";

function Product(props) {
  const {
    id,
    name,
    health,
    damage,
    armor,
    bot_class,
    catchphrase,
    avatar_url,
    created_at,
    updated_at,
  } = props.data;

  return (
    <div className="product">
      <img src={avatar_url} alt="pic" />
      <div className="description">
        <p>ID: {id}</p>
        <p>
          Name: <b>{name}</b>
        </p>
        <p>Health: {health}</p>
        <p>Damage: {damage}</p>
        <p>Armor: {armor}</p>
        <p>Bot Class: {bot_class}</p>
        <p>Catchphrase: {catchphrase}</p>
        <p>Created At: {created_at}</p>
        <p>Updated At: {updated_at}</p>
      </div>
      {props.army ? (
        <>
          <button onClick={props.onDelete} className="deleteBtn">
            Delete Bot
          </button>
          <button onClick={props.onDrop} className="dropBtn">
            Drop Bot
          </button>
        </>
      ) : (
        <button
          onClick={() => props.setSelectedBot(props.data)}
          className="addBtn"
        >
          View Bot
        </button>
      )}
    </div>
  );
}

export default Product;
