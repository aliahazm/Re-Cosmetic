import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
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
import PointModal from "../components/PointModal";
import { Colors } from "react-native/Libraries/NewAppScreen";
import ItemCounter from "../components/ItemCounter";

import routes from "../navigation/routes";
import AppButton3 from "../components/AppButton3";

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

function RecycleRequest({ navigation }) {
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: colors.pink,
          flex: 1,
        }}
      >
        <ScrollView>
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

              {
                (brands.value = 1 ? (
                  <Picker
                    items={MiliandRoseOutlets}
                    name="outlet"
                    numberOfColumns={1}
                    PickerItemComponent={OutletPickerItem}
                    placeholder="Select outlet"
                    width="100%"
                  />
                ) : (
                  <Picker
                    items={MeizlabOutlets}
                    name="outlet"
                    numberOfColumns={1}
                    PickerItemComponent={OutletPickerItem}
                    placeholder="Select outlet"
                    width="100%"
                  />
                ))
              }

              <AppText style={styles.title}>RECYCLABLE ITEM</AppText>

              <Picker
                items={MiliandRoseRecyclableItems}
                name="recyclableItem"
                numberOfColumns={2}
                PickerItemComponent={CategoryPickerItem}
                placeholder="Recyclable Item"
                width="80%"
              />

              <AppText style={styles.title}>ITEM QUANTITY</AppText>

              <ItemCounter />

              <SubmitButton title="SUBMIT" />
              <View style={{ flexDirection: "row" }}>
                <PointModal />
                <AppButton3
                  onPress={() => navigation.navigate(routes.MY_RECYCLE_DETAILS)}
                />
              </View>
            </Form>
          </RCScreen>
        </ScrollView>
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
