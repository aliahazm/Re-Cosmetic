import React from "react";
import { SafeAreaView, StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import colors from "../config/colors";
import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";

import AppText from "../components/AppText";
import RCScreen from "../components/RCScreen";
import BrandPickerItem from "../components/BrandPickerItem";
import OutletPickerItem from "../components/OutletPickerItem";
import DatePickerModal2 from "../components/DatePickerModal2";
import CategoryPickerItem from "../components/CategoryPickerItem";
import { Colors } from "react-native/Libraries/NewAppScreen";

const validationSchema = Yup.object().shape({
  //date: Yup.array().min(1, "Please select date."),
  brand: Yup.object().required().nullable().label("Brand"),
  outlet: Yup.object().required().nullable().label("Outlet"),
  recyclableItem: Yup.object().required().nullable().label("Recyclable Item"),
  quantity: Yup.object().required().nullable().label("Quantity"),
});

const brands = [
  {
    label: "innisfree",
    value: 1,
    source: require("../assets/Brands/Innisfree.png"),
  },
  {
    label: "Meizlab",
    value: 2,
    source: require("../assets/Brands/Meizlab.png"),
  },
  {
    label: "MiliandRose",
    value: 3,
    source: require("../assets/Brands/MiliandRose.jpeg"),
  },
  {
    label: "Root Remedies",
    value: 4,
    source: require("../assets/Brands/RootRemedies.png"),
  },
  {
    label: "Skinned.Co",
    value: 5,
    source: require("../assets/Brands/Skinned.png"),
  },
];

const InnisfreeOutlets = [
  {
    label: "innisfree Sunway Pyramid",
    value: 1,
  },
  {
    label: "innisfree Paradigm Mall",
    value: 2,
  },
  {
    label: "innisfree AEON Shah Alam",
    value: 3,
  },
  {
    label: "innisfree 1 Utama",
    value: 4,
  },
  {
    label: "innisfree Pavilion KL",
    value: 5,
  },
  {
    label: "innisfree Suria KLCC",
    value: 6,
  },
  {
    label: "innisfree Sunway Velocity Mall",
    value: 7,
  },
  {
    label: "innisfree KL SOGO",
    value: 8,
  },
  {
    label: "innisfree Mid Valley Megamall",
    value: 9,
  },
  {
    label: "innisfree IOI City Mall",
    value: 10,
  },
  {
    label: "innisfree Central i-City",
    value: 11,
  },
];

const MeizlabOutlets = [
  {
    label: "Meizlab Bukit Tinggi",
    value: 1,
  },
  {
    label: "Meizlab Central i-City",
    value: 2,
  },
  {
    label: "Meizlab Mines",
    value: 3,
  },
  {
    label: "Meizlab Sunway Pyramid",
    value: 4,
  },
  {
    label: "Meizlab Sunway Velocity",
    value: 5,
  },
];

const MiliandRoseOutlets = [
  {
    label: "MiliandRose Bukit Tinggi",
    value: 1,
  },
  {
    label: "MiliandRose Central i-City",
    value: 2,
  },
  {
    label: "MiliandRose Mines",
    value: 3,
  },
  {
    label: "MiliandRose Sunway Pyramid",
    value: 4,
  },
  {
    label: "MiliandRose Sunway Velocity",
    value: 5,
  },
];

const RootRemediesOutlets = [
  {
    label: "Root Remedies Experience Store Bangsar",
    value: 1,
  },
  {
    label: "Root Remedies Experience Store Taman Paramount",
    value: 2,
  },
];

const SkinnedCoOutlets = [
  {
    label: "Skinned.co Bukit Tinggi",
    value: 1,
  },
  {
    label: "Skinned.co Central i-City",
    value: 2,
  },
  {
    label: "Skinned.co Mines",
    value: 3,
  },
  {
    label: "Skinned.co Sunway Pyramid",
    value: 4,
  },
  {
    label: "Skinned.co Sunway Velocity",
    value: 5,
  },
];

const InnisfreeRecyclableItems = [
  {
    label: "Essence Product Glass Bottle",
    value: 1,
    source: require("../assets/RecyclableItems/InnisfreeEssenceGlass.png"),
  },
  {
    label: "Essence Product Plastic Container",
    value: 2,
    source: require("../assets/RecyclableItems/InnisfreeEssencePlastic.png"),
  },
  {
    label: "Hair & Body Product Glass Bottle",
    value: 3,
    source: require("../assets/RecyclableItems/InnisfreeHairGlass.png"),
  },
  {
    label: "Hair & Body Product Plastic Container",
    value: 4,
    source: require("../assets/RecyclableItems/InnisfreeBodyPlastic.png"),
  },
];

const MeizlabRecyclableItems = [
  {
    label: "Dropper Glass Container",
    value: 1,
    source: require("../assets/RecyclableItems/MeizlabDropper.png"),
  },
  {
    label: "Mist Spray Bottle",
    value: 2,
    source: require("../assets/RecyclableItems/MeizlabMistSpray.png"),
  },
  {
    label: "Pump Bottle",
    value: 3,
    source: require("../assets/RecyclableItems/MeizlabPum.png"),
  },
  {
    label: "Twister Container",
    value: 4,
    source: require("../assets/RecyclableItems/MeizlabTwister.png"),
  },
];

const MiliandRoseRecyclableItems = [
  {
    label: "Lip Tint Container",
    value: 1,
    source: require("../assets/RecyclableItems/Lovie.png"),
  },

  {
    label: "Liquid Matte Container",
    value: 2,
    source: require("../assets/RecyclableItems/Thirty3.png"),
  },
];

const RootRemediesRecyclableItems = [
  {
    label: "Dropper Glass Container",
    value: 1,
    source: require("../assets/RecyclableItems/RRDropper.png"),
  },
  {
    label: "Mist Spray Bottle",
    value: 2,
    source: require("../assets/RecyclableItems/RRMistSpray.png"),
  },
  {
    label: "Pump Bottle",
    value: 3,
    source: require("../assets/RecyclableItems/RRPump.png"),
  },
  {
    label: "Roller Bottle",
    value: 4,
    source: require("../assets/RecyclableItems/RRRoller.png"),
  },
];

const SkinnedCoRecyclableItems = [
  {
    label: "Dropper Glass Container",
    value: 1,
    source: require("../assets/RecyclableItems/SkinnedDropper.png"),
  },

  {
    label: "Spray Pump Bottle",
    value: 2,
    source: require("../assets/RecyclableItems/SkinnedPump.png"),
  },
];

function RecycleRequest() {
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: colors.creme,
          flex: 1,
        }}
      >
        <RCScreen style={styles.container}>
          <Form
            initialValues={{
              date: [],
              brand: "",
              outlet: "",
              recyclableItem: null,
              quantity: "",
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
            <AppText style={styles.title}>DATE</AppText>

            <DatePickerModal2 />

            <AppText style={styles.title}>BRAND</AppText>

            <Picker
              items={brands}
              name="brand"
              numberOfColumns={2}
              PickerItemComponent={BrandPickerItem}
              placeholder="Select brand"
              width="60%"
            />

            <AppText style={styles.title}>OUTLET</AppText>

            <Picker
              items={InnisfreeOutlets}
              name="outlet"
              numberOfColumns={1}
              PickerItemComponent={OutletPickerItem}
              placeholder="Select outlet"
              width="100%"
            />

            <AppText style={styles.title}>RECYCLABLE ITEM</AppText>

            <Picker
              items={SkinnedCoRecyclableItems}
              name="recyclableItem"
              numberOfColumns={2}
              PickerItemComponent={CategoryPickerItem}
              placeholder="Recyclable Item"
              width="100%"
            />

            {/* <AppText style={styles.title}>QUANTITY</AppText>
            <FormField
              keyboardType="numeric"
              maxLength={1}
              name="quantity"
              placeholder="Enter quantity"
              width={200}
            /> */}
            <SubmitButton
              title="SUBMIT"
              onPress={() => navigation.navigate(routes.MY_RECYCLE_DETAILS)}
            />
          </Form>
        </RCScreen>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },

  title: {
    color: colors.grey,
    fontSize: 14,
    fontWeight: "bold",
    //marginHorizontal: 25,
    marginVertical: 10,
    justifyContent: "center",
    textAlign: "justify",
    //lineHeight: 19,
  },
});
export default RecycleRequest;

