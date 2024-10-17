import { useState } from "react";
import { View, ScrollView } from "react-native";
import { H2, H5, H6 } from "../components/text";
import { styles } from "../styles/components.styles";
import ContainerComponent from "../components/ContainerComponent";
import TabNavigation from "../components/TabNavigation";

const Card = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const LeaveSummary = () => {
  return (
    <View style={[styles.row, { flexWrap: "wrap", marginTop: 20 }]}>
      <Card style={[styles.statCard, styles.bgPrimary]}>
        <H5 style={styles.textLight}>Leave Balance</H5>
        <H2 style={styles.textLight}>26</H2>
      </Card>
      <Card style={[styles.statCard, styles.bgSuccess]}>
        <H5 style={styles.textLight}>Leave Approved</H5>
        <H2 style={styles.textLight}>4</H2>
      </Card>
      <Card style={[styles.statCard, styles.bgInfo]}>
        <H5 style={styles.textLight}>Leave Pending</H5>
        <H2 style={styles.textLight}>5</H2>
      </Card>
      <Card style={[styles.statCard, styles.bgDanger]}>
        <H5 style={styles.textLight}>Leave Cancelled</H5>
        <H2 style={styles.textLight}>10</H2>
      </Card>
    </View>
  );
};

const LeaveCard = ({ dateRange, applyDays, leaveBalance, approvedBy }) => {
  return (
    <Card style={styles.leaveCard}>
      <View style={styles.approvedStatusContainer}>
        <H5 style={styles.status}>Approved</H5>
      </View>
      <View>
        <H5>Date:</H5>
        <H6>{dateRange}</H6>
      </View>
      <View
        style={[styles.row, { justifyContent: "space-between", marginTop: 8 }]}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <H6>Apply Days</H6>
          <H5>{applyDays} Days</H5>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <H6>Leave Balance</H6>
          <H5>{leaveBalance}</H5>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <H6>Approved By</H6>
          <H5>{approvedBy}</H5>
        </View>
      </View>
    </Card>
  );
};

const LeaveScreen = () => {
  const [currentTab, setCurrentTab] = useState("Upcoming");

  const leaves = [
    {
      dateRange: "Jun 15, 2024 - Jun 18, 2024",
      applyDays: 3,
      leaveBalance: 16,
      approvedBy: "Bittu Pratihast",
    },
    {
      dateRange: "Aug 10, 2024 - Aug 12, 2023",
      applyDays: 2,
      leaveBalance: 19,
      approvedBy: "Bittu Pratihast",
    },
  ];

  return (
    <ContainerComponent>
      <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
        <LeaveSummary />
        <TabNavigation
          tabs={["Upcoming", "Past"]}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
        {currentTab === "Upcoming" &&
          leaves.map((leave, index) => (
            <LeaveCard
              key={index}
              dateRange={leave.dateRange}
              applyDays={leave.applyDays}
              leaveBalance={leave.leaveBalance}
              approvedBy={leave.approvedBy}
            />
          ))}
      </ScrollView>
    </ContainerComponent>
  );
};

export default LeaveScreen;
