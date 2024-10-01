import { DataTable } from "react-native-paper";
import ContainerComponent from "../ContainerComponent";

export default function DataTableTitle() {
  return (
    <ContainerComponent>
      <DataTable>
        <DataTable.Header style={{ backgroundColor: "#2b87b022" }}>
          <DataTable.Title sortDirection="descending">Dessert</DataTable.Title>
          <DataTable.Title numeric>Calories</DataTable.Title>
          <DataTable.Title numeric>Fat (g)</DataTable.Title>
        </DataTable.Header>
      </DataTable>
    </ContainerComponent>
  );
}
