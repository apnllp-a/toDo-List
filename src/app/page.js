"use client";

import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const MyData = [
    {
      type: "Fruit",
      name: "Apple",
      id: 1,
    },
    {
      type: "Vegetable",
      name: "Broccoli",
      id: 2,
    },
    {
      type: "Vegetable",
      name: "Mushroom",
      id: 3,
    },
    {
      type: "Fruit",
      name: "Banana",
      id: 4,
    },
    {
      type: "Vegetable",
      name: "Tomato",
      id: 5,
    },
    {
      type: "Fruit",
      name: "Orange",
      id: 6,
    },
    {
      type: "Fruit",
      name: "Mango",
      id: 7,
    },
    {
      type: "Fruit",
      name: "Pineapple",
      id: 8,
    },
    {
      type: "Vegetable",
      name: "Cucumber",
      id: 9,
    },
    {
      type: "Fruit",
      name: "Watermelon",
      id: 10,
    },
    {
      type: "Vegetable",
      name: "Carrot",
      id: 11,
    },
  ];

  const [data, setData] = useState(MyData);
  const [fruitList, setFruitList] = useState([]);
  const [vegetableList, setVegetableList] = useState([]);

  const handleClick = (item) => {
    setData((prevData) =>
      prevData.filter((dataItem) => dataItem.id !== item.id)
    );

    if (item.type === "Fruit") {
      setFruitList((prevList) => [...prevList, item]);
    } else if (item.type === "Vegetable") {
      setVegetableList((prevList) => [...prevList, item]);
    }

    const timeoutId = setTimeout(() => {
      if (item.type === "Fruit") {
        setFruitList((prevList) =>
          prevList.filter((dataItem) => dataItem.id !== item.id)
        );
      } else if (item.type === "Vegetable") {
        setVegetableList((prevList) =>
          prevList.filter((dataItem) => dataItem.id !== item.id)
        );
      }
      setData((prevData) => [...prevData, item]);
    }, 5000);

    item.timeoutId = timeoutId;
  };

  const handleTableClick = (item, type) => {
    if (item.timeoutId) {
      clearTimeout(item.timeoutId);
    }

    if (type === "Fruit") {
      setFruitList((prevList) =>
        prevList.filter((dataItem) => dataItem.id !== item.id)
      );
    } else if (type === "Vegetable") {
      setVegetableList((prevList) =>
        prevList.filter((dataItem) => dataItem.id !== item.id)
      );
    }
    setData((prevData) => [...prevData, item]);
  };

  return (
    <div className={styles.headerOnTable}>
      <h2>ToDo List</h2>
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.container}>
            {data.map((item) => (
              <div key={item.id} className={styles.listGroup}>
                <button
                  className={styles.btn}
                  onClick={() => handleClick(item)}
                >
                  {item.name}
                </button>
              </div>
            ))}
          </div>
        </main>
        <div className={styles.ListOfFruit}>
          <p className={styles.headerInTable}>Fruit</p>

          {fruitList.map((item) => (
            <div key={item.id}>
              <button
                className={styles.btn}
                onClick={() => handleTableClick(item, "Fruit")}
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>
        <div className={styles.ListOfVegetable}>
          <p className={styles.headerInTable}>Vegetable</p>
          {vegetableList.map((item) => (
            <div key={item.id}>
              <button
                className={styles.btn}
                onClick={() => handleTableClick(item, "Vegetable")}
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