// import React from "react";
// import {
//   ScrollView,
//   SafeAreaView,
//   Image,
//   ImageBackground,
//   StyleSheet,
//   View,
//   Text,
//   Button,
//   useColorScheme,
//   TouchableOpacity,
// } from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { MaterialIcons } from "@expo/vector-icons";
// import { SimpleLineIcons } from "@expo/vector-icons";

// //import AppText from './app/components/AppText';

// import AppButton from "../components/AppButton";
// import colors from "../config/colors";
// function RecycleRequest(props) {
//   return (
//     //Header: RECYCLE REQUEST
//     <SafeAreaView
//       style={{
//         backgroundColor: colors.creme,
//         flex: 1,
//       }}
//     >
//       {/* Content */}
//       <View
//         style={{
//           backgroundColor: colors.pink,
//           flex: 1,
//         }}
//       >
//         <View //Date
//           style={{
//             backgroundColor: colors.pink,
//             flex: 0.7,
//             top: 10,
//           }}
//         >
//           <Text style={styles.title}>DATE</Text>
//         </View>

//         <View //Brand
//           style={{
//             backgroundColor: colors.pink,
//             flex: 0.7,
//           }}
//         >
//           <Text style={styles.title}>BRAND</Text>
//         </View>

//         <View //Outlet
//           style={{
//             backgroundColor: colors.pink,
//             flex: 0.7,
//           }}
//         >
//           <Text style={styles.title}>OUTLET</Text>
//         </View>

