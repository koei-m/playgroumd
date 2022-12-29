import {React, useContext, useMemo} from 'react';
import {View} from 'react-native';
import {
  Canvas,
  Circle,
  Paint,
  vec,
  RadialGradient,
  Path,
  Skia,
} from '@shopify/react-native-skia';
import {UiContext} from '../context/UiContextProvider';
import {getDynamicStyles} from './VehicleSpeed.style';

const VehicleSpeed = ({targetSpeed}) => {
  const uiContext = useContext(UiContext);
  const colors = uiContext.COLORS;
  const width = uiContext.WINDOW.DEVICE_WIDTH * 0.8;
  const sita = ((2 * Math.PI) / 180) * targetSpeed;
  const strokeWidth = 20;
  const styles = useMemo(() => getDynamicStyles(width), [width]);
  const radius = useMemo(() => width / 2, [width]);
  const c = vec(radius, radius);
  const r = useMemo(() => (width - strokeWidth) / 2, [width, strokeWidth]);

  const _innerArc = useMemo(() => {
    return (
      <RadialGradient
        c={c}
        r={r}
        colors={[colors.primaryColor500, colors.primaryColor]}
      />
    );
  }, [c, r, colors]);

  const _needle = useMemo(() => {
    const x = -radius * Math.cos(sita) + radius;
    const y = -radius * Math.sin(sita) + radius;
    const path = Skia.Path.Make();
    path.moveTo(radius, radius);
    path.lineTo(x, y);
    path.close();

    return (
      <Path
        path={path}
        color="white"
        strokeWidth={5}
        style="stroke"
        strokeJoin="round"
      />
    );
  }, [radius, sita]);

  // const _needleShadow = useMemo(() => {
  //   const sitaMinus = Math.PI / 16;
  //   const x = -radius * Math.cos(sita) + radius;
  //   const y = -radius * Math.sin(sita) + radius;
  //   const xMinus = -radius * Math.cos(sita - sitaMinus) + radius;
  //   const yMinus = -radius * Math.sin(sita - sitaMinus) + radius;
  //   const path = Skia.Path.Make();
  //   path.moveTo(radius, radius);
  //   path.lineTo(x, y);
  //   path.lineTo(xMinus, yMinus);
  //   path.lineTo(radius, radius);
  //   path.close();

  //   return (
  //     <Path
  //       path={path}
  //       color={colors.primaryColor500}
  //       style="fill"
  //       strokeJoin="round"
  //     />
  //   );
  // }, [radius, sita, colors.primaryColor500]);

  const _outerArc = useMemo(() => {
    return (
      <Paint
        color={colors.accentColor}
        style="stroke"
        strokeWidth={strokeWidth / 2}
      />
    );
  }, [strokeWidth, colors]);
  return (
    <View style={styles.container}>
      <Canvas style={styles.canvas}>
        <Circle c={c} r={r}>
          {_innerArc}
          {_outerArc}
        </Circle>
        {_needle}
      </Canvas>
    </View>
  );
};

export default VehicleSpeed;
