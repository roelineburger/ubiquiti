import React from "react";
//@ts-ignore
import { renderHook } from "@testing-library/react";
import useFilteredDevices from "./useFilteredDevices";

describe("useFilteredDevices", () => {
  it("filters by search term", () => {
    //Arrange
    const devices = [
      {
        icon: {
          id: "0da32da2-b540-4b03-92c0-4ee5e25da040",
        },
        line: {
          name: "airMAX",
          id: "airmax",
        },
        product: {
          abbrev: "airCube",
          name: "airCube",
        },
        shortnames: ["ACB"],
      },
      {
        icon: {
          id: "0d482159-5482-4cf7-b8ab-cfd1c798bab9",
        },
        line: {
          name: "airMAX",
          id: "airmax",
        },
        product: {
          abbrev: "airCube AC",
          name: "airCube AC",
        },
        shortnames: ["ACB-AC"],
      },
      {
        icon: {
          id: "0b6d0790-dea7-47a0-a1a6-929b85b0f247",
        },
        line: {
          name: "airMAX",
          id: "airmax",
        },
        product: {
          abbrev: "airCube ISP",
          name: "airCube ISP",
        },
        shortnames: ["ACB-ISP"],
      },
    ];
    const selectedProductLines: string[] = [];
    const searchTerm = "ac";
    //Act
    const { result } = renderHook(() =>
      useFilteredDevices({ devices, selectedProductLines, searchTerm })
    );
    //Assert
    expect(result.current.length).toBe(1);
    expect(result.current[0].product.name).toBe("airCube AC");
  });
  it("filters by selected product lines", () => {
    //Arrange
    const devices = [
      {
        icon: {
          id: "0da32da2-b540-4b03-92c0-4ee5e25da040",
        },
        line: {
          name: "airMAX",
          id: "airmax",
        },
        product: {
          abbrev: "airCube",
          name: "airCube",
        },
        shortnames: ["ACB"],
      },
      {
        icon: {
          id: "0d482159-5482-4cf7-b8ab-cfd1c798bab9",
        },
        line: {
          name: "airMAXPRO",
          id: "airmax",
        },
        product: {
          abbrev: "airCube AC",
          name: "airCube AC",
        },
        shortnames: ["ACB-AC"],
      },
      {
        icon: {
          id: "0b6d0790-dea7-47a0-a1a6-929b85b0f247",
        },
        line: {
          name: "airMAX2",
          id: "airmax",
        },
        product: {
          abbrev: "airCube ISP",
          name: "airCube ISP",
        },
        shortnames: ["ACB-ISP"],
      },
    ];
    const selectedProductLines: string[] = ["airMAX", "airMAX2"];
    const searchTerm = "";
    //Act
    const { result } = renderHook(() =>
      useFilteredDevices({ devices, selectedProductLines, searchTerm })
    );
    //Assert
    expect(result.current.length).toBe(2);
    expect(result.current[0].line.name).toBe("airMAX");
    expect(result.current[1].line.name).toBe("airMAX2");
  });
  it("filters by search term & product lines", () => {
    //Arrange
    const devices = [
      {
        icon: {
          id: "0da32da2-b540-4b03-92c0-4ee5e25da040",
        },
        line: {
          name: "airMAX",
          id: "airmax",
        },
        product: {
          abbrev: "airCube",
          name: "airCube",
        },
        shortnames: ["ACB"],
      },
      {
        icon: {
          id: "0d482159-5482-4cf7-b8ab-cfd1c798bab9",
        },
        line: {
          name: "airMAXPRO",
          id: "airmax",
        },
        product: {
          abbrev: "airCube AC",
          name: "airCube AC",
        },
        shortnames: ["ACB-AC"],
      },
      {
        icon: {
          id: "0b6d0790-dea7-47a0-a1a6-929b85b0f247",
        },
        line: {
          name: "airMAX",
          id: "airmax",
        },
        product: {
          abbrev: "airCube ISP",
          name: "airCube2 ISP",
        },
        shortnames: ["ACB-ISP"],
      },
    ];
    const selectedProductLines: string[] = ["airMAX"];
    const searchTerm = "isp";
    //Act
    const { result } = renderHook(() =>
      useFilteredDevices({ devices, selectedProductLines, searchTerm })
    );
    //Assert
    expect(result.current.length).toBe(1);
    expect(result.current[0].line.name).toBe("airMAX");
    expect(result.current[0].product.name).toBe("airCube2 ISP");
  });
});
