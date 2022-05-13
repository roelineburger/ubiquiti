import { useMemo } from "react";
import { Device } from "../../Interfaces";

interface UseFilteredDeviceProps {
  devices: Device[];
  selectedProductLines: string[];
  searchTerm: string;
}

const useFilteredDevices = ({
  devices,
  selectedProductLines,
  searchTerm,
}: UseFilteredDeviceProps) => {
  const filteredDevices = useMemo(() => {
    return devices.filter((device) => {
      if (
        selectedProductLines.length > 0 &&
        selectedProductLines.indexOf(device.line.name) === -1
      ) {
        return false;
      }
      return (
        device.product.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
      );
    });
  }, [devices, searchTerm, selectedProductLines]);
  return filteredDevices;
};

export default useFilteredDevices;
