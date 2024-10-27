import React, { useState } from "react";
import { View, TouchableOpacity, } from "react-native";
import PersonalInfo from "../components/PersonalInfo";
import ProfessionalInfo from "../components/ProfessionalInfo";
import DocumentsList from "../components/DocumentsList";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import { H4, Span } from "../components/text";
import { staff } from "../utils/faker";
import { layouts, LIGHT, PRIMARY_COLOR, styles, typography } from "../styles";
import TabNavigation from "../components/TabNavigation";
import CardFullWidth from "../components/card/CardFullWidth";
import Avatar from "../components/Avatar";
import Icon from "react-native-vector-icons/Ionicons";

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState("Personal");

  const renderContent = () => {
    if (activeTab === "Personal") {
      return <PersonalInfo data={staff} />;
    } else if (activeTab === "Professional") {
      return <ProfessionalInfo professionalData={staff} />;
    } else if (activeTab === "Documents") {
      return <DocumentsList documentData={staff} />;
    }
    return null;
  };

  return (
    <ContainerComponent>
      <MyHeader title="My Profile" isBack={true} hasIcon={true} />
      <CardFullWidth backgroundColor={PRIMARY_COLOR}>
        <View style={styles.row}>
          <Avatar avatar={staff.image} name={staff.first_name + ' ' + staff.last_name} online={false} />
          <TouchableOpacity style={layouts.center} >
            <Icon name='pencil' size={24} color={LIGHT} />
            <Span style={typography.textLight}>EDIT</Span>
          </TouchableOpacity>
        </View>
      </CardFullWidth>
      <TabNavigation
        tabs={["Personal", "Job Info", "Documents"]}
        currentTab={activeTab}
        setCurrentTab={setActiveTab}
      />
      {renderContent()}

    </ContainerComponent>
  );
};

export default ProfileScreen;

