import React, { ReactNode } from "react";
import "./App.scss";
import { useState } from "react";
import { DragDropContext, Draggable, DropResult } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import Name from "./components/nameInput";
import Email from "./components/emailInput";
import UITech from "./components/technologiesInput";
import Work from "./components/workStyle";
import Framework from "./components/frameworkInput";
import StrictModeDroppable from "./utility/strictModeDroppable";
import ArrayList from "./components/arrayList";
import { StateContext } from "./context";

//Type definitions
type Item = {
  id: string;
  content: ReactNode;
};

type Column = {
  name: string;
  items: Item[];
};

type Columns = {
  [key: string]: Column;
};

//Draggrable Items right dropzone
const itemsRight: Item[] = [
  { id: uuidv4(), content: <Name /> },
  {
    id: uuidv4(),
    content: <Email />,
  },
  {
    id: uuidv4(),
    content: <Framework />,
  },
];

//Draggrable Items  left dropzone
const itemsLeft: Item[] = [
  {
    id: uuidv4(),
    content: <UITech />,
  },
  {
    id: uuidv4(),
    content: <Work />,
  },
];

const columnsList: Columns = {
  [uuidv4()]: {
    name: "leftDropZone",
    items: itemsLeft,
  },
  [uuidv4()]: {
    name: "rightDropZone",
    items: itemsRight,
  },
};

function App() {
  const [state, setState] = useState({
    name: "",
    email: "",
    framework: "",
    technology: "",
    workStyle: "",
  });

  //drag and drop functionnality
  const [columns, setColumns] = useState<Columns>(columnsList);

  const onDragEnd = (
    result: DropResult,
    columns: Columns,
    setColumns: React.Dispatch<React.SetStateAction<Columns>>
  ) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      // Moving an item from one dropzone to another

      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      // Moving an item within the same dropzone

      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  return (
    <StateContext.Provider value={{ state, setState }}>
      <div className="grid  bg-bgColor  justify-stretch px-4 md:px-24  lg:px-[20%] py-8 min-h-screen content-start gap-10">
        <div className="grid gap-4">
          <h1 className="text-white text-center text-lg sm:text-xl md:text-2xl lg:text-4xl font-PoppinsSemiBold tracking-wider">
            Drag 'N' Drop
          </h1>
          <div>
            <p className="text-white text-center font-PoppinsRegular text-xs sm:text-sm md:text-md">
              Drag and drop the items between the two drop zones
            </p>
            <p className="text-white text-center font-PoppinsThinItalic tracking-wide text-xs sm:text-sm md:text-md">
              Items on the right side will be added to the table when you hit
              save!
            </p>
          </div>
        </div>

        <div className="grid  gap-10 ">
          <div className="grid grid-cols-2 gap-2 md:gap-10 grid-flow-col	">
            <DragDropContext
              onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
            >
              {/* Render each dropzone column with its draggable items */}
              {Object.entries(columns).map(([columnId, column]) => {
                return (
                  <div key={columnId}>
                    <StrictModeDroppable droppableId={columnId} key={columnId}>
                      {(provided, snapshot) => {
                        return (
                          <div
                            ref={provided.innerRef}
                            className={`p-4 bg-gray  rounded-xl  border-darkBlue border-dashed border-4 flex gap-4 min-h-full  flex-col ${
                              snapshot.isDraggingOver ? "bg-blueButton" : ""
                            } transition-colors ease-in duration-100`}
                            {...provided.droppableProps}
                            id={column.name}
                          >
                            {/* Render each draggable item within the dropzone */}
                            {column.items.map((item, index) => {
                              return (
                                <Draggable
                                  key={item.id}
                                  draggableId={item.id}
                                  index={index}
                                >
                                  {(provided, snapshot) => {
                                    return (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                          userSelect: "none",
                                          ...provided.draggableProps.style,
                                        }}
                                        className={`grid  gap-4 rounded-xl shadow-none transition-shadow duration-150 ${
                                          snapshot.isDragging
                                            ? "shadow-myshad"
                                            : ""
                                        }`}
                                      >
                                        {/* Render the content of each draggable item (the inputs)*/}
                                        {item.content}
                                      </div>
                                    );
                                  }}
                                </Draggable>
                              );
                            })}
                            {provided.placeholder}
                          </div>
                        );
                      }}
                    </StrictModeDroppable>
                  </div>
                );
              })}
            </DragDropContext>
          </div>
        </div>
        <ArrayList />
      </div>
    </StateContext.Provider>
  );
}

export default App;
