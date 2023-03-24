import { PropsWithChildren } from "react";
import {
  Pressable as NativePressable,
  PressableProps as NativePressableProps,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  WithSpringConfig,
} from "react-native-reanimated";

type AnimatedWrapperProps = {
  progress: Animated.SharedValue<number>;
};
const SCALE_FEEDBACK_AMOUNT = 4 / 100;
const PressInConfig: WithSpringConfig = {
  overshootClamping: true,
  stiffness: 10000,
};
const PressOutConfig: WithSpringConfig = {
  overshootClamping: true,
  stiffness: 1000,
  damping: 500,
};

function AnimationWrapper({
  progress,
  children,
}: PropsWithChildren<AnimatedWrapperProps>) {
  const style = useAnimatedStyle(() => ({
    transform: [{ scale: 1 - SCALE_FEEDBACK_AMOUNT * progress.value }],
  }));
  return <Animated.View style={style}>{children}</Animated.View>;
}

type PressableProps = NativePressableProps & {
  onOutAnimationFinished?: () => void;
  onInAnimationFinished?: () => void;
};
export default function Pressable({
  children,
  onPressIn,
  onPressOut,
  onOutAnimationFinished: onUp,
  onInAnimationFinished: onDown,
  ...props
}: PressableProps) {
  const progress = useSharedValue(0);
  return (
    <NativePressable
      {...props}
      onPressIn={(...e) => {
        onPressIn?.(...e);
        progress.value = withSpring(1, PressInConfig, onUp);
      }}
      onPressOut={(...e) => {
        onPressOut?.(...e);
        progress.value = withSpring(0, PressOutConfig, onUp);
      }}
    >
      {typeof children === "function" ? (
        (args) => (
          <AnimationWrapper progress={progress}>
            {children(args)}
          </AnimationWrapper>
        )
      ) : (
        <AnimationWrapper progress={progress}>{children}</AnimationWrapper>
      )}
    </NativePressable>
  );
}
