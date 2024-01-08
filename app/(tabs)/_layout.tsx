import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Tabs,
  useNavigation,
  useRootNavigation,
  useRootNavigationState,
  useRouter,
} from "expo-router";
import Animated, {
  FadeInUp,
  FadeOutDown,
  Layout,
} from "react-native-reanimated";

type Props = {};

const TabsLayout = (props: Props) => {
  const [index, setIndex] = useState(0);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: { display: "none" },
        tabBarLabelPosition: "beside-icon",
        tabBarInactiveBackgroundColor: "white",
        tabBarInactiveTintColor: "black",
        tabBarActiveTintColor: "black",
        tabBarStyle: {
          backgroundColor: "#FBC246",
          borderTopWidth: 0,
          borderTopColor: "transparent",
          elevation: 0,
          shadowColor: "#5bc4ff",
          shadowOpacity: 0,
          shadowOffset: {
            height: 0,
            width: 0,
          },
          shadowRadius: 0,
        },
      }}
    >
      <Tabs.Screen
        name="first"
        listeners={{
          tabPress: (e) => {
            setIndex(0);
          },
        }}
        options={{
          title: "First",
          tabBarLabel: ({ focused }) => (
            <View
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#FBC246",
              }}
            >
              <View
                style={{
                  backgroundColor: focused ? "#FBC246" : "white",
                  height: "100%",
                  width: "100%",
                  borderBottomRightRadius: 10,
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    left: 0,
                    height: "50%",
                    width: 20,
                    position: "absolute",
                  }}
                />
                <View
                  style={{
                    backgroundColor: focused ? "#FBC246" : "white",
                    left: 0,
                    height: "50%",
                    width: 20,
                    position: "absolute",
                    borderTopLeftRadius: focused ? 10 : 0,
                  }}
                />
                <View
                  style={{
                    backgroundColor: "white",
                    right: 0,
                    height: "50%",
                    width: 40,
                    position: "absolute",
                  }}
                />
                <View
                  style={{
                    backgroundColor: focused ? "#FBC246" : "white",
                    right: 20,
                    height: "50%",
                    width: 20,
                    position: "absolute",
                    borderTopRightRadius: focused ? 10 : 0,
                  }}
                />
                <View
                  style={{
                    backgroundColor: "white",
                    right: 0,
                    height: "50%",
                    bottom: 0,
                    width: 20,
                    position: "absolute",
                    borderBottomLeftRadius: focused ? 10 : 0,
                    borderBottomRightRadius: focused || index === 2 ? 0 : 10,
                  }}
                />
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>First</Text>
                </View>
              </View>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="second"
        listeners={{
          tabPress: (e) => {
            setIndex(1);
          },
        }}
        options={{
          title: "Second",
          tabBarLabel: ({ focused }) => (
            <View
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#FBC246",
              }}
            >
              <View
                style={{
                  backgroundColor: focused ? "#FBC246" : "white",
                  height: "100%",
                  width: "100%",
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    left: 0,
                    height: "50%",
                    width: 20,
                    position: "absolute",
                  }}
                />
                <View
                  style={{
                    backgroundColor: focused ? "#FBC246" : "white",
                    left: 0,
                    height: "50%",
                    width: 20,
                    position: "absolute",
                    borderTopLeftRadius: focused ? 10 : 0,
                  }}
                />
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>Second</Text>
                </View>
                <View
                  style={{
                    backgroundColor: "white",
                    right: 0,
                    height: "50%",
                    width: 20,
                    position: "absolute",
                  }}
                />
                <View
                  style={{
                    backgroundColor: focused ? "#FBC246" : "white",
                    right: 0,
                    height: "50%",
                    width: 20,
                    position: "absolute",
                    borderTopRightRadius: focused ? 10 : 0,
                  }}
                />
              </View>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="third"
        listeners={{
          tabPress: (e) => {
            setIndex(2);
          },
        }}
        options={{
          title: "Third",
          tabBarLabel: ({ focused }) => (
            <View
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#FBC246",
              }}
            >
              <View
                style={{
                  backgroundColor: focused ? "#FBC246" : "white",
                  height: "100%",
                  width: "100%",
                  borderBottomLeftRadius: 20,
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    left: 0,
                    height: "50%",
                    width: 40,
                    position: "absolute",
                  }}
                />
                <View
                  style={{
                    backgroundColor: focused ? "#FBC246" : "white",
                    left: 20,
                    height: "50%",
                    width: 20,
                    position: "absolute",
                    borderTopLeftRadius: focused ? 10 : 0,
                  }}
                />
                <View
                  style={{
                    backgroundColor: "white",
                    left: 0,
                    height: "50%",
                    bottom: 0,
                    width: 20,
                    position: "absolute",
                    borderBottomRightRadius: focused ? 10 : 0,
                    borderBottomLeftRadius: focused || index === 0 ? 0 : 10,
                  }}
                />
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>Third</Text>
                </View>
                <View
                  style={{
                    backgroundColor: "white",
                    right: 0,
                    height: "50%",
                    width: 20,
                    position: "absolute",
                  }}
                />
                <View
                  style={{
                    backgroundColor: focused ? "#FBC246" : "white",
                    right: 0,
                    height: "50%",
                    width: 20,
                    position: "absolute",
                    borderTopRightRadius: focused ? 10 : 0,
                  }}
                />
              </View>
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
