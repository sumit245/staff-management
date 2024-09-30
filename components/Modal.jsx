import * as React from "react";
import { Modal, Portal, Text, Button, PaperProvider } from "react-native-paper";
import ContainerComponent from "./ContainerComponent";

export default function Model() {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <ContainerComponent>
      <PaperProvider>
        <Portal>
          <Modal visible={visible} onDismiss={hideModal}>
            <Text>Example Modal. Click outside this area to dismiss.</Text>
          </Modal>
        </Portal>
        <Button style={{ marginTop: 30 }} onPress={showModal}>
          Show
        </Button>
      </PaperProvider>
    </ContainerComponent>
  );
}
