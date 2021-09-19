import TextSprite from "@seregpie/three.text-sprite";

const header = new TextSprite({
  alignment: "left",
  backgroundColor: "rgba(15, 15, 15, 0.95)",
  color: "#ffffff",
  fontFamily: "elevon, sans-serif",
  fontSize: 3,
  fontWeight: 1000,
  fontStyle: "normal",
  padding: 0.5,
  text: ["Spacetrip"].join("\n"),
});
header.position.set(-10, 10, 10);

const paragraph = new TextSprite({
  alignment: "left",
  backgroundColor: "rgba(15, 15, 15, 0.95)",
  color: "#ffffff",
  fontFamily: "elevon, sans-serif",
  fontSize: 1,
  fontWeight: 200,
  fontStyle: "normal",
  padding: 0.5,
  text: [
    "🚀 Welcome to the meme space!",
    "Move around by scrolling your mouse,",
    "dragging with the left mouse button,",
    "and dragging with the right mouse button!",
  ].join("\n"),
});
paragraph.position.set(-7, 0, 10);

const weeWoo = new TextSprite({
  alignment: "left",
  backgroundColor: "#ffffff",
  color: "rgba(15, 15, 15, 0.95)",
  fontFamily: "elevon, sans-serif",
  fontSize: 1,
  fontWeight: 700,
  fontStyle: "normal",
  padding: 0.5,
  text: ["WEEE WOOO WEEE WOOO"].join("\n"),
});

export { header, paragraph, weeWoo };
