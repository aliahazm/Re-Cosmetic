import React from "react";
import { ScrollView, SafeAreaView, StyleSheet, Text } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import colors from "../config/colors";
function TermsAndConditions(props) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.creme,
        flex: 1,
      }}
    >
      {/* Content */}
      <ScrollView
        style={{
          backgroundColor: colors.pink,
          flex: 1,
        }}
      >
        <Text style={styles.serviceTitle}>{"\n"}RE-COSMETIC SERVICE</Text>

        <Text style={styles.tnc}>
          {"\n"}1. INTRODUCTION {"\n"}
          {"\n"}1.1 Welcome to the Re-cosmetic application (“the App”). Please
          read the following terms and conditions (“Terms and Conditions”
          carefully before using the App to ensure that you are aware of your
          rights and obligations by using the App and with respect to
          “Re-cosmetic” and its affiliates and subsidiaries (individually and
          collectively “Re-cosmetic”, “we”, “us” or our”).
          {"\n"}
          {"\n"}1.2. By assessing or using the App, you confirm your full
          understanding and acceptance of these Terms and Conditions.
          Re-cosmetic reserves the right to add, remove or vary any of the Terms
          and Conditions at any time without prior notification. Any and all
          changes to any of the Terms and Conditions shall be deemed effective
          when posted on the App. As such, you should frequently check the Terms
          and Conditions for any updates or amendments. If you do not agree to
          any of the Terms and Conditions at any point in time, you should cease
          using the App. If you continue to use the App despite any changes or
          updates made to these Terms and Conditions, your continued use
          constitutes a continued understanding and acceptance of those changes
          or updates. {"\n"}
          {"\n"}2. LIMITED LICENSE TO USE {"\n"}
          {"\n"}2.1. We grant you a non-transferrable, limited and revocable
          license to use the App under these Terms and Conditions for the
          purposes of using our Services which includes the provision of a
          platform that enables individuals or corporations (“Users”) to connect
          to loyal cosmetics vendors (“Vendors”). {"\n"}
          {"\n"}3. DISCLAIMER {"\n"}
          {"\n"}3.1. All images, representations and descriptions of products to
          be recycled that are posted on the App are those of the respective
          Buyers and are not made by us. {"\n"}
          {"\n"}3.2. Re-cosmetic may or may not pre-screen Users, or any
          content, images, information or description posted or uploaded by the
          Users.{"\n"}
          {"\n"}3.3. All actual negotiations, contract for sale and/or
          transactions are dealt directly between the Users and Buyers and
          Re-cosmetic is not a party to any contract between Users and Buyers.
          Re-cosmetic will not be held responsible or liable for any failed or
          bad negotiations, transactions, contracts or otherwise between Vendors
          and Users.{"\n"}
          {"\n"}3.4. Re-cosmetics reserves the right to remove any content,
          image, information, post or listing for recycling which breach any of
          these Terms and Conditions.{"\n"}
          {"\n"}3.5. Re-cosmetic reserves the right to terminate your use or
          refuse your access to the App or to our Services for any reason
          whatsoever without prior notice.{"\n"}
          {"\n"}4. PRIVACY{"\n"}
          {"\n"}4.1. Re-cosmetic takes your privacy seriously. Please see link
          for the full privacy policy.{"\n"}
          {"\n"}5. SOFTWARE AND INTELLECTUAL PROPERTY RIGHTS{"\n"}
          {"\n"}5.1. All intellectual property rights whether registered or
          unregistered including but not limited to trade marks, copyright,
          industrial design, and patents on the App, and all content including
          but not limited to images, text, layout, graphics, software
          compilations, underlying source code and software are property of
          Re-cosmetic.{"\n"}
          {"\n"}5.2. You understand and agree to not copy, pass-off or infringe
          any intellectual property belonging to Re-cosmetic.{"\n"}
          {"\n"}6. ACCOUNTS AND SECURITY{"\n"}
          {"\n"}6.1. In order to use the App, you are required to register an
          account with us as a User by providing certain personal information
          (“Account”).{"\n"}
          {"\n"}6.2. You agree that all information provided by you in opening
          your Account with Re-cosmetic is correct and accurate.{"\n"}
          {"\n"}6.3. You understand and agree to keep your password confidential
          at all times.{"\n"}
          {"\n"}6.4. You will be fully responsible for your account on the App
          and Re-cosmetic will not be liable or responsible for any loss or
          damage arising from any unauthorized use of your password or account.
          {"\n"}
          {"\n"}6.5. Re-cosmetic reserves the right to immediately without prior
          notice to you, terminate your Account, remove any content or
          information including but not limited to images, graphics,
          description, text etc., withdraw any benefits or points, and/or take
          any other action deemed necessary by Re-cosmetic if you breach any of
          the terms and conditions herein.{"\n"}
          {"\n"}7. USER’S REPRESENTATIONS{"\n"}
          {"\n"}7.1. If User is an individual, you are at least eighteen (18)
          years of age;{"\n"}
          {"\n"}7.2. Your use of this App and Services do not violate any
          agreement, applicable laws or regulations that you are subjected to.
          {"\n"}
          {"\n"}8. USER’S RESPONSIBILITIES{"\n"}
          {"\n"}8.1. User shall ensure that all information, details, quantity,
          and images posted or uploaded on the App are correct and accurate.
          {"\n"}
          {"\n"}8.2. User agrees that all information and/or content including
          but not limited to images, graphics, description, text etc. posted on
          the App are correct and accurate and that User shall not post or
          upload any information and/content including but not limited to
          images, graphics, description, text etc. which are false, threatening,
          illegal, fraudulent, threatens national security, seditious,
          defamatory, immoral, indecent, offensive or breaches any laws and
          regulations.{"\n"}
          {"\n"}9. RE-COSMETIC REWARDS SYSTEM{"\n"}
          {"\n"}9.1. Re-cosmetic shall reward each User who has successfully
          completed a contract or transaction with a Vendor using the App by
          allocating points calculated in accordance to the points system set
          out in the How It Works.{"\n"}
          {"\n"}9.2. Each User with sufficient points will be able to redeem a
          voucher (subject to availability) via the App. Once a User selects a
          voucher, relevant points for the redemption of the voucher will be
          automatically deducted from the User’s account. The selected voucher
          will thereafter be available and usable by the User in the Redeemed
          page.{"\n"}
          {"\n"}9.3. Re-cosmetic shall no longer be responsible or liable in the
          event of voucher expiry.{"\n"}
          {"\n"}9.4. If User does not wish to redeem a voucher from the
          available points accumulated using the App, User may request for the
          points to be converted into cash value calculated in accordance to the
          following formula as set out in the How It Works:{"\n"}
          {"\n"}Points x 0.1 = Cash Amount{"\n"}
          {"\n"}and Re-cosmetic shall bank-in the relevant cash amount into
          User’s bank account or any Charity Organization’s bank account
          (subject to User’s preference) within five (5) working days. User
          acknowledges and accepts that it shall be fully responsible to provide
          the correct and accurate bank details on the point transfer page and
          that Re-cosmetic shall not be responsible or liable for any
          compensation, loss or damage (directly or indirectly), resulting from
          User’s error in completing the point transfer page.{"\n"}
          {"\n"}10. INDEMNITY{"\n"}
          {"\n"}10.1. You agree to indemnify, defend and hold harmless
          Re-cosmetic, its shareholders, subsidiaries, affiliates, directors,
          officers, employees, agents etc. from and against any and all
          complaints, claims, actions, proceedings, suits, damages, loss, etc.
          howsoever caused, whether direct or indirect, arising from any
          connection, negotiation, transaction or contract made via the App.
          {"\n"}
          {"\n"}11. SEVERABILITY{"\n"}
          {"\n"}11.1. If any provision in these Terms and Conditions are deemed
          unlawful, void or unenforceable under the law, that provision shall be
          deemed servable from the remaining Terms and Conditions and shall not
          affect the validity and enforceability of any remaining provisions.
          {"\n"}
          {"\n"}12. GOVERNING LAW{"\n"}
          {"\n"}12.1. These Terms and Conditions shall be governed by and
          construed in accordance to the laws of Malaysia.{"\n"}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.creme,
    flex: 1,
  },

  serviceTitle: {
    color: colors.grey,
    fontSize: 14,
    fontWeight: "bold",
    marginHorizontal: 25,
    marginVertical: 0,
    justifyContent: "center",
    textAlign: "justify",
    lineHeight: 19,
  },

  tnc: {
    color: colors.grey,
    fontSize: 12,
    fontWeight: "bold",
    marginHorizontal: 25,
    marginVertical: 0,
    justifyContent: "center",
    textAlign: "justify",
    lineHeight: 19,
  },
});
export default TermsAndConditions;
