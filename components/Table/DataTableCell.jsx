import React from "react";
import { DataTable } from "react-native-paper";
import ContainerComponent from "../ContainerComponent";

export default function DataTableCell() {
  return (
    <ContainerComponent>
      <DataTable.Row style={{ backgroundColor: "#2b87b022" }}>
        <DataTable.Cell numeric>1</DataTable.Cell>
        <DataTable.Cell numeric>2</DataTable.Cell>
        <DataTable.Cell numeric>3</DataTable.Cell>
        <DataTable.Cell numeric>4</DataTable.Cell>
      </DataTable.Row>
    </ContainerComponent>
  );
}
