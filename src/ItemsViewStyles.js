const itemsViewStyles = {
  table: {
    borderStyle: "solid",
    borderWidth: 4,
    display: "table",
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#795548",
  },
  invTable: {
    width: 200,
    height: 300,
    top: 90,
    left: "50%",
    marginLeft: -75,
  },
  inUseTable: {
    width: 200,
    height: 100,
    top: 295,
    right: 20,
  },
  row: {
    display: "table-row",
  },
  cell: {
    borderStyle: "solid",
    borderWidth: 1,
    width: 100,
    height: 100,
    display: "table-cell",
    verticalAlign: "middle",
    textAlign: "center",
    borderColor: "#000000",
  },
  selectedCell: {
    borderStyle: "solid",
    borderWidth: 1,
    width: 100,
    height: 100,
    display: "table-cell",
    verticalAlign: "middle",
    textAlign: "center",
  },
  playerImage: {
    borderStyle: "solid",
    borderWidth: 2,
    width: 150,
    height: 150,
    position: "absolute",
    top: 100,
    right: 50,
  },
  playerImageHover: {
    borderWidth: 3,
    borderColor: "#ffffff",
  },
  playerName: {
    fontSize: "125%",
    width: 200,
    textAlign: "center",
    position: "absolute",
    top: 20,
    right: 25,
    color: "#ffffff",
  },
  playerNameHover: {
    borderStyle: "solid",
    borderWidth: 2,
    color: "#000000",
  },
  invName: {
    fontSize: "125%",
    width: 200,
    textAlign: "center",
    position: "absolute",
    top: 20,
    left: "50%",
    marginLeft: -75,
    color: "#ffffff",
  },
  inUseName: {
    fontSize: "125%",
    width: 250,
    textAlign: "center",
    position: "absolute",
    top: 265,
    right: 3,
    color: "#ffffff",
  },
  itemInfo: {
    width: 270,
    position: "absolute",
    top: 70,
    left: 20,
  },
  itemName: {
    borderStyle: "solid",
    borderWidth: 2,
    fontSize: "130%",
    height: 50,
    borderColor: "#000000",
  },
  itemDesc: {
    borderStyle: "solid",
    borderWidth: 2,
    fontSize: "120%",
    height: 207,
    borderColor: "#000000",
  },
  undoBtn: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 100,
  },
  redoBtn: {
    position: "absolute",
    top: 20,
    right: 485,
    minWidth: 100,
    maxWidth: 300,
  },
  combineBtn: {
    position: "absolute",
    top: 340,
    left: 20,
    width: 270,
  },
  deleteBtn: {
    position: "absolute",
    top: 385,
    left: 20,
    width: 270,
  },
};

export default itemsViewStyles;