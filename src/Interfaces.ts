export interface Device {
  line: {
    name: string;
    id: string;
  };
  product: {
    name: string;
  };
  icon: {
    id: string;
  };
  shortnames: string[];
  unifi?: {
    network?: {
      radios?: {
        na?: {
          maxPower?: number;
          maxSpeedMegabitsPerSecond?: number;
        };
      };
      numberOfPorts?: number;
    };
  };
}
