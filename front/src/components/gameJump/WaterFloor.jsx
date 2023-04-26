import React from "react";
import { Box } from "@react-three/drei";
import { color } from "@react-three/fiber";
import WaterTexture from "assets/models/jump/WATER.gltf";
import PropTypes from "prop-types";
import { Color } from "three";

const WaterFloor = ({ bottom = 0, ...props }) => {
  return (
    <mesh {...props} position={[0, bottom - 95, 30]}>
      <boxGeometry args={[1000, 10, -400, 10, 10]} />
      <meshStandardMaterial
        color={(() => {
          const color = new Color("#00bfff");
          return color.convertSRGBToLinear();
        })()}
        opacity={0.1}
      />
    </mesh>
  );
};

WaterFloor.propTypes = {
  bottom: PropTypes.number,
};

export default WaterFloor;