//         <View //Recyclable Item
//           style={{
//             backgroundColor: colors.pink,
//             flex: 1.5,
//           }}
//         >
//           <Text style={styles.title}>RECYCLABLE ITEM</Text>

//           <View //Item images
//             style={{
//               backgroundColor: colors.pink,
//               flex: 0.1,
//               flexDirection: "row",
//               marginHorizontal: 25,
//               marginTop: 15,
//               justifyContent: "space-between",
//             }}
//           >
//             <View //Item 1
//               style={{
//                 backgroundColor: colors.white,
//                 flex: 1,
//                 width: 150,
//                 height: 120,
//                 borderColor: colors.grey,
//                 borderWidth: 1,
//                 borderRadius: 25,
//                 marginRight: 10,
//               }}
//             >
//               <Text style={styles.title}>Images</Text>
//             </View>

//             <View //Item 2
//               style={{
//                 backgroundColor: colors.white,
//                 flex: 1,
//                 width: 150,
//                 height: 120,
//                 borderColor: colors.grey,
//                 borderWidth: 1,
//                 borderRadius: 25,
//                 marginRight: 10,
//               }}
//             >
//               <Text style={styles.title}>Images</Text>
//             </View>

//             <View //Item 3
//               style={{
//                 backgroundColor: colors.white,
//                 flex: 1,
//                 width: 150,
//                 height: 120,
//                 borderColor: colors.grey,
//                 borderWidth: 1,
//                 borderRadius: 25,
//               }}
//             >
//               <Text style={styles.title}>Images</Text>
//             </View>
//           </View>
//         </View>

//         <View //Points to be earned
//           style={{
//             backgroundColor: colors.white,
//             width: "100%",
//             height: 100,
//             flex: 0.6,
//             borderWidth: 25,
//             borderColor: colors.white,
//             borderRadius: 0,
//             borderTopWidth: 25,
//             borderTopLeftRadius: 30,
//             borderTopRightRadius: 30,
//             bottom: 0,
//           }}
//         >
//           <MaterialCommunityIcons
//             name="information-outline"
//             size={20}
//             color="#707070"
//           />
//           <Text style={styles.RCPoints}>RC Points</Text>
//           <Text style={styles.earn}>(to be earned)</Text>
//           <AppButton
//             title="Submit"
//             onPress={() => console.log("Tapped")}
//           ></AppButton>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: colors.creme,
//     flex: 1,
//   },

//   header: {
//     fontSize: 20,
//     fontWeight: "bold",
//     textAlign: "center",
//     color: colors.olive,
//     marginVertical: 20,
//   },

//   previousPage: {
//     // position: "absolute",
//     // top: 40,
//     // left: 30,
//     backgroundColor: colors.creme,
//     flex: 0.5,
//     left: 25,
//   },

//   menu: {
//     backgroundColor: colors.creme,
//     flex: 0.5,
//     right: -50,
//   },

//   content: {
//     color: colors.grey,
//     fontSize: 14,
//     fontWeight: "bold",
//     marginHorizontal: 25,
//     marginVertical: 0,
//     justifyContent: "center",
//     textAlign: "justify",
//     lineHeight: 19,
//   },

//   title: {
//     color: colors.grey,
//     fontSize: 14,
//     fontWeight: "bold",
//     marginHorizontal: 25,
//     marginVertical: 10,
//     justifyContent: "center",
//     textAlign: "justify",
//     //lineHeight: 19,
//   },

//   RCPoints: {
//     color: colors.grey,
//     fontSize: 16,
//     fontWeight: "bold",
//     marginHorizontal: 25,
//     marginVertical: -19,
//     justifyContent: "center",
//     textAlign: "justify",
//     //lineHeight: 19,
//   },

//   earn: {
//     color: colors.grey,
//     fontSize: 16,
//     //fontWeight: "bold",
//     marginHorizontal: 103,
//     marginVertical: 0,
//     justifyContent: "center",
//     textAlign: "justify",
//     //lineHeight: 19,
//   },
// });
// export default RecycleRequest;
