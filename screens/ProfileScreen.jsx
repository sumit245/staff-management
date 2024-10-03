import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PersonalInfo from "../components/PersonalInfo";
import ProfessionalInfo from "../components/ProfessionalInfo";
import DocumentsList from "../components/DocumentsList";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import { personalData, professionalData, documentData } from "../utils/faker";
import { H4 } from "../components/text";
import { styles } from "../styles/components.styles";

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState("Personal");

  const renderContent = () => {
    if (activeTab === "Personal") {
      return <PersonalInfo personalData={personalData} />;
    } else if (activeTab === "Professional") {
      return <ProfessionalInfo professionalData={professionalData} />;
    } else if (activeTab === "Documents") {
      return <DocumentsList documentData={documentData} />;
    }
    return null;
  };

  return (
    <ContainerComponent>
      <MyHeader title="My Profile" isBack={true} hasIcon={true} />
      <View>
        <View style={styles.tabsContainer}>
          {["Personal", "Professional", "Documents"].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={[
                styles.tabButton,
                activeTab === tab && styles.activeTabButton,
              ]}
            >
              <H4
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </H4>
            </TouchableOpacity>
          ))}
        </View>

        {renderContent()}
      </View>
    </ContainerComponent>
  );
};

export default ProfileScreen;
