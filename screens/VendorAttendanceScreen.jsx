import { View, Text, ScrollView } from "react-native";
import MyHeader from "../components/header/MyHeader";
import ContainerComponent from "../components/ContainerComponent";
import { typography, styles, spacing } from "../styles";
import { P, Span, H6, H5 } from "../components/text";

const VendorAttendanceScreen = () => {
  return (
    <ContainerComponent>
      <MyHeader title="Recode" isBack={true} hasIcon={true} />
      <ScrollView
        contentContainerStyle={{
          backgroundColor: "#2b87b022",
          flexGrow: 1,
        }}
        style={{ flex: 1 }}
      >
        <View style={{ width: "100%", paddingHorizontal: 12 }}>
          <H5 style={[typography.font16, { marginLeft: 0, paddingLeft: 0 }]}>
            Rakesh Sharma
          </H5>
          <P style={[typography.font14, { color: "gray", marginLeft: 0 }]}>
            electrician
          </P>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
              width: "100%",
              paddingHorizontal: 0,
            }}
          >
            <View>
              <P style={typography.font14}>Monthly wage</P>
              <Span style={[typography.font12, typography.textBold]}>
                ₹1000
              </Span>
            </View>
            <View>
              <P style={typography.font14}>Overtime Wage</P>
              <Span style={[typography.font12, typography.textBold]}>₹100</Span>
            </View>
          </View>

          <H6 style={[typography.font14, { marginTop: 10 }]}>
            Payable recorded so far ₹0
          </H6>

          {/* Cards */}
          <View style={{ marginTop: 20, width: "100%" }}>
            <View style={[styles.row]}>
              <View
                style={{
                  width: "48%",
                  backgroundColor: "white",
                  padding: 16,
                  borderRadius: 8,
                  elevation: 2,
                }}
              >
                <Span style={[typography.textBold, { color: "#c0392b" }]}>
                  Total Due amount
                </Span>
                <P
                  style={[typography.font14, typography.textBold, spacing.mt2]}
                >
                  ₹1000
                </P>
                <Span
                  style={[
                    typography.font14,
                    typography.textBold,
                    { color: "#2980b9" },
                  ]}
                >
                  Record payment
                </Span>
              </View>

              <View
                style={{
                  width: "48%",
                  backgroundColor: "white",
                  padding: 16,
                  borderRadius: 8,
                  elevation: 2,
                }}
              >
                <Span style={[typography.textBold, { color: "#c0392b" }]}>
                  Advance left
                </Span>
                <P
                  style={[typography.font14, typography.textBold, spacing.mt2]}
                >
                  ₹500
                </P>
                <Span style={[typography.font14, typography.textBold]}>
                  Record advance
                </Span>
              </View>
            </View>
          </View>

          {/* Thin Line */}
          <View
            style={{
              height: 1,
              backgroundColor: "#020409",
              marginTop: 20,
              width: "100%",
            }}
          />
        </View>
      </ScrollView>
    </ContainerComponent>
  );
};

export default VendorAttendanceScreen;
