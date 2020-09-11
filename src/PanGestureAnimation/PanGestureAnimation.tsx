//import liraries
import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { clamp, diffClamp, onGestureEvent } from "react-native-redash";

const { Value, event, cond, eq, set, add } = Animated;

const { height, width } = Dimensions.get("window");
const BOX_HEIGHT = height / 4;
const BOX_WIDTH = width / 1.6;
const offsetX = new Value(100);
const offsetY = new Value(100);

const withOffset = (value, state, offset) => {
  /* const [state (offset), setState] = useState(0)
  if(state === State.END){
    setState(value);
    return state; (offset)
  } else {
    return offset + value
  } */

  return cond(
    eq(state, State.END),
    // offsetにvalueをセットし、offsetをリターン
    [set(offset, add(offset, value)), offset],
    // offsetとvalueを足してリターン
    add(offset, value)
  );
};

// create a component
const MyComponent = () => {
  const state = new Value(State.UNDETERMINED);
  const translationX = new Value(0);
  const translationY = new Value(0);
  const velocityX = new Value(0);
  const velocityY = new Value(0);
  const gestureHandler = onGestureEvent({
    state,
    translationX,
    translationY,
    velocityX,
    velocityY,
  });

  const translateX = diffClamp(
    withOffset(translationX, state, offsetX),
    0,
    width - BOX_WIDTH
  );
  const translateY = diffClamp(
    withOffset(translationY, state, offsetY),
    0,
    height - BOX_HEIGHT
  );

  return (
    <View style={styles.container}>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={[
            {
              transform: [{ translateX }, { translateY }],
            },
          ]}
        >
          <Animated.View style={styles.box} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c3e50",
  },
  box: {
    width: BOX_WIDTH,
    height: BOX_HEIGHT,
    backgroundColor: "#E9BB30",
  },
});

//make this component available to the app
export default MyComponent;
